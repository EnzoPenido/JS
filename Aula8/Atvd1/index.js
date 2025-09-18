const express = require('express');
const app = express();
const port = 3000;

const logger = (req, res, next) => {
    const data = new Date();
    console.log(`[${data.toISOString()}] - ${req.method} - ${req.url}`);
    next();
};

app.use(logger);

const rotasLivros = require('./rotas_livros.js');
const rotasAdmin = require('./rotas_admin.js');

app.use('/', rotasLivros);
app.use('/', rotasAdmin);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});