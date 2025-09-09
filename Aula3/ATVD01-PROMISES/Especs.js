const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
const fs = require('fs').promises;

fs.readFile('config.json', 'utf8')
    .then((data) => {
        readline.question('Qual informação você deseja?\nnome_aplicacao\nversao\ndebug_mode\nporta\n', (input) => {
            data = JSON.parse(data);
            console.log(data[input]);
            readline.close();
        });
    })
    .catch((erro) => {
        console.error('Erro ao ler o arquivo ou converter para JSON', erro);
    
    });