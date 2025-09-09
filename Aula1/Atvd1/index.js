const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('Digite seu nome:\n ', (nome) => {
    fs.appendFile('chamada.txt', `${nome}\n`, err => {
        if (err) throw err;
        console.log('Nome adicionado à chamada com sucesso!');
        readline.close();
    });
});
