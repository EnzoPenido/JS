const fs = require('fs')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

fs.readFile("lista.json", "utf8", (err, lista) => {
    if (err) {
        console.error("Erro ao ler o arquivo:", err);
        return;
    }
    try {
        lista = JSON.parse(lista);
    } catch (error) {
        console.error("Erro ao converter para JSON:", error);
        return;
    }

    lista.itens.forEach(item => {
        console.log(`Nome: ${item.nome} \n Preço: ${item.preco}\n Descrição: ${item.descricao}\n Categoria: ${item.categoria} \n--------------------------`)
    })
    readline.question('Digite o nome do produto que deseja adicionar:\n ', (nome) => {
        readline.question('Digite o preço do produto:\n ', (preco) => {
            readline.question('Digite a descrição do produto:\n ', (descricao) => {
                readline.question('Digite a categoria do produto:\n ', (categoria) => {
                    lista.itens.push({ nome, preco: Number(preco), descricao, categoria })
                    fs.writeFile('lista.json', JSON.stringify(lista, null, 2), (err) => {
                        if (err) throw err;
                        console.log('Arquivo JSON atualizado com sucesso!');
                    });
                    console.log('Produto adicionado com sucesso!');
                    readline.close();
                });
            });
        });
    });
});