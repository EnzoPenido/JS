const os = require('os');
const fs = require('fs');

const info = {
    plataforma: os.platform(),
    arquitetura: os.arch(),
    cpus: os.cpus(),
    memoriaTotal: os.totalmem(),
    memoriaLivre: os.freemem(),
    hostname: os.hostname(),
    usuario: os.userInfo().username,
    diretorioHome: os.homedir()
};

fs.writeFile('Info_sistema.txt', JSON.stringify(info, null, 2), err => {
    if (err) throw err;
    console.log('Informações do sistema operacional salvas em Info_SO.json');
});