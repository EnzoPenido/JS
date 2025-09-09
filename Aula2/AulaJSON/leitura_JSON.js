const fs = require('fs')

fs.readFile('dados.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo', err);
        return;
    }
    try {
        const info = JSON.parse(data)
        console.log('Dados lidos do arquivo: \n', info);
        console.log(typeof info)
    }
    catch (error) {
        console.error('Erro ao converter para JSON: ', error);
    }
    
});