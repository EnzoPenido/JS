const fs = require('fs');

fs.rm('novaPasta', { recursive: true, force: true }, (err) => {
    if (err) 
        throw err;
    console.log('Pasta excluída com sucesso!');
});