// Array en memoria para los usuarios
const users = [];

// GET existente
app.get("/api/users", (req, res) => {
  res.status(200).json(users);
});

// POST para agregar usuario
app.post("/api/users", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  const newUser = { name };
  users.push(newUser);
  res.status(201).json(newUser);
});
