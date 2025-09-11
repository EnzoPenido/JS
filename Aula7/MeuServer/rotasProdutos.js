const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.status(200).send('Listar todos os produtos')
})

router.get('/:id', (req, res)=>{
    const id = req.params.id
    res.status(200).send(`Dados do produtos com o ID: ${id}`)
})

router.options('/', (req, res)=>{
    res.header('Allow', 'GET, OPTIONS')
    res.status(204).send()
})

router.options('/:id', (req, res)=>{
    res.header('Allow', 'GET, OPTIONS')
    res.status(204).send()
})

module.exports = router