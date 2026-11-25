import fs from 'node:fs';
import {spawnSync} from 'node:child_process';
const files=['public/index.html','public/src/app.js','public/src/curriculum.js','public/src/software.js','public/src/style.css','public/src/sql-worker.js','public/src/python-worker.js','public/src/professional.js','public/src/professional-guides.js','public/src/professional-labs.js','public/src/professional-projects.js','api/tutor.js','public/src/coding-academy.js','public/src/coding-drills.js','public/src/coding-path.js','public/src/coding-guides.js','public/src/javascript-worker.js','public/src/ide.js','public/src/workspace.js','scripts/prepare-editor.mjs','public/diagnostics.html','public/src/diagnostics.js'];
for(const f of files){if(!fs.existsSync(f))throw new Error('Missing '+f);}
for(const f of files.filter(x=>x.endsWith('.js'))){
  const cmd=spawnSync('node',['--experimental-default-type=module','--check',f],{encoding:'utf8'});
  if(cmd.status!==0)throw new Error(`Syntax failure in ${f}\n${cmd.stderr}`);
}
const html=fs.readFileSync('public/index.html','utf8');
if(!html.includes('src/app.js')||!html.includes('src/style.css'))throw new Error('Broken index links');
const {MODULES,LESSONS}=await import('../public/src/curriculum.js');
const {GUIDES}=await import('../public/src/software.js');
const {ADVANCED_SQL,ADVANCED_PYTHON}=await import('../public/src/professional-labs.js');
const {PROJECT_SPECS}=await import('../public/src/professional-projects.js');
if(MODULES.length!==39||LESSONS.length!==158||GUIDES.length!==43)throw new Error('Unexpected course count');
const ids=new Set();
if(new Set(MODULES.map(m=>m.id)).size!==MODULES.length)throw new Error("Duplicate module id");
const {CODING_PHASES}=await import("../public/src/coding-path.js");
const phaseIds=CODING_PHASES.flatMap(p=>p.modules);
if(new Set(phaseIds).size!==MODULES.length||MODULES.some(m=>!phaseIds.includes(m.id)))throw new Error("Incomplete coding path");
for(const lesson of LESSONS){
 if(ids.has(lesson.id))throw new Error('Duplicated lesson '+lesson.id);
 ids.add(lesson.id);
 if(!MODULES.find(x=>x.id===lesson.module)||!lesson.quiz||lesson.quiz.options.length!==4||lesson.quiz.correct<0||lesson.quiz.correct>3)throw new Error('Invalid lesson '+lesson.id);
 for(const key of ['theory','example','pitfall','task','answer'])if(!lesson[key])throw new Error('Missing '+key+' for '+lesson.id);
}
if(ADVANCED_SQL.length!==14||ADVANCED_PYTHON.length!==14||PROJECT_SPECS.length!==7)throw new Error('Unexpected labs/projects count');
for(const p of PROJECT_SPECS){if(!p.tasks||p.tasks.length!==8||!p.interview||!p.pitfalls)throw new Error('Invalid capstone '+p.id)}
for(const p of ADVANCED_PYTHON){if(!p.tests||!p.starter||!p.hint)throw new Error('Invalid Python lab '+p.title)}
for(const p of ADVANCED_SQL){if(!p.solution||!p.starter||!p.hint)throw new Error('Invalid SQL lab '+p.title)}
console.log(`PASS: ${MODULES.length} modules, ${LESSONS.length} lessons, ${GUIDES.length} guides, quiz integrity, script syntax, and static assets.`);
