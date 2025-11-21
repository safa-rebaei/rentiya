#!/usr/bin/env bash
# smoke_test.sh : retourne 0 si OK, 1 si KO

# Exemple simple : vérifier qu'une URL locale renvoie 200 (après docker run)
URL=${1:-http://localhost:80/}
TIMEOUT=5

status=$(curl -s -o /dev/null -w "%{http_code}" --max-time $TIMEOUT $URL || echo "000")
echo "Smoke test: $URL -> HTTP $status"

if [ "$status" = "200" ]; then
  echo "SMOKE PASSED"
  exit 0
else
  echo "SMOKE FAILED"
  exit 1
fi
