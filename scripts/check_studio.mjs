import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
let storage={};globalThis.localStorage={getItem:k=>storage[k]||null,setItem:(k,v)=>{storage[k]=v},removeItem:k=>delete storage[k]};
const {workspaceView,workspaceAction,workspaceInput,currentFile,extensionIds}=await import('../public/src/workspace.js');
let html='';const render=()=>html=workspaceView();render();assert.ok(html.includes('Your coding workspace'));assert.equal(extensionIds.length,19);
// Execute the real JavaScript worker source in a local VM; browser wiring is not proven by this test.
let lastWorker;
globalThis.Worker=class{constructor(path){assert.equal(path,'/src/javascript-worker.js');lastWorker=this;}terminate(){}postMessage(data){const instance=this;const ctx={self:{postMessage:r=>instance.onmessage({data:r})}};vm.runInNewContext(fs.readFileSync('public/src/javascript-worker.js','utf8'),ctx);ctx.self.onmessage({data})}};
const wait=()=>new Promise(r=>setTimeout(r,20));
await workspaceAction('select',{dataset:{index:'1'}},render);workspaceInput({id:'workspace-code',value:'console.log(2+3)'});await workspaceAction('run',{},render);await wait();assert.ok(html.includes('FINISHED · No automatic correctness claim.\n5'));
workspaceInput({id:'workspace-code',value:'throw new TypeError("test error")'});await workspaceAction('run',{},render);await wait();assert.ok(html.includes('TypeError: test error'));
workspaceInput({id:'workspace-code',value:'function double(x){return x*2}'});workspaceInput({id:'workspace-test-toggle',checked:true});workspaceInput({id:'workspace-tests',value:'eq(double(5),10)'});await workspaceAction('run',{},render);await wait();assert.ok(html.includes('PASS · Your written assertions passed.'));
workspaceInput({id:'workspace-tests',value:'eq(double(5),11)'});await workspaceAction('run',{},render);await wait();assert.ok(html.includes('Expected 11, received 10'));
assert.equal(JSON.parse(storage['fabready.workspace.v1']).files[1].code,'function double(x){return x*2}');
await workspaceAction('select',{dataset:{index:'0'}},render);await workspaceAction('select',{dataset:{index:'1'}},render);assert.ok(html.includes('eq(double(5),11)'));assert.equal(currentFile().name,'main.js');
const rec=JSON.parse(fs.readFileSync('.vscode/extensions.json'));assert.equal(rec.recommendations.length,18);assert.ok(rec.recommendations.includes('ms-python.python'));
console.log('PASS: Studio render, real JS runner pass/error/assertions in VM, file/test persistence, extension config.');
