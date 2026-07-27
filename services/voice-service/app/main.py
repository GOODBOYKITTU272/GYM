from fastapi import APIRouter, FastAPI

# Vercel does not strip the /api/voice-service prefix before forwarding to this
# service, so every route must exist at both the bare path (local uvicorn) and
# the public path (production). Mounting one router twice does that without
# per-route duplication: define routes on `router` only, never on `app`.
PUBLIC_PREFIX = "/api/voice-service"

app = FastAPI(title="NowWise Voice Service")
router = APIRouter()


@router.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


app.include_router(router)
app.include_router(router, prefix=PUBLIC_PREFIX)
