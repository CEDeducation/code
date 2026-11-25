"""Validate all additional advanced SQL reference solutions against the UI seed DB."""
import json
from pathlib import Path
import re
import sqlite3
import subprocess

root=Path(__file__).resolve().parents[1]
js=(root/'public/src/sql-worker.js').read_text()
match=re.search(r'db\.run\(`(.*?)`\)',js,re.S)
if match is None:raise RuntimeError('Could not find synthetic SQL schema/seed')
conn=sqlite3.connect(':memory:')
conn.executescript(match.group(1))
result=subprocess.run(['node','--input-type=module','-e',"import{ADVANCED_SQL}from './public/src/professional-labs.js';console.log(JSON.stringify(ADVANCED_SQL.map(a=>({title:a.title,solution:a.solution}))));"],cwd=root,text=True,capture_output=True,check=True)
tasks=json.loads(result.stdout)
for task in tasks:
    cursor=conn.execute(task['solution'])
    rows=cursor.fetchall()
    if not rows:raise AssertionError(f"No rows: {task['title']}")
    print(f"PASS {task['title']}: {len(rows)} rows")
print(f"PASS: {len(tasks)} advanced SQL reference solutions against seeded database")
