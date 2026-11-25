// Install pinned browser assets at build time. No CDN is required for core labs.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
export const runtimeFiles = {
  monaco: ['node_modules/monaco-editor/min/vs/loader.js','node_modules/monaco-editor/min/vs/editor/editor.main.js','node_modules/monaco-editor/LICENSE'],
  pyodide: ['pyodide.js','pyodide.asm.js','pyodide.asm.wasm','python_stdlib.zip','pyodide-lock.json'].map(x=>'node_modules/pyodide/'+x),
  sqljs: ['sql-wasm.js','sql-wasm.wasm'].map(x=>'node_modules/sql.js/dist/'+x)
};
export function prepare(root=process.cwd()){
 const absolute=f=>path.join(root,f);
 const missing=Object.values(runtimeFiles).flat().filter(f=>!fs.existsSync(absolute(f))||!fs.statSync(absolute(f)).isFile()||fs.statSync(absolute(f)).size===0);
 if(missing.length) throw Error('Required full-build assets missing: '+missing.join(', ')+'. Run npm install. For textbook/basic-editor-only checks use npm run build:core.');
 const dest=absolute('public/vendor');
 // Rebuild only the managed runtime directories; do not leave obsolete files.
 for(const name of Object.keys(runtimeFiles)) {fs.rmSync(path.join(dest,name),{recursive:true,force:true});fs.mkdirSync(path.join(dest,name),{recursive:true});}
 fs.cpSync(absolute('node_modules/monaco-editor/min/vs'),path.join(dest,'monaco/vs'),{recursive:true});
 fs.copyFileSync(absolute(runtimeFiles.monaco[2]),path.join(dest,'monaco/LICENSE'));
 for(const name of ['pyodide','sqljs']) for(const f of runtimeFiles[name]) fs.copyFileSync(absolute(f),path.join(dest,name,path.basename(f)));
 // Preserve distributed license/readme files when provided by the package.
 for(const [pkg,name] of [['pyodide','pyodide'],['sql.js','sqljs']]) for(const f of fs.readdirSync(absolute('node_modules/'+pkg))) if(/^(license|copying|notice|readme)(\.|$)/i.test(f)&&fs.statSync(absolute('node_modules/'+pkg+'/'+f)).isFile())fs.copyFileSync(absolute('node_modules/'+pkg+'/'+f),path.join(dest,name,f));
 console.log('Prepared local Monaco, Pyodide and SQLite WASM assets.');
}
if(process.argv[1]&&path.resolve(process.argv[1])===path.resolve(fileURLToPath(import.meta.url)))try{prepare()}catch(e){console.error(e.message);process.exitCode=1;}
