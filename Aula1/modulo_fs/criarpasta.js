const fs = require('fs');

fs.mkdir('novaPasta', { recursive: true }, (err) => {
    if (err) 
        throw err;
    console.log('Pasta criada com sucesso!');
});