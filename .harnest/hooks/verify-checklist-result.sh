#!/bin/sh
set -eu

ROOT="${HARNEST_REPO_ROOT:-}"
if [ -z "$ROOT" ]; then
  ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
fi

HARNEST_BIN="${HARNEST_BIN:-harnest}"

if ! "$HARNEST_BIN" lessons verify-checklist-result --root "$ROOT" >/dev/null; then
  cat >&2 <<'EOF'
harnest checklist is incomplete.
Run:
  HARNEST_BIN="${HARNEST_BIN:-harnest}"
  "$HARNEST_BIN" lessons prepare-checklist-result --force
Then mark every item in .harnest/work/checklist-result.md:
  [x] compliant
  [-] not applicable
  [!] valid exception with an indented reason:
Then run:
  "$HARNEST_BIN" lessons verify-checklist-result
EOF
  exit 2
fi
