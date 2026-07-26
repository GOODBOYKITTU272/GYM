from fastapi import FastAPI

app = FastAPI(title="NowWise Voice Service")


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}
