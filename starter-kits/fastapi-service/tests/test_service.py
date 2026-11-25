from fastapi.testclient import TestClient
from service import app

client = TestClient(app)

def test_health():
    assert client.get('/health').json()['status'] == 'ok'

def test_auth_required(monkeypatch):
    monkeypatch.setattr('service.TOKEN','testing-secret')
    r=client.post('/predict',json={'tool_id':'T01','temperature_c':70,'pressure_kpa':101})
    assert r.status_code==401

def test_bounds(monkeypatch):
    monkeypatch.setattr('service.TOKEN','testing-secret')
    r=client.post('/predict',headers={'x-api-token':'testing-secret'},json={'tool_id':'T01','temperature_c':70,'pressure_kpa':-1})
    assert r.status_code==422

def test_predict_synthetic(monkeypatch):
    monkeypatch.setattr('service.TOKEN','testing-secret')
    r=client.post('/predict',headers={'x-api-token':'testing-secret'},json={'tool_id':'T01','temperature_c':70,'pressure_kpa':101})
    assert r.status_code==200
    assert r.json()['model_kind']=='illustrative_rule_not_trained_ml'
