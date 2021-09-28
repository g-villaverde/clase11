const express = require('express');
const productos = require('./productos')

const app = express();
const PORT = 8080;


const server = app.listen(PORT, () => {
    console.log('Servidor HTTP escuchando en el puerto', server.address().port);
}) 
server.on('error', error => console.log('Error en servidor', error));


app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.send(productos);
})

app.get('/pug', (req, res) => {
    res.render('index.pug')
})

app.get('/productos/vista', function(req, res) {
    res.render('main', { data: productos, listExist: true });
});

app.post("/productos/vista", (req, res) => {
    productos.push(req.body);
    res.status(201).json(req.body);
});