const fs = require('fs').promises;

fs.readFile('arquivo.txt', 'utf8')
    .then(data => {
        console.log('Conteúdo do arquivo: ', data)
        return data.toUpperCase()
        console.log('Não será exibido pois esta depois do RETURN')
    })
    .then(dataMaiusculas=>{
        console.log('Conteúdo em maiusculas', dataMaiusculas)
        return dataMaiusculas.toLowerCase()
    })
    .then(dataMinusculas=>{
        console.log('Conteúdo em minúsculas', dataMinusculas)
    })
    .catch(err => {
        console.error('Erro ao ler o arquivo: ', err)
    })