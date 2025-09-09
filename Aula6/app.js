const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Página inicial do meu primeiro web server!');
});

app.get('/usuarios', (req, res) => {
  res.send('Lista de usuários');
});

app.get('/usuarios/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Detalhes do usuário com ID: ${userId}`);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});