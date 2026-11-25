# FabReady 4 — Developer Studio and VS Code setup

## Start in the website

Open **Developer Studio** from the sidebar. It has six starter files: Python, JavaScript, SQL, HTML, CSS and TypeScript. Select a file, type code, and click Run code (Ctrl/Command+Enter). Use + File to create a new independent snippet, Rename/Delete to manage it, Download to save the current file, or Export files for a JSON backup. Code and optional assertions save to localStorage in the current browser; the backup is a human-readable export, not a built-in import. Clear browser data only after exporting. The original 72 challenges still check against their provided tests or expected results.

The Output/Problems panel reports program output or the first exception. A successful freeform program does not establish correctness. For Python or JavaScript, open the assertion area, turn it on, and write tests that cover ordinary, boundary and invalid inputs. Example JS: `function double(x){return 2*x}` and `eq(double(5), 10); eq(double(0), 0);`. Example Python: `def double(x): return x*2` and `assert double(5) == 10`. Change expected 10 to 11 and observe the failure. Read the error, trace the values and repair the code; do not treat AI suggestions as verified fixes.

### Editor features

- Basic editor: line numbers, cursor position, indentation, search, native undo/redo, expand, file download, local drafts, Ctrl/Cmd+Enter to run, Ctrl/Cmd+S to save, Ctrl/Cmd+F to find, Tab to indent.
- **Enable smart editor**: Monaco (Microsoft's VS Code editor core) adds syntax highlighting, bracket matching, code navigation, completion and supported-language formatting. JS/TS have richer built-in language services; Python and SQL have basic language support, not desktop Pylance or live database intelligence. Independent mode suppresses automatic suggestions and inline AI suggestions. It is not a secure exam environment.
- Monaco is installed from pinned npm dependency at build time, and copied to `public/vendor/monaco/vs`. If absent, loading fails and the basic editor remains usable. On desktop: `npm install`, `npm run build`, `npm run dev`. Vercel explicitly runs `npm install` and `npm run build`. The browser never downloads Monaco from a third-party CDN; version 4.4 also serves the Python and SQL runtimes from same-origin assets copied during the full build.

### Runtime boundaries

The Python, JS and read-only SQL runners are individual snippets, not a full system terminal. Only execute trusted code you wrote. Workers are not a security boundary for arbitrary untrusted code. TypeScript, JSON and Markdown can be edited and exported but not executed. HTML/CSS preview is a sandboxed iframe with scripts disabled and external subresources blocked; it uses the selected HTML or CSS file and the first file of the complementary type. It does not run JavaScript or build a React app. Actual debugging breakpoints, package installation, Docker, Git, multi-file builds and real databases belong in desktop VS Code or a suitable remote development environment.

## Desktop VS Code: install the real extensions

1. Install VS Code from https://code.visualstudio.com/download. Install Python, Git and Node separately as needed.
2. Unzip this project and choose File > Open Folder. The `.vscode/extensions.json` file recommends 18 actual extensions, including Python, Pylance, Python Debugger, Ruff, Jupyter, ESLint, Prettier, SQLTools, PostgreSQL driver, Container Tools, GitLens, GitHub Pull Requests, REST Client, C/C++, Java, EditorConfig, YAML and Dev Containers. In the Extensions view search `@recommended`; install only the tools you need. VS Code's own recommendation prompt may offer these. The website's extension library links to Marketplace and includes a mini-lab for each tool. Copilot is optional and excluded from the default recommendation list to prioritize independent learning. Some extensions/services may require accounts or paid features.
3. Open the integrated terminal, create a Python environment (`python -m venv .venv`), select it with Python: Select Interpreter, and run a simple Python script. If your Windows policy blocks activation, select the interpreter in VS Code or run `.venv\Scripts\python.exe` directly rather than disabling security policies.
4. Use the gutter to set a breakpoint, then Run and Debug. Observe locals and step through a loop. Use Ruff to find unused imports, and run pytest in the selected environment after installing pytest. For JavaScript/TypeScript install dependencies in the project before using ESLint/Prettier. Set up a practice database for SQLTools; never paste work credentials into a public site. Docker and Dev Containers need the separate Docker runtime; C/C++ needs a compiler; Java needs a JDK.
5. Use Git's Source Control view to inspect diffs before commits. Disable AI assistance during independent exams. Export the practice source and make a small Git repository for your own exercises.

Official references:
- https://github.com/microsoft/monaco-editor
- https://code.visualstudio.com/docs/configure/extensions/extension-marketplace
- https://code.visualstudio.com/docs/remote/vscode-web
- https://code.visualstudio.com/docs/python/linting

## AI debugging coach

The remote tutor is opt-in. Vercel must have `OPENAI_API_KEY`, `ENABLE_AI_TUTOR=1`, and `TUTOR_ACCESS_CODE` configured (see README). Enter the private access code in the workspace. Clicking review sends up to 1,800 characters of active code and an output excerpt to the configured provider. Never submit confidential code, credentials or personal data. The local coach is a heuristic based on error text, not a full debugger. Paid API calls need proper authentication, rate limiting and budget controls for public use.

## Verification

`npm test` checks original lessons, guides, source and major views. `node scripts/check_studio.mjs` exercises Studio rendering/state and the actual JS worker source via Node VM, including passing/failing assertions and persistence. `python scripts/check_studio.py` is an optional Chromium check for fallback-editor behavior with local source interception, assuming the browser can navigate. Full browser verification is not complete: both local HTTP and intercepted navigation were blocked by environment policy; npm access was also unavailable, so actual Monaco asset loading/formatting/language features, Python/SQL browser CDN execution and deployed AI tutor remain to be verified on a real installation. No live Vercel deployment was made.
