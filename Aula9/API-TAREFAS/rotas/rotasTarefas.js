const express = require('express');
const fs = require('fs');
const router = express.Router();
const app = express();
const auth = require('../middlewares/autenticacao');
const logger = require('../middlewares/logger');
app.use(logger);

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

router.delete('/:id', auth, (req, res) => {
    const id = parseInt(req.params.id);
    fs.readFile('./dados/tarefas.json', 'utf8', (err, data) => {
        if (err) return res.status(500).send('Erro ao ler o arquivo de tarefas.');
        const tarefasArray = JSON.parse(data);
        const index = tarefasArray.findIndex(tarefa => tarefa.id === id);
        if (index === -1) return res.status(404).send('Tarefa não encontrada.');
        tarefasArray.splice(index, 1);
        fs.writeFile('./dados/tarefas.json', JSON.stringify(tarefasArray, null, 2), (err) => {
            if (err) {
                console.error("Erro ao escrever o arquivo:", err);
                return res.status(500).send('Erro ao salvar o arquivo de tarefas.');
            }
            res.status(200).json(tarefasArray);
        });
    });
});

router.put('/:id', auth, express.json(), (req, res) => {
    const id = parseInt(req.params.id);
    const novoConteudo = req.body;
    fs.readFile('./dados/tarefas.json', 'utf8', (err, data) => {
        if (err) return res.status(500).send('Erro ao ler o arquivo de tarefas.');
        const tarefasArray = JSON.parse(data);
        const index = tarefasArray.findIndex(tarefa => tarefa.id === id);
        if (index === -1) return res.status(404).send('Tarefa não encontrada.');
        tarefasArray[index] = { id, ...novoConteudo };
        fs.writeFile('./dados/tarefas.json', JSON.stringify(tarefasArray, null, 2), (err) => {
            if (err) {
                console.error("Erro ao escrever o arquivo:", err);
                return res.status(500).send('Erro ao salvar o arquivo de tarefas.');
            }
            res.status(200).json(tarefasArray);
        });
    });
});

router.get('/', auth, (req, res) => {
    fs.readFile('./dados/tarefas.json', 'utf8', (err, data) => {
        if (err) return res.status(500).send('Erro ao ler o arquivo de tarefas.');
        res.status(200).json(JSON.parse(data));
    });
});

router.options('/tarefas', (req, res) => {
    res.set("Allow", "GET, OPTIONS");
    res.status(204).send();
});

router.options('/', (req, res) => {
    res.set("Allow", "GET, PUT, POST, DELETE, OPTIONS");
    res.status(204).send();
});

module.exports = router;