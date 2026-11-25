import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { CODING_DRILLS } from '../public/src/coding-drills.js';
const source=fs.readFileSync('public/src/javascript-worker.js','utf8');
async function execute(code,tests){let result;const context={self:{postMessage:r=>result=r}};vm.runInNewContext(source,context);await context.self.onmessage({data:{id:1,code,tests}});return result;}
const drills=CODING_DRILLS.filter(x=>x.language==='javascript');
for(const d of drills){assert.equal((await execute(d.solution,d.tests)).testPassed,true,d.id);assert.equal((await execute(d.starter,d.tests)).ok,false,d.id);}
// Validate malformed saved drafts and exercise the postMessage error recovery path.
const store={};globalThis.localStorage={getItem:k=>store[k]||null,setItem:(k,v)=>store[k]=v};
const {draftGet}=await import('../public/src/ide.js');store['fabready.draft.a']='{"bad":true}';assert.equal(draftGet('a'),null);store['fabready.draft.a']='"print(1)"';assert.equal(draftGet('a'),'print(1)');
const {workspaceAction,workspaceView}=await import('../public/src/workspace.js');let html='',terminated=0;const render=()=>html=workspaceView();globalThis.Worker=class{postMessage(){throw Error('clone failed')}terminate(){terminated++}};
await workspaceAction('select',{dataset:{index:'1'}},render);await workspaceAction('run',{},render);assert.match(html,/Unable to send code to runtime: clone failed/);assert.equal(terminated,1);assert.doesNotMatch(html,/Running…/);
console.log(`PASS: ${drills.length} actual JavaScript worker reference/starter pairs in VM, malformed draft rejection, worker-send error recovery.`);
