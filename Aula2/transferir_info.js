const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('Qual arquivo você deseja copiar?\n ', arquivoOrigem => {
    readline.question('Qual o nome do arquivo de destino?\n ', arquivoDestino => {
        fs.readFile(arquivoOrigem, 'utf8', (err, dataOrigem) => {
            if (err) throw err;
            fs.appendFile(arquivoDestino, dataOrigem, (err) => {
                if (err) throw err;
                console.log('Conteúdo copiado com sucesso!');
                readline.close();
            });
        });
    });
});