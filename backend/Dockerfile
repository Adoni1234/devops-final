FROM node:16

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

# Ejecuta el index.js dentro de src
CMD ["node", "src/index.js"]
