const fs = require('fs').promises;

fs.readFile('arquivo.txt', 'utf8')
    .then(data => {
        console.log('Conteúdo do arquivo: ', data);
        return data.toUpperCase()
    })
    .then(dataMaiusculas =>{
        console.log('Conteúdo em maíusculas: ', dataMaiusculas);
    })
    .catch(err=>{
        console.log('Erro: ', err);
    });