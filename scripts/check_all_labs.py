"""Run SQL references, beginner Python examples, and independent drill solutions locally."""
import concurrent.futures as cf
import json, re, sqlite3, subprocess, sys
from pathlib import Path
root=Path(__file__).resolve().parents[1]
js="""import fs from 'node:fs';import {CODING_DRILLS} from './public/src/coding-drills.js';import {ADVANCED_SQL,ADVANCED_PYTHON} from './public/src/professional-labs.js';const src=fs.readFileSync('public/src/app.js','utf8');const list=name=>Function('return '+src.match(new RegExp('const '+name+'=(\\\\[[\\\\s\\\\S]*?\\\\n\\\\]);'))[1])();console.log(JSON.stringify({drills:CODING_DRILLS,sql:[...list('sqlTasks'),...ADVANCED_SQL],python:list('pyTasks'),advanced:ADVANCED_PYTHON}));"""
raw=subprocess.check_output(['node','--input-type=module','-e',js],cwd=root,text=True);data=json.loads(raw)
seed=re.search(r'db\.run\(`(.*?)`\)',(root/'public/src/sql-worker.js').read_text(),re.S).group(1)
db=sqlite3.connect(':memory:');db.executescript(seed)
for t in data['sql']:
 c=db.execute(t['solution']);assert c.description;rows=c.fetchall();assert rows,t['title']
 assert len(rows)<=200,t['title']
 assert len({col[0] for col in c.description})==len(c.description),t['title']
assert db.execute('select count(*) from wafers where wafer_id not in (select wafer_id from sensor_logs)').fetchone()[0]>0
assert db.execute('select count(*) from tools where tool_id not in (select tool_id from wafers)').fetchone()[0]>0
print(f"PASS: {len(data['sql'])} SQL reference queries and missing-record fixtures",flush=True)
helper="const assert=(c,m='assertion failed')=>{if(!c)throw Error(m)}; const eq=(a,b)=>assert(JSON.stringify(a)===JSON.stringify(b),`expected ${JSON.stringify(b)}, got ${JSON.stringify(a)}`);"
def run(t,field,expect):
 code=t[field]+'\n'+(';' if t['language']=='javascript' else '')+'\n'+t['tests'];cmd=['node','--input-type=module','-e',helper+'\n'+code] if t['language']=='javascript' else [sys.executable,'-c',code]
 r=subprocess.run(cmd,capture_output=True,text=True,timeout=12);assert (r.returncode==0)==expect,(t['id'],field,r.stdout,r.stderr)
 return t['id'],field
with cf.ThreadPoolExecutor(max_workers=6) as pool:
 futures=[pool.submit(run,t,field,expected) for t in data['drills'] for field,expected in [('solution',True),('starter',False)]]
 for f in cf.as_completed(futures):f.result()
print(f"PASS: {len(data['drills'])} drill solutions and {len(data['drills'])} failing starters",flush=True)
for t in data['python']:
 r=subprocess.run([sys.executable,'-c',t['starter']],capture_output=True,text=True,timeout=8);assert r.returncode==0 and r.stdout.strip()==t['expected'],(t['title'],r.stdout,r.stderr)
print(f"PASS: {len(data['python'])} beginner Python examples",flush=True)
refs=(root/'scripts/advanced_python_references.py').read_text()
for t in data['advanced']:
 exec(compile(refs+'\n'+t['tests'],'<reference>','exec'),{})
 try: exec(compile(t['starter']+'\n'+t['tests'],'<starter>','exec'),{})
 except Exception: pass
 else: raise AssertionError(t['title']+' starter unexpectedly passed')
print(f"PASS: {len(data['advanced'])} advanced Python reference solutions and failing starters",flush=True)
