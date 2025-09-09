const fs = require('fs').promises;

fs.mkdir('pastaNova', { recursive: true })
    .then(() => {
        console.log('Pasta Criada!');
    })
    .catch(erro => {
        console.error('Erro ao criar a pasta: ', erro);
    });