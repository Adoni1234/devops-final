const express = require("express");
const router = express.Router();

let users = [];

router.get("/", (req, res) => {
  res.status(200).json(users);
});

router.post("/", (req, res) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ error: "Name required" });

  const newUser = { id: users.length + 1, name };
  users.push(newUser);

  res.status(201).json(newUser);
});

module.exports = router;
