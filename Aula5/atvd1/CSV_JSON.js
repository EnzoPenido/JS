const fs = require('fs').promises;

// try {
//     fs.readFile('produtos.csv', 'utf-8')
//     .then(data => {
//         const linhas = data.split('\n');
//         const linha2 = linhas[1].split(',');
//         const linha3 = linhas[2].split(',');
//         const linha4 = linhas[3].split(',');
//         const linha5 = linhas[4].split(',');
//         const produtos = [
//             {id:linha2[0], nome:linha2[1], preco:linha2[2], estoque:linha2[3]},
//             {id:linha3[0], nome:linha3[1], preco:linha3[2], estoque:linha3[3]},
//             {id:linha4[0], nome:linha4[1], preco:linha4[2], estoque:linha4[3]},
//             {id:linha5[0], nome:linha5[1], preco:linha5[2], estoque:linha5[3]}
//         ];
//         return fs.writeFile('produtos.json', JSON.stringify(produtos, null, 2));
//     })
// } catch (error) {
//     console.error('Erro ao ler o arquivo:', error);
// }


fs.readFile('produtos.csv', 'utf-8')
  .then(data => {
    const linhas = data.split('\n');
    const produtos = linhas.map(linha => {
      const [id, nome, preco, estoque] = linha.split(',');
      return { id, nome, preco, estoque };
    });
    return fs.writeFile('produtos.json', JSON.stringify(produtos, null, 2));
  })
  .then(() => console.log('Arquivo JSON criado com sucesso!'))
  .catch(error => console.error('Erro ao ler ou escrever o arquivo:', error));