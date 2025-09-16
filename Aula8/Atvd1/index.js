const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;
const livros = { "id": 2, "titulo": "Canção para ninar menino grande", "autor": "Conceição Evaristo" }
const logger = (req, res, next) => {
    const data = new Date()
    console.log(`[${data.toISOString()}] - ${req.method} - ${req.url}`);
    next()
}

const auth = (req, res, next) => {
    //observação: SIMULAÇÃO!!!! NUNCA USAR EM PRODUÇÃO!!!!
    const token = req.headers['authorization']
    if (token === 'XUXACARECA') {
        next()
    } else {
        res.status(401).send('Não autorizado')
    }
}

app.use(logger)//Primeiro o logger ew depois definir as rotas

app.get('/admin', auth, (req, res) => {
    fs.readFile('livros.json', 'utf8', (err, data) => {
        if (err) return res.status(500).send('Erro ao ler o arquivo');
        res.status(200).json(JSON.parse(data));
    });

})

app.get('/usuario', (req, res) => {
    fs.readFile('livros.json', 'utf8', (err, data) => {
        if (err) return res.status(500).send('Erro ao ler o arquivo');
        res.status(200).json(JSON.parse(data));
    });
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})