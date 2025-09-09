const fs = require('fs');

const dados = {
    "nome": "Enzo",
    "idade": 16,
    "cidade": "Guarulhos",
    "endereço": {
        "rua": "teste",
        "seila": "seila"
    },
    "telefones": [
        123123123,
        123123123,
    ]
}
try {
    fs.writeFile('dados.json', JSON.stringify(dados, null, 2), 'utf8', err => {
        if (err) {
            console.error('Erro ao escrever no arquivo');
            return;
        }
        console.log('Dados escritos com sucesso.')
    });
}
catch (error) {
    console.error('Erro ao escrever no JSON: ', error);
}

console.log(dados.endereço)
console.log(dados.telefones.forEach(telefone => (
    console.log(telefone)
)
))
dados.nome = "Phietro"
console.log(dados)