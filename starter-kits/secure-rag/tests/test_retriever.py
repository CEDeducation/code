import unittest
from retriever import answer, retrieve

class RetrievalTests(unittest.TestCase):
    def test_team_isolation(self):
        self.assertFalse(retrieve("wafer test yield anomalies", "ETCH"))
        self.assertEqual([d.doc_id for d in retrieve("wafer test yield anomalies", "TEST")], ["M-002"])
    def test_abstention(self):
        self.assertEqual(answer("unrelated xylophone", "TEST")["citations"], [])
    def test_citations(self):
        self.assertEqual(answer("pressure alarms", "ETCH")["citations"][0]["id"], "M-001")

if __name__=='__main__':unittest.main()
