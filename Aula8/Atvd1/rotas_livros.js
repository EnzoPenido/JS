const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send('Página inicial da biblioteca.');
});

router.get('/livros', (req, res) => {
    fs.readFile('livros.json', 'utf8', (err, data) => {
        if (err) return res.status(500).send('Erro ao ler o arquivo');
        res.status(200).json(JSON.parse(data));
    });
});

router.options('/livros', (req, res) => {
    res.set("Allow", "GET, OPTIONS");
    res.status(204).send();
});
router.options('/', (req, res) => {
    res.set("Allow", "GET, OPTIONS");
    res.status(204).send();
});

module.exports = router;