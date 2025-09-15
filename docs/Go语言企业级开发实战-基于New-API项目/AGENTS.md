# Repository Guidelines

## Project Structure & Module Organization
- Backend entrypoint: `main.go`.
- Core packages: `controller/`, `service/`, `router/`, `middleware/`, `model/`, `dto/`, `common/`.
- Config & logging: `setting/`, `config/`, `logger/`.
- Frontend (React + Vite): `web/`.
- Docs & scripts: `docs/`, `scripts/` (`dev.sh`, `local.sh`, `test.sh`).
- Tests live next to code as `_test.go` (e.g., `service/quota_test.go`).

## Build, Test, and Development Commands
- Backend (dev): `go run main.go` or `air -c .air.toml` for hot reload.
- Frontend (dev): `cd web && bun install && bun run dev` (or `npm install && npm run dev`).
- Make (combined): `make build-frontend` then `make start-backend`.
- Docker (dev stack): `./scripts/dev.sh start` or `docker-compose -f docker-compose.dev.yml up -d`.
- Tests (backend): `go test ./...` (race/coverage: `go test -race -cover ./...`).

## Coding Style & Naming Conventions
- Go formatting: `gofmt -s` and `goimports`; validate with `go vet` and optionally `golangci-lint run`.
- Go naming: exported identifiers `UpperCamelCase`; packages/files lowercase without underscores where possible.
- Frontend: Prettier + ESLint (`bun run lint`, `bun run eslint`; use `:fix` variants to auto-fix).
- Prefer small, single-responsibility modules; functional React components.

## Testing Guidelines
- Use table-driven tests; cover happy and error paths.
- Name tests with `_test.go` in the same package as the code.
- Run all tests before PRs: `go test -race -cover ./...`.
- Aim for meaningful coverage on changed code; avoid flaky tests.

## Commit & Pull Request Guidelines
- Commits: Conventional Commits (e.g., `feat(router): add task routes`, `fix(service): handle nil ctx`).
- PRs target the `alpha` branch. Include a clear description, linked issues (e.g., `Closes #123`), and screenshots for UI changes.
- Ensure CI passes locally: format, lint, and test backend and frontend where relevant.

## Security & Configuration Tips
- Do not commit secrets. Use `.env` (see `.env.example`) and Docker envs (`SQL_DSN`, `REDIS_CONN_STRING`, etc.).
- Keep logs/data out of VCS; use `logs/` and `data/` volumes.
- pprof is available in dev at `/debug/pprof`; never expose in production.

