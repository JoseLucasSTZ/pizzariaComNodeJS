const express = require('express');
const path = require('path');
const porta = 3000;

const app = express();



app.use(express.static(path.join(__dirname, '../public')));

app.listen(porta, () => {
    console.log(`ouvindo na porta ${porta}`)
});

