const express = require('express');
const app = express();
const fs = require('fs');
const router = express.Router();


const auth = (req, res, next) => {
    const token = req.headers['authorization'];
    if (token === 'XUXACARECA') {
        next();
    } else {
        res.status(401).send('Não autorizado');
    }
};
module.exports = auth;