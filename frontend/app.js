const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

// Servir archivos estáticos (html, css, js)
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Frontend running on port ${PORT}`);
});
