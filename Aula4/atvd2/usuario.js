const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('Crie seu nome de usuario:\n ', (input) => {
    if(input.length < 5 || input!=input.trim() || input != input.toLowerCase()){
        console.log("Nome de usuario invalido");
    }
    else{
        console.log(`Nome de usuario criado com sucesso: ${input}`);
    }
    readline.close();
});