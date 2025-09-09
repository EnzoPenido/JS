const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('Digite seu nome:\n ', (input) => {
    console.log(`Seu nome é: ${input}`);
    readline.close();
});