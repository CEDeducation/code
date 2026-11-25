import assert from 'node:assert/strict';
import {LESSONS} from '../public/src/curriculum.js';
import {GUIDES} from '../public/src/software.js';
let html='',listeners={},saved={},renderCount=0;
const mount={get innerHTML(){return html},set innerHTML(value){html=value;renderCount++}};
globalThis.location={hash:'#dashboard'};
globalThis.window={addEventListener:(type,cb)=>listeners['window:'+type]=cb,scrollTo:()=>{}};
globalThis.localStorage={getItem:key=>saved[key]||null,setItem:(key,val)=>saved[key]=val};
globalThis.document={getElementById:(id)=>id==='app'?mount:null,querySelector:()=>null,addEventListener:(type,cb)=>listeners['document:'+type]=cb,createElement:()=>({remove(){},style:{}}),body:{append(){}}};
await import('../public/src/app.js');
const route=path=>{globalThis.location.hash='#'+path;listeners['window:hashchange']();return html};
const click=(dataset,checked=false)=>{const el={dataset,checked,closest:()=>el};listeners['document:click']({target:el,preventDefault(){}})};
for(const l of LESSONS){
 const rendered=route('lesson/'+l.id);
 assert.ok(rendered.includes(l.title.replaceAll('&','&amp;').replaceAll('<','&lt;')),'Reader failed: '+l.id);
 assert.ok(rendered.includes('KNOWLEDGE CHECK'),'Quiz missing '+l.id);
 assert.ok(rendered.includes('FabMentor'),'Coach missing '+l.id);
}
for(const guide of GUIDES){assert.ok(route('guide/'+guide.id).includes('SUCCESS CHECK'),'Guide failed '+guide.id)}
assert.ok(route('dashboard').includes('Your next step'));
assert.ok(route('workspace').includes('Your coding workspace'));
assert.ok(html.includes('Professional VS Code extension library'));
assert.ok(route('coding').includes('Independent coding & debugging lab'));
click({action:'coding-mode',mode:'independent'});
assert.ok(!html.includes('Reveal reference'));
click({action:'coding-mode',mode:'guided'});
assert.ok(html.includes('Reveal reference'));
click({action:'coding-pick',index:'18'});
assert.ok(html.includes('JAVASCRIPT'));
assert.ok(route('lesson/zero-1').includes('Files, folders and the terminal'));
assert.ok(route('book').includes('A serious roadmap'));
assert.ok(route('labs').includes('SQL factory sandbox'));
assert.ok(route('portfolio').includes('Wafer-map defect classification'));
assert.ok(route('career').includes('application tracker'));
assert.ok(route('practice').includes('QUESTION 1 / 10'));
assert.ok(route('glossary').includes('良率'));
assert.ok(route('pro').includes('NT$100,000'));
assert.ok(route('interview').includes('SENIOR TECHNICAL INTERVIEW'));
assert.ok(route('project/wafer').includes('Eight practical engineering milestones'));
assert.ok(route('project/health').includes('Healthcare risk prediction'));
assert.ok(route('labs').includes('Python'));
assert.ok(route('career').includes('Monthly BASE'));
route('pro');
click({action:'role-track',role:'scientist'});
assert.ok(saved['fabready.v2'].includes('scientist'),'Role preference should persist');
click({action:'gate-check',key:'code'},true);
assert.ok(saved['fabready.v2'].includes('\"code\":true'),'Self-reported evidence gate should persist');
// Exact NT$100k is not strictly ABOVE the required salary; >NT$100k qualifies only if Kaohsiung is also entered.
const NativeFormData=globalThis.FormData;
globalThis.FormData=class {constructor(target){this.fields=target.fields;}get(key){return this.fields[key]||''}};
const addJob=(base,location)=>listeners['document:submit']({target:{id:'job-form',fields:{employer:'Fictional Corp',role:'AI Engineer',link:'',base:String(base),location}},preventDefault(){}});
route('career');addJob(100000,'kaohsiung');
assert.ok(html.includes('Not above NT$100k fixed-base target'),'Exactly 100k is below strict requirement');
addJob(120000,'kaohsiung');
assert.ok(html.includes('Meets entered base/location filters (not independently verified)'));
addJob(140000,'other');
assert.ok(html.includes('Does not meet Kaohsiung-only location'));
globalThis.FormData=NativeFormData;

route('lesson/start-1');
click({action:'quiz-pick',index:'1'});
click({action:'quiz-check',id:'start-1'});
assert.ok(html.includes('Correct.'));
click({action:'complete',id:'start-1'},true);
assert.ok(saved['fabready.v2'].includes('start-1'));
route('dashboard');
assert.ok(html.includes(`1 of ${LESSONS.length} lessons`));
const {default:api}=await import('../api/tutor.js');
const response=await api.fetch(new Request('https://academy.example/api/tutor',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({question:'why?'})}));
assert.equal(response.status,503);
assert.equal((await response.json()).error,'AI_NOT_CONFIGURED');
// Paid remote tutor requires explicit enable AND a private server-side access code.
const oldEnv={key:process.env.OPENAI_API_KEY,enabled:process.env.ENABLE_AI_TUTOR,code:process.env.TUTOR_ACCESS_CODE};
try{
 process.env.OPENAI_API_KEY='fake-test-key';process.env.ENABLE_AI_TUTOR='1';process.env.TUTOR_ACCESS_CODE='local-test-secret';
 const denied=await api.fetch(new Request('https://academy.example/api/tutor',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({question:'debug this'})}));
 assert.equal(denied.status,401);
 assert.equal((await denied.json()).error,'TUTOR_ACCESS_DENIED');
}finally{
 for(const [field,val] of Object.entries({OPENAI_API_KEY:oldEnv.key,ENABLE_AI_TUTOR:oldEnv.enabled,TUTOR_ACCESS_CODE:oldEnv.code})){if(val===undefined)delete process.env[field];else process.env[field]=val;}
} 
console.log(`PASS: ${LESSONS.length} reader pages, ${GUIDES.length} guides, major views, quiz, progress persistence and tutor fallback.`);

route('dashboard');click({route:'book'});const count=renderCount;listeners['window:hashchange']();assert.equal(renderCount,count,'hashchange must not rebuild an already rendered route');route('lesson/start-1');assert.match(html,/KNOWLEDGE CHECK/);console.log('PASS: duplicate hashchange render prevention and history navigation.');
