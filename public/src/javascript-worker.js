// Local educational runner. Only run trusted code; visible assertions are not a security boundary.
self.onmessage=async({data})=>{
 const logs=[];let outputSize=0;
 const log=(...args)=>{if(outputSize>=12000)return;const line=args.map(x=>{try{return typeof x==='string'?x:JSON.stringify(x)??String(x)}catch{return String(x)}}).join(' ').slice(0,Math.min(2000,12000-outputSize));logs.push(line);outputSize+=line.length+1;};
 const assert=(condition,message='Assertion failed')=>{if(!condition)throw new Error(message)};
 const eq=(actual,expected)=>{const a=JSON.stringify(actual),b=JSON.stringify(expected);assert(a===b,`Expected ${b}, received ${a}`)};
 try{
  const code=String(data.code??''),tests=String(data.tests??'');
  const AsyncFunction=Object.getPrototypeOf(async function(){}).constructor;
  // A normal return from learner code must not count as completed assertions.
  const completed=Symbol('finished assertions');
  const result=await new AsyncFunction('assert','eq','console','__fabCompleted',`"use strict";\n${code}\n;\n${tests}\n;return __fabCompleted;`)(assert,eq,{log,error:log,warn:log},completed);
  if(tests.trim()&&result!==completed)throw Error('Program returned before all assertions ran. Remove the top-level return and run again.');
  self.postMessage({id:data.id,ok:true,output:logs.join('\n'),testPassed:!!tests.trim()&&result===completed});
 }catch(e){self.postMessage({id:data.id,ok:false,output:(logs.join('\n')+'\n'+String(e?.stack||e?.message||e)).slice(0,20000)});}
};
