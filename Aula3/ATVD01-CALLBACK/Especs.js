const fs = require('fs');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

fs.readFile('config.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo', err);
        return;
    }
    try {
        readline.question('Qual informação você deseja?\nnome_aplicacao\nversao\ndebug_mode\nporta\n', (input) => {
            data = JSON.parse(data);
            console.log(data[input]);
            readline.close();
        });
    } catch (erro) {
        console.error('Erro ao converter para JSON', erro);
        return;
    }
})