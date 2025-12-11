# Práctica Final - Pipeline DevOps

## Resumen (versión para quien no sabe nada)
Este proyecto entrega una **aplicación web simple** compuesta por:
- **Frontend**: HTML + JavaScript que muestra y agrega usuarios.
- **Backend**: Node.js + Express con endpoints para listar y crear usuarios.
- **Monitoreo**: Prometheus + Grafana (docker-compose) que lee el endpoint /metrics del backend.
- **Pipeline**: GitHub Actions con jobs para lint, tests y construcción de imagen Docker.

## Estructura
- backend/ -> API Node.js
- frontend/ -> UI simple
- infra/ -> docker-compose y Prometheus
- .github/workflows -> CI/CD (GitHub Actions)
- docs/ -> documentación adicional

## Cómo ejecutar localmente (paso a paso)
1. Asegúrate de tener Docker y Docker Compose instalados.
2. Sitúate en la carpeta `infra` del proyecto.
3. Ejecuta:
   ```bash
   docker-compose up --build
