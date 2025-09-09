const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
const path = './produtos.json';

app.get('/', (req, res) => {
    res.send('Página inicial do web server lendo JSON!');
});

app.get('/produtos', (req, res) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) { throw err; }
        const produtos = JSON.parse(data);
        res.send(produtos);
    });
});

app.get('/produtos/:id', (req, res) => {
    const produtoID = req.params.id;
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) { throw err; }
        const produtos = JSON.parse(data);
        const produto = produtos.find(p => p.id === produtoID);
        res.send(produto);
    });
});
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});