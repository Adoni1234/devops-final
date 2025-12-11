const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());

// Servir frontend estático
app.use(express.static(path.join(__dirname, "../public")));

// Rutas API
app.get("/api/users", (req, res) => {
  res.json([{ name: "Luis" }]);
});

// Catch-all para SPA o páginas normales
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;
