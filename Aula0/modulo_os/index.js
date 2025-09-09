const os = require('os');

console.log(`Plataforma: ${os.platform()}`);
console.log(`Arquitetura: ${os.arch()}`);
console.log('CPUs:', os.cpus());
console.log(`machine: ${os.machine()}`);
console.log(`Memória livre: ${os.freemem() / 1024 / 1024} MB`);
console.log(`Interfaces de rede:`, os.networkInterfaces());
console.log(`Versão do S.O.: ${os.release()}`);
console.log(`Tempo de atividade: ${os.uptime()} segundos`);