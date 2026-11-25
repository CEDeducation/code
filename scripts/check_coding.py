"""Execute all 30 new reference solutions and reject each unfinished/broken starter.
Tests use local CPython and Node; actual browser runtimes are checked separately.
"""
import subprocess,json,sys
from pathlib import Path
root=Path(__file__).resolve().parents[1]
raw=subprocess.check_output(['node','--input-type=module','-e',"import{CODING_DRILLS}from './public/src/coding-drills.js';console.log(JSON.stringify(CODING_DRILLS))"],cwd=root,text=True)
tasks=json.loads(raw)
assert len(tasks)==30 and len({x['id'] for x in tasks})==30
helper='''const assert=(c,m='assertion failed')=>{if(!c)throw Error(m)}; const eq=(a,b)=>assert(JSON.stringify(a)===JSON.stringify(b),`expected ${JSON.stringify(b)}, got ${JSON.stringify(a)}`);'''
for t in tasks:
 for field,expect in [('solution',True),('starter',False)]:
  code=t[field]+'\n;\n'+t['tests'] if t['language']=='javascript' else t[field]+'\n'+t['tests']
  cmd=['node','--input-type=module','-e',helper+'\n'+code] if t['language']=='javascript' else [sys.executable,'-c',code]
  r=subprocess.run(cmd,capture_output=True,text=True,timeout=8)
  assert (r.returncode==0)==expect,(t['id'],field,r.stdout,r.stderr)
 print('PASS',t['id'],t['title'])
print(f'PASS: {len(tasks)} reference solutions and {len(tasks)} incomplete/broken starters verified.')
