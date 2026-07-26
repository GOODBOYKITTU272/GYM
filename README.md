# NowWise

Voice-first AI lifestyle assistant, delivered through Telegram.

**Status: Phase 1 (foundation scaffolding).** No product features are implemented yet — no database, auth, Telegram webhook, transcription, or AI logic. This repo currently contains the monorepo skeleton, a Next.js admin shell, and a FastAPI voice-service skeleton.

## Repository layout

```
apps/web/                 Next.js admin dashboard (TypeScript, Tailwind, shadcn/ui)
services/telegram-bot/    Telegram webhook handler (empty scaffold)
services/voice-service/   Python FastAPI ASR service (health route only)
services/workers/         Background jobs, Redis + BullMQ (empty scaffold)
packages/db/              Supabase migrations, schema, queries (empty scaffold)
packages/ai/              Intent classification, extraction, reports (empty scaffold)
packages/voice/           Voice provider router (empty scaffold)
packages/shared/          Shared types, constants, utils (empty scaffold)
docs/                     Planning documents 01–06 (converted from the source PDFs)
```

## Prerequisites

- Node.js 20+ (developed against 24)
- Python 3.9+
- npm 10+

## Setup

```bash
git clone https://github.com/GOODBOYKITTU272/GYM.git
cd GYM
npm install
cp .env.example apps/web/.env.local   # then fill in real values
```

### Web app

```bash
cd apps/web
npm run dev        # http://localhost:3000
npm test           # vitest
npm run build
```

Health check: `curl http://localhost:3000/api/health` → `{"status":"ok"}`

### Voice service

```bash
cd services/voice-service
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
.venv/bin/uvicorn app.main:app --reload   # http://localhost:8000
.venv/bin/pytest
```

Health check: `curl http://localhost:8000/health` → `{"status":"ok"}`

## Documentation

Planning docs live in `docs/`, converted from the source PDFs kept in the repo root. Where the documents disagreed, these decisions are authoritative:

| Topic                                             | Decision                                                                                                        |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Schema                                            | `docs/05-Backend-Schema.md` is the sole source of truth. PRD §11's embedded schema is deprecated.               |
| Build order                                       | The detailed 20-phase breakdown in `docs/06-Implementation-Plan.md` (§3–22) governs, not the §1 summary.        |
| Monorepo tooling                                  | Plain npm workspaces.                                                                                           |
| Background jobs                                   | Redis + BullMQ — target architecture, not installed in Phase 1.                                                 |
| OpenWhispr                                        | Architecture reference and ASR service pattern only, never a distinct transcription engine or the Electron app. |
| AI confidence threshold                           | Configurable, default `0.70` (`AI_CONFIDENCE_THRESHOLD`).                                                       |
| Restaurant / grocery receipt / photo intelligence | V1.1 scope, not initial MVP.                                                                                    |

The PDF-to-Markdown conversion is best-effort; consult the original PDFs for exact formatting.

## Environment variables

`.env.example` lists every variable from `docs/02-TRD.md` §12 with placeholder values. Never commit real secrets.
