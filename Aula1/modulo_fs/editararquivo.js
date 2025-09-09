const fs = require('fs');

fs.appendFile('turma2TD.txt', '\nEste é um novo conteúdo adicionado ao arquivo.', err => {
    if(err) 
        throw err;
    console.log('Conteúdo adicionado ao arquivo com sucesso!');
});