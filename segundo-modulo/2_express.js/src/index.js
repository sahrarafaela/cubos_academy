const express = require('express');
const app = express();

app.get('/', (req, res) => {
    //manda resposta de volta
    res.send('Olá... Esse é meu primeiro servidor com o express')
});
app.get('/home', (req, res) => {
    //manda resposta de volta
    res.send('Essa é a minha rota principal')
});

app.get('/array', (req, res) => {
    const array = [1, 2, 3, 4, 5, 6, 7]
    res.send(array)
});

//direcionar para a porta
app.listen(3000);