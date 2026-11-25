"""Auditable reference implementations for advanced practice labs (not hidden grading)."""
import math
from collections import defaultdict

def pooled_yield(rows):
    p = t = 0
    for passed, tested in rows:
        if type(passed) is not int or type(tested) is not int or not 0 <= passed <= tested or tested <= 0:
            raise ValueError('invalid counts')
        p += passed; t += tested
    if not t: raise ValueError('empty input')
    return p/t

def first_duplicate(items):
    seen = set()
    for x in items:
        if x in seen: return x
        seen.add(x)
    return None

def count_recent(times, window):
    if window < 0: raise ValueError('negative window')
    left = 0; result = []
    for right, t in enumerate(times):
        while times[left] < t-window: left += 1
        result.append(right-left+1)
    return result

def merge_intervals(intervals):
    merged = []
    for start, end in sorted(intervals):
        if merged and start <= merged[-1][1]: merged[-1][1] = max(end, merged[-1][1])
        else: merged.append([start,end])
    return merged

def top_k(scores, k): return sorted(scores, reverse=True)[:max(k,0)]

def confusion_counts(y_true, y_pred):
    if len(y_true)!=len(y_pred) or any(v not in (0,1) for v in [*y_true,*y_pred]): raise ValueError('invalid labels')
    tp=fp=tn=fn=0
    for a,b in zip(y_true,y_pred):
        if a==b==1: tp+=1
        elif a==0 and b==1: fp+=1
        elif a==b==0: tn+=1
        else: fn+=1
    return tp,fp,tn,fn

def softmax(logits):
    if not logits: raise ValueError('empty logits')
    peak=max(logits); weights=[math.exp(x-peak) for x in logits]; total=sum(weights)
    return [x/total for x in weights]

def precision_at_k(labels,scores,k):
    if not labels or len(labels)!=len(scores) or k<=0: raise ValueError('invalid input')
    indices=sorted(range(len(scores)),key=lambda i:-scores[i])[:k]
    return sum(labels[i] for i in indices)/len(indices)

def valid_events(events):
    result=[]; seen=set()
    for event in events:
        pressure=event.get('pressure'); eid=event.get('event_id'); tool=event.get('tool_id')
        if eid is None or not tool or type(pressure) not in (int,float) or not math.isfinite(pressure) or eid in seen: continue
        seen.add(eid);result.append(dict(event))
    return result

def accuracy_by_group(true,pred,groups):
    if not len(true)==len(pred)==len(groups): raise ValueError('length mismatch')
    total=defaultdict(int); correct=defaultdict(int)
    for a,b,g in zip(true,pred,groups): total[g]+=1;correct[g]+=a==b
    return {g:correct[g]/n for g,n in total.items()}

def ingest(existing,incoming):
    result=[dict(e) for e in existing]; seen={e['event_id'] for e in existing}
    for e in incoming:
        if e['event_id'] not in seen: result.append(dict(e));seen.add(e['event_id'])
    return result

def latest_before(events,cutoff):
    best=None
    for event in events:
        if event['timestamp']<=cutoff and (best is None or event['timestamp']>=best['timestamp']): best=event
    return None if best is None else best['value']

def validate_request(payload):
    if not isinstance(payload,dict): return False
    tool=payload.get('tool_id'); pressure=payload.get('pressure_kpa')
    return isinstance(tool,str) and bool(tool.strip()) and type(pressure) in (int,float) and 0<=pressure<=500 and math.isfinite(pressure)

def alerts(scores,threshold):
    if any(not math.isfinite(s) or not 0<=s<=1 for s in scores): raise ValueError('invalid score')
    return sum(s>=threshold for s in scores)
