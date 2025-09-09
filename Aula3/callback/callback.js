const fs = require('fs');

fs.readFile("arquivo.txt", "utf-8", (err, data) => {
    if (err) {
        console.error("Erro ao ler o arquivo:", err);
        return;
    }
    console.log("Conteúdo do arquivo:", data);
    console.log("Leitura do arquivo concluída.");
});

console.log("Esta linha será exibida antes da leitura do arquivo ser concluída.");