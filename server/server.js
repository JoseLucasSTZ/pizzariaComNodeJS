const express = require('express');
const path = require('path');
const porta = 3000;

const app = express();

let dadosPedidos = [];

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.post('/', (req, res) => {

    let dadosPizza = req.body;
    dadosPedidos.push(dadosPizza);
    console.log(dadosPedidos);

    res.json({ message: 'Requisição recebida' });
});

app.listen(porta, () => {
    console.log(`ouvindo na porta ${porta}`)
});

