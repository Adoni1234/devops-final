FROM node:16

WORKDIR /app

# Copia las dependencias
COPY package*.json ./
RUN npm install

# Copia todo el backend y frontend
COPY . .

EXPOSE 3000

# Ejecuta el backend
CMD ["node", "src/index.js"]
