/* All SQL runs locally in an ephemeral in-browser SQLite WASM database.
   Dataset is fictional, not based on any employer's manufacturing records. */
let SQL,db,ready;
async function init(){
 if(ready)return ready;
 ready=(async()=>{
  try { importScripts('/vendor/sqljs/sql-wasm.js'); } catch { throw new Error('SQLite runtime assets unavailable. Run npm install and npm run build, or use desktop SQLite.'); }
  SQL=await initSqlJs({locateFile:f=>new URL('/vendor/sqljs/'+f,self.location.href).href});
  db=new SQL.Database();
  db.run(`CREATE TABLE lots(lot_id TEXT PRIMARY KEY, product TEXT, started_at TEXT);
CREATE TABLE tools(tool_id TEXT PRIMARY KEY, tool_family TEXT, area TEXT);
CREATE TABLE wafers(wafer_id TEXT PRIMARY KEY,lot_id TEXT,tool_id TEXT,passed INT,tested INT,completed_at TEXT);
CREATE TABLE sensor_logs(event_id INTEGER PRIMARY KEY,tool_id TEXT,wafer_id TEXT,event_time TEXT,pressure REAL,temperature REAL,recipe TEXT);
INSERT INTO lots VALUES ('L100','Logic-A','2026-05-01'),('L101','Memory-B','2026-05-02'),('L102','Logic-A','2026-05-03');
INSERT INTO tools VALUES ('T01','Etch','A1'),('T02','Deposition','B2'),('T03','Etch','A1'),('T04','Metrology','C1');
INSERT INTO wafers VALUES
('W001','L100','T01',93,100,'2026-05-02'),('W002','L100','T01',88,100,'2026-05-02'),
('W003','L100','T02',48,50,'2026-05-03'),('W004','L101','T02',71,100,'2026-05-03'),
('W005','L101','T03',85,100,'2026-05-03'),('W006','L101','T03',91,100,'2026-05-04'),
('W007','L102','T01',99,100,'2026-05-04'),('W008','L102','T02',79,100,'2026-05-05');
INSERT INTO sensor_logs VALUES
(1,'T01','W001','2026-05-01 08:00',99.0,65.2,'R1'),
(2,'T01','W001','2026-05-01 08:05',100.4,65.4,'R1'),
(3,'T01','W002','2026-05-01 09:00',103.7,65.1,'R1'),
(4,'T01','W002','2026-05-01 09:05',105.8,65.9,'R1'),
(5,'T02','W003','2026-05-02 10:00',101.0,70.0,'R2'),
(6,'T02','W004','2026-05-02 11:00',107.1,72.6,'R2'),
(7,'T02','W004','2026-05-02 11:05',108.2,72.9,'R2'),
(8,'T03','W005','2026-05-03 09:00',102.0,66.4,'R1'),
(9,'T03','W006','2026-05-03 10:00',100.2,66.0,'R1'),
(10,'T01','W007','2026-05-03 14:00',98.7,64.6,'R1');`);
 })();
 return ready;
}
// All authored challenges request sorted output. Compare the complete ordered result,
// not a sorted or truncated display. Only one read-only query is accepted.
function sameResult(a,b){
 if(JSON.stringify(a.columns)!==JSON.stringify(b.columns)||a.values.length!==b.values.length)return false;
 return a.values.every((row,i)=>row.length===b.values[i].length&&row.every((v,j)=>{
  const w=b.values[i][j];return typeof v==='number'&&typeof w==='number'?Math.abs(v-w)<=1e-7*Math.max(1,Math.abs(v),Math.abs(w)):v===w;
 }));
}
function readQuery(q){
 q=String(q||'').trim();
 if(!/^(SELECT|WITH)\b/i.test(q))throw new Error('Start with SELECT or WITH.');
 // Conservative allowlist for this teaching sandbox; keywords inside strings may also be rejected.
 if(/\b(insert|update|delete|drop|alter|attach|detach|pragma|create|replace|vacuum|load_extension|reindex|analyze|begin|commit|rollback|savepoint|release)\b/i.test(q))throw new Error('Read-only SELECT queries are supported.');
 let result=null;
 const iterator=db.iterateStatements(q);
 for(const stmt of iterator){
  if(result!==null)throw new Error('Run exactly one SQL statement at a time.');
   const columns=stmt.getColumnNames();if(!columns.length)throw new Error('A result-producing query is required.');
   const values=[];while(stmt.step()){if(values.length>=200)throw new Error('Result exceeds 200 rows; narrow the query to inspect all rows.');values.push(stmt.get());}
   result={columns,values};
 }
 if(!result)throw new Error('No query result.');return result;
}
self.onmessage=async(e)=>{
 const {id,sql,expected}=e.data||{};
 try{await init();db.run('PRAGMA query_only=ON');const result=readQuery(sql);
  const correct=expected?sameResult(result,readQuery(expected)):null;
  self.postMessage({id,ok:true,result:[result],correct});
 }catch(error){self.postMessage({id,ok:false,error:String(error?.message||error).slice(0,8000)});}
};
