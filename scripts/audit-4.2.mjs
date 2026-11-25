import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const source=fs.readFileSync('public/src/javascript-worker.js','utf8');
async function run(code,tests=''){
 let result;const ctx={self:{postMessage:r=>result=r}};
 vm.runInNewContext(source,ctx);await ctx.self.onmessage({data:{id:1,code,tests}});return result;
}
assert.equal((await run('return;', 'assert(false)')).ok,false);
assert.equal((await run('function f(x){return x+1}', 'eq(f(3),4)')).testPassed,true);
assert.equal((await run('function f(x){return x+1}', 'eq(f(3),5)')).ok,false);
assert.equal((await run('console.log(undefined)')).output,'undefined');
assert.ok((await run('for(let i=0;i<10000;i++)console.log("x".repeat(2000))')).output.length<=12000);
// Run the actual tutor handler with a stub provider: no secrets or paid requests.
const {default:api}=await import('../api/tutor.js');
const env=process.env;delete env.ENABLE_AI_TUTOR;
const req=(body,code='secret',method='POST')=>new Request('https://fabready.test/api/tutor',{method,headers:{'Content-Type':'application/json','x-fabready-tutor-code':code},...(method==='POST'?{body}: {})});
assert.equal((await api.fetch(req('{}'))).status,503);
env.ENABLE_AI_TUTOR='1';env.OPENAI_API_KEY='fake';env.TUTOR_ACCESS_CODE='secret';
assert.equal((await api.fetch(req('{}','wrong'))).status,401);
assert.equal((await api.fetch(req('{}','secret','GET'))).status,405);
assert.equal((await api.fetch(req('null'))).status,400);
assert.equal((await api.fetch(req('{'))).status,400);
assert.equal((await api.fetch(req(JSON.stringify({question:'x'.repeat(11000)})))).status,413);
let sent;globalThis.fetch=async(url,opts)=>{sent=JSON.parse(opts.body);return Response.json({output:[{content:[{type:'output_text',text:'Check the denominator.'}]}]})};
const good=await api.fetch(req(JSON.stringify({question:'Why failed?'})));assert.equal(good.status,200);assert.equal((await good.json()).answer,'Check the denominator.');assert.equal(sent.store,false);
globalThis.fetch=async()=>Response.json({output:[]});assert.equal((await api.fetch(req('{"question":"test"}'))).status,502);
globalThis.fetch=async()=>Response.json({}, {status:429});assert.equal((await api.fetch(req('{"question":"test"}'))).status,502);
console.log('PASS: early-return rejection, completed assertions, bounded output, tutor disabled/auth/validation/provider paths (mock provider).');
