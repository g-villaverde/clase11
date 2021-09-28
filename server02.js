const express = require('express');
const productos = require('./productos')

const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log('Servidor HTTP escuchando en el puerto', server.address().port);
}) 
server.on('error', error => console.log('Error en servidor', error));

app.set('view engine', 'ejs')

app.get('/productos/vista', function(req, res) {
    const items = [
        {id:1, title: "Hola", price: 55, thumbnail: "http"}, 
        {id:2, title: "Chau", price: 56, thumbnail: "tttt"}
    ]
    const mapItems = items.map((obj) => {return obj})


    res.render('pages/index', { data: mapItems, listExist: true });
});

app.post("/productos/vista", (req, res) => {
    productos.push(req.body);
    res.status(201).json(req.body);
});