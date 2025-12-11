// backend/src/app.js
const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());

// Array en memoria para usuarios
const users = [];

// Rutas API
app.get("/api/users", (req, res) => {
  res.status(200).json(users);
});

app.post("/api/users", (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "Name is required" });
  const newUser = { name };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Servir frontend estático
app.use(express.static(path.join(__dirname, "../public")));

// Catch-all para frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Health check
app.get("/healthz", (req, res) => {
  res.status(200).send("OK");
});

module.exports = app;
