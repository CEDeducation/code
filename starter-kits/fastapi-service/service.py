"""Toy production API skeleton using entirely fictional measurements.

The score below is a deterministic teaching formula, NOT an ML model.
"""
import math
import os
from fastapi import FastAPI, Header, HTTPException
from pydantic import BaseModel, Field

app=FastAPI(title="FabReady synthetic health & scoring API",version="0.1")
TOKEN=os.environ.get("DEMO_API_TOKEN")

class SensorRecord(BaseModel):
    temperature_c: float = Field(ge=-40,le=300)
    pressure_kpa: float = Field(ge=0,le=500)
    tool_id: str = Field(min_length=2,max_length=40)

@app.get('/health')
def health():
    return {"status":"ok","version":"0.1"}

@app.post('/predict')
def predict(data: SensorRecord, x_api_token: str | None = Header(default=None)):
    if not TOKEN:
        raise HTTPException(status_code=503,detail='Demo token missing: configure DEMO_API_TOKEN')
    if x_api_token != TOKEN:
        raise HTTPException(status_code=401,detail='Unauthorized')
    # Illustrative bounded scoring rule, *not* trained predictive maintenance.
    score=min(1.0, max(0.0, (data.pressure_kpa-100)/30+max(0,data.temperature_c-70)/60))
    if not math.isfinite(score):
        raise HTTPException(status_code=422,detail='Invalid numeric measurement')
    return {"tool_id":data.tool_id,"demo_score":round(score,4),"model_kind":"illustrative_rule_not_trained_ml"}
