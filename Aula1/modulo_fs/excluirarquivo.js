const fs = require('fs');

fs.unlink('turma2TD.txt', (err) => {
    if(err) throw err;
    console.log('Arquivo excluído com sucesso!');
});