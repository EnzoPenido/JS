const express = require('express');
const app = express();
const port = 3000;

const logger = (req, res, next) =>{
    const data = new Date()
    console.log(`[${data.toISOString()}] - ${req.method} - ${req.url}`);
    next()
}

const auth = (req,res,next)=>{
    //observação: SIMULAÇÃO!!!! NUNCA USAR EM PRODUÇÃO!!!!
    const token = req.headers['authorization']
    if(token === 'XUXACARECA'){
        next()
    }else{
        res.status(401).send('Não autorizado')
    }
}

app.use(logger)//Primeiro o logger ew depois definir as rotas

app.get('/admin', auth, (req,res)=>{
    res.status(200).send('Painel de administração: \nUsuário autenticado.')
})

app.get('/', (req,res)=>{
    res.status(200).send('Página incial do servidor com Middlewares')
})

app.get('/recurso', (req,res)=>{
    res.status(200).send('Lista de um recurso qualquer')
})

app.get('/recurso/:id', (req,res)=>{
    const id = req.params.id
    res.status(200).send(`Detalhes do recurso com ID: ${id}`)
})

app.listen(port, ()=>{
    console.log(`servidor rodando em https://localhost:${port}`)
})