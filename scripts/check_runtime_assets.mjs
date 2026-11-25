// Real dependency integration gate, not a mock. Requires npm install/build.
import fs from 'node:fs';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { loadPyodide } from 'pyodide';
const require=createRequire(import.meta.url);
const initSqlJs=require('sql.js');
const assets=['monaco/vs/loader.js','monaco/vs/editor/editor.main.js','pyodide/pyodide.js','pyodide/pyodide.asm.js','pyodide/pyodide.asm.wasm','pyodide/python_stdlib.zip','pyodide/pyodide-lock.json','sqljs/sql-wasm.js','sqljs/sql-wasm.wasm'];
for(const f of assets) assert.ok(fs.statSync('public/vendor/'+f).size>0, f);
const py=await loadPyodide();assert.equal(await py.runPythonAsync('sum(range(10))'),45);assert.throws(()=>py.runPython('assert False'));
const sql=await initSqlJs();const db=new sql.Database();db.run('CREATE TABLE t(x INT); INSERT INTO t VALUES(4),(5)');assert.deepEqual(db.exec('SELECT sum(x) AS total FROM t')[0].values,[[9]]);db.close();
console.log('PASS: real installed Python and SQLite WASM in Node; all required local build assets exist. Browser integration remains a separate gate.');
