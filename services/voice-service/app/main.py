from fastapi import FastAPI

app = FastAPI(title="NowWise Voice Service")


@app.get("/health")
@app.get("/api/voice-service/health")
def health() -> dict[str, str]:
    return {"status": "ok"}
