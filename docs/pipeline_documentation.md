# Documentación del pipeline (simple)

## Jobs principales
1. build-test-lint
   - Ejecuta eslint y jest en `backend`.
   - Fallará si hay errores en lint o tests.
2. build-and-push-image
   - Construye la imagen Docker del backend y la sube a Docker Hub.
3. deploy-via-ssh
   - Se conecta por SSH al servidor y ejecuta `docker-compose` para traer la nueva imagen.

## Secrets necesarios (en GitHub repository -> Settings -> Secrets)
- DOCKERHUB_USERNAME
- DOCKERHUB_TOKEN
- DEPLOY_HOST
- DEPLOY_USER
- DEPLOY_SSH_KEY (clave privada)

## Cómo probar el pipeline localmente
- Para CI: correr `npm run lint` y `npm test` en la carpeta backend.
- Para construir la imagen local: `docker build -t usuario/devops-backend:local backend/`
