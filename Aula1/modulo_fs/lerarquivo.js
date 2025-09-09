const fs = require('fs');

fs.readFile('turma2TD.txt', 'utf8', (err, data) => {
    if(err)
        throw err;
    console.log('Conteúdo do arquivo:', data);
});