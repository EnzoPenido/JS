const idades = [18, 22, 15, 30, 25];
const maioresDeIdade = idades.filter(function(idade) {
    return idade >= 18;
});

console.log(maioresDeIdade);