// Suggested ordering, rather than the original chapter numbering. Completion is self-reported.
export const CODING_PHASES = [
 {name:'01 · Zero to first program',weeks:'Weeks 1–8',modules:['start','zero','tools','python'],gate:'Write, run and debug simple programs from a blank file; explain every line.'},
 {name:'02 · Independent Python programmer',weeks:'Weeks 9–20',modules:['pycore','algocore','propy','algos','sql','dbpro'],gate:'Pass unseen functions, algorithms and SQL; explain complexity and edge cases.'},
 {name:'03 · Full-stack software developer',weeks:'Weeks 21–36',modules:['webcore','tsreact','backend','quality'],gate:'Build a tested web application with authentication, database and deployment.'},
 {name:'04 · Advanced software engineering',weeks:'Weeks 37–48',modules:['oscore','cscore','arch','ops','secure','cloudpro'],gate:'Explain concurrency, network failures, security and architecture; recover a failed deployment.'},
 {name:'05 · AI and data engineer',weeks:'Weeks 49–68',modules:['math','data','ml','statspro','mlpro','vision','dlpro','rag','llmpro','datapro'],gate:'Train an evaluated model and build a reliable, cited AI service with reproducible data.'},
 {name:'06 · Specialist and career launch',weeks:'Weeks 69–96+',modules:['fab','industrial','systems','domains','portfolio','build','career','interviews','salary'],gate:'Ship original capstones, get independent code reviews and pass real mock interviews.'}
];
export const CODING_PROJECTS=[
 {title:'1. Command-line calculator',level:'Starter',brief:'Create a Python program with separate functions for arithmetic and unit conversion. Handle invalid inputs and division by zero.',accept:'At least 10 tests, clear prompts, no broad exception suppression, README run instructions.'},
 {title:'2. Factory CSV report',level:'Starter',brief:'Parse a fictional CSV, validate fields, aggregate passed/tested by tool and write a JSON summary.',accept:'Handle quoted fields, duplicates policy, missing data, zero denominator and invalid input; test all.'},
 {title:'3. Algorithm toolkit',level:'Intermediate',brief:'Implement search, stable merge, bracket validation, BFS and rolling sums without copying solutions.',accept:'Unit tests for edge cases, time/space complexity and comparison with simple baseline.'},
 {title:'4. Responsive task dashboard',level:'Intermediate',brief:'Build HTML/CSS/JavaScript task tracker with accessible forms, filtering and local persistence.',accept:'Keyboard-accessible, narrow-screen layout, no HTML injection, empty/error states, tests.'},
 {title:'5. Full-stack incident manager',level:'Advanced',brief:'Build React/Next.js UI, API and PostgreSQL store for fictional equipment incidents. Use a maintained auth provider.',accept:'Per-user authorization, validated schemas, migration, integration and browser tests, Vercel demo using synthetic data.'},
 {title:'6. Reliable job queue',level:'Advanced',brief:'Create API + worker + durable storage for retryable analytics jobs, with bounded concurrency.',accept:'Idempotency, retry/backoff, simulated worker failure and recovery, queue metrics and tests.'},
 {title:'7. Model-powered quality dashboard',level:'Advanced',brief:'Train a leakage-safe model on licensed or synthetic data; expose predictions through an API and explain uncertainty.',accept:'Baseline, held-out metrics, versioning, tested data validation, monitoring and rollback plan.'},
 {title:'8. Your own AI coding tutor',level:'Expert',brief:'Create a tutor UI, lesson retrieval, model adapter, test-feedback explanation and permission controls.',accept:'No API secrets in browser, grounded explanations, mocked model tests, evaluation corpus, safe execution limits and cost notes.'}
];
