import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { Worker } from 'node:worker_threads';
import { prepare,runtimeFiles } from './prepare-editor.mjs';
import { CODING_DRILLS } from '../public/src/coding-drills.js';
// A fixture checks packaging logic only, not the actual vendor binaries.
const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'fabready-package-'));
try {
 assert.throws(()=>prepare(tmp),/Required full-build assets missing/);
 for(const f of Object.values(runtimeFiles).flat()){const out=path.join(tmp,f);fs.mkdirSync(path.dirname(out),{recursive:true});fs.writeFileSync(out,'synthetic packaging test fixture');}
 prepare(tmp);
 for(const [name,files] of Object.entries(runtimeFiles))for(const f of files){const target=path.join(tmp,'public/vendor',name,name==='monaco'&&f.includes('/min/vs/')?'vs/'+f.split('/min/vs/')[1]:path.basename(f));assert.equal(fs.readFileSync(target,'utf8'),'synthetic packaging test fixture');}
 fs.unlinkSync(path.join(tmp,runtimeFiles.pyodide[0]));assert.throws(()=>prepare(tmp),/pyodide.js/);
} finally {fs.rmSync(tmp,{recursive:true,force:true});}
for(const [name,expected] of [['python','/vendor/pyodide/pyodide.js'],['sql','/vendor/sqljs/sql-wasm.js']]){
 const source=fs.readFileSync(`public/src/${name}-worker.js`,'utf8');assert.ok(source.includes(expected));assert.ok(!source.includes('https://'));
 let message;const ctx={self:{postMessage:r=>message=r},importScripts:()=>{throw Error('missing asset')}};vm.runInNewContext(source,ctx);await ctx.self.onmessage({data:{id:5,code:'print(1)',sql:'SELECT 1'}});assert.equal(message.id,5);assert.equal(message.ok,false);assert.match(message.error||message.output,/runtime assets unavailable/);
}
// Execute the actual browser worker handler inside a separate Node worker thread.
// This validates thread messaging and cancellation but is not a browser-security test.
const source=fs.readFileSync('public/src/javascript-worker.js','utf8');
function run(code,tests='',timeout=4000){return new Promise((resolve,reject)=>{
 const w=new Worker(`const {parentPort}=require('node:worker_threads');global.self={postMessage:v=>parentPort.postMessage(v)};${source}\nparentPort.on('message',data=>self.onmessage({data}));`,{eval:true});
 let timer=setTimeout(()=>{w.terminate();reject(Error('Worker timed out'));},timeout);
 w.once('message',m=>{clearTimeout(timer);w.terminate();resolve(m)});w.once('error',e=>{clearTimeout(timer);w.terminate();reject(e)});w.postMessage({id:9,code,tests});
});}
for(const d of CODING_DRILLS.filter(d=>d.language==='javascript')){assert.equal((await run(d.solution,d.tests)).testPassed,true,d.id);assert.equal((await run(d.starter,d.tests)).ok,false,d.id);}
await assert.rejects(run('while(true){}','',300),/Worker timed out/);
assert.equal((await run('console.log(42)')).output,'42');
for(const f of ['index.html','public/index.html'])assert.doesNotMatch(fs.readFileSync(f,'utf8'),/fonts\.googleapis|fonts\.gstatic/);
console.log('PASS: packaging fixtures and missing-asset paths, 12 JS worker thread challenge pairs, infinite-loop cancellation, local runtime paths, no remote fonts.');
