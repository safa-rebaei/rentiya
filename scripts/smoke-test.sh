#!/bin/bash
# Smoke Test pour le frontend React dans Docker

CONTAINER_NAME="rentya-frontend-test"
IMAGE_NAME="rentya-frontend"

# Lancer le container en arrière-plan
docker run -d -p 3000:80 --name $CONTAINER_NAME $IMAGE_NAME

# Attendre que le frontend démarre
sleep 10

# Tester que l'application répond
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000)

# Vérifier le code HTTP
if [ "$HTTP_CODE" -eq 200 ]; then
    echo "✅ Smoke Test Passed - Frontend fonctionne"
    docker rm -f $CONTAINER_NAME
    exit 0
else
    echo "❌ Smoke Test Failed - Frontend ne répond pas, code: $HTTP_CODE"
    docker logs $CONTAINER_NAME
    docker rm -f $CONTAINER_NAME
    exit 1
fi
