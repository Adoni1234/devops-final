# Resumen de pruebas (lo que debes documentar)

## Tests incluidos
1. GET /api/users -> debe devolver 200 y un array.
2. POST /api/users -> con body { name } devuelve 201 y el nuevo usuario.
3. POST /api/users -> sin name devuelve 400.

## Comandos para ejecutar tests
```bash
cd backend
npm ci
npm test
