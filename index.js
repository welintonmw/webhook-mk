const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Defina a rota para o webhook
app.post('/webhook/a714d61a-75e0-4ec7-a280-8221e0f8319a', (req, res) => {
  // Lógica para lidar com o webhook
  console.log('Webhook recebido:', req.body);
  res.status(200).send('Webhook recebido');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

module.exports = app;
