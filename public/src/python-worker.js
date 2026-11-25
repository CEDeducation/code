// Pyodide executes in a sandboxed browser worker. Long-running code is terminated by the UI.
let pyodide;
async function getPyodide(){
 if(!pyodide){
  try { importScripts('/vendor/pyodide/pyodide.js'); } catch { throw new Error('Python runtime assets unavailable. Run npm install and npm run build, or use desktop Python.'); }
  pyodide=await loadPyodide({indexURL:new URL('/vendor/pyodide/',self.location.href).href});
 }
 return pyodide;
}
self.onmessage=async({data})=>{
 let lines=[],outputSize=0;
 const capture=x=>{if(outputSize>=12000)return;const part=String(x).slice(0,12000-outputSize);lines.push(part);outputSize+=part.length+1;};
 try{
  const py=await getPyodide();
  py.setStdout({batched:capture});
  py.setStderr({batched:capture});
  // Use a fresh execution namespace for every attempt to avoid stale symbols.
  py.globals.set('__fab_source', String(data.code||''));
  py.globals.set('__fab_tests', String(data.tests||''));
  const result=await py.runPythonAsync("__fab_scope={'__name__':'__main__'}; exec(compile(__fab_source, '<learner>', 'exec'), __fab_scope); exec(compile(__fab_tests, '<challenge_tests>', 'exec'), __fab_scope) if __fab_tests else None");
  let stdout=lines.join('\n').trim();
  if(!stdout && result!==undefined && result!==null){stdout=String(result)}
  self.postMessage({id:data.id,ok:true,testPassed:!!data.tests,output:stdout||'(Program finished without output. Use print(...) to display results.)'});
 }catch(err){self.postMessage({id:data.id,ok:false,output:(lines.join('\n')+'\n'+String(err?.message||err)).slice(0,20000)});}
};
