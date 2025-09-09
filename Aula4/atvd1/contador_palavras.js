const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('Digite uma frase:\n ', (input) => {
    const contador = input.trim().split(" ").length;
    console.log(`A frase contém ${contador} palavras.`);
    readline.close();
});