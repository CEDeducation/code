"""Offline reference implementation: authorized citation retrieval, not an LLM.

A RAG proof-of-concept: authorization BEFORE scoring; no hallucinated citations.
"""
from dataclasses import dataclass
import re

@dataclass(frozen=True)
class Document:
    doc_id: str
    team: str
    content: str
    revision: str

DOCS = (
    Document("M-001", "ETCH", "If pressure alarms, isolate the affected tool and follow approved escalation procedure.", "r2"),
    Document("M-002", "TEST", "For wafer test yield anomalies, verify lot identifiers and test denominator first.", "r1"),
    Document("M-003", "ETCH", "Maintenance steps must be approved by the authorized equipment owner.", "r1"),
)

def words(value: str) -> set[str]:
    return set(re.findall(r"[a-z0-9]+", value.lower()))

def retrieve(question: str, team: str, limit: int = 2) -> list[Document]:
    if not team or limit < 1:
        raise ValueError("Authorized team and positive limit required")
    q = words(question)
    ranked = []
    for doc in DOCS:
        if doc.team != team:  # permission checked before ranking or model context
            continue
        score = len(q & words(doc.content))
        if score > 0:
            ranked.append((score, doc))
    ranked.sort(key=lambda p: (-p[0], p[1].doc_id))
    return [doc for _, doc in ranked[:limit]]

def answer(question: str, team: str) -> dict:
    docs = retrieve(question, team)
    if not docs:
        return {"answer": "Not found in authorized source documents.", "citations": []}
    # Deliberately extract exact source text; no LLM generates unsupported claims.
    return {"answer": docs[0].content, "citations": [{"id": d.doc_id, "revision": d.revision} for d in docs]}
