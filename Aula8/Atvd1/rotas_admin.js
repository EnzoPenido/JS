const express = require('express');
const fs = require('fs');
const router = express.Router();

const livros = { "id": 2, "titulo": "Canção para ninar menino grande", "autor": "Conceição Evaristo" };

const auth = (req, res, next) => {
    const token = req.headers['authorization'];
    if (token === 'XUXACARECA') {
        next();
    } else {
        res.status(401).send('Não autorizado');
    }
};

router.post('/admin', auth, (req, res) => {
    fs.readFile('livros.json', 'utf8', (err, data) => {
        if (err) return res.status(500).send('Erro ao ler o arquivo');
        const livrosArray = JSON.parse(data);
        livrosArray.push(livros);
        fs.writeFile('livros.json', JSON.stringify(livrosArray, null, 2), (err) => {
            if (err) {
                console.error("Erro ao escrever o arquivo:", err);
                return res.status(500).send('Erro ao salvar o arquivo');
            }
            res.status(200).json(livrosArray);
        });
    });
});

router.get('/admin', auth, (req, res) => {
    fs.readFile('livros.json', 'utf8', (err, data) => {
        if (err) return res.status(500).send('Erro ao ler o arquivo');
        const livrosArray = JSON.parse(data);
        res.status(200).json(livrosArray);
    });
});

router.options('/admin', (req, res) => {
    res.set("Allow", "POST, GET, OPTIONS");
    res.status(204).send();
});

module.exports = router;