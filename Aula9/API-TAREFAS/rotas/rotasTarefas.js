const express = require('express');
const fs = require('fs');
const router = express.Router();
const app = express();
const auth = require('../middlewares/autenticacao');


router.get('/', (req, res) => {
    res.status(200).send('Página inicial de tarefas.');
});

router.post('/', auth, express.json(), (req, res) => {
    const conteudo = req.body
    fs.readFile('./dados/tarefas.json', 'utf8', (err, data) => {
        if (err) return res.status(500).send('Erro ao ler o arquivo de tarefas.');
        const tarefasArray = JSON.parse(data);
        tarefasArray.push(conteudo);
        fs.writeFile('./dados/tarefas.json', JSON.stringify(tarefasArray, null, 2), (err) => {
            if (err) {
                console.error("Erro ao escrever o arquivo:", err);
                return res.status(500).send('Erro ao salvar o arquivo de tarefas.');
            }
            res.status(200).json(tarefasArray);
        });
    });
})

router.get('/tarefas', auth, (req, res) => {
    fs.readFile('tarefas.json', 'utf8', (err, data) => {
        if (err) return res.status(500).send('Erro ao ler o arquivo de tarefas.');
        res.status(200).json(JSON.parse(data));
    });
});

router.options('/tarefas', (req, res) => {
    res.set("Allow", "GET, OPTIONS");
    res.status(204).send();
});

router.options('/', (req, res) => {
    res.set("Allow", "GET, OPTIONS");
    res.status(204).send();
});

module.exports = router;