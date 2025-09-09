const dataMySQL = '2025-09-02 08:09:09';
const splitEspaco = dataMySQL.split(' ');
const splitData = splitEspaco[0].split('-');
const dataFormatada = `${splitData[2]}/${splitData[1]}/${splitData[0]}`;
const final = {
    data: `${dataFormatada}`,
    hora: splitEspaco[1]
}
console.log(final)