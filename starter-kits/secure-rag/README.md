# Starter kit 2 — Citation-grounded, permission-filtered retrieval

This offline reference starts with a transparent word-overlap baseline instead of claiming that attaching an LLM produces a safe RAG assistant. Documents are synthetic and user permissions are simulated.

Run `python -m unittest discover -s tests -v`. Follow on by implementing a real identity provider, user/team authorization tied to trusted server credentials, exact passage IDs, vector retrieval and explicit citation checks, held-out QA with unknown-answer examples, and prompt-injection tests. **Never let a browser-supplied team label authorize confidential data in production.**
