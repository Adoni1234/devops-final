const app = require("./app");
const PORT = process.env.PORT || 3000;

// Ruta principal (Render la usa cuando visitas la URL)
app.get('/', (req, res) => {
  res.send('Backend funcionando');
});

// Ruta de Health Check (Render la usa para validar que el servicio está vivo)
app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
