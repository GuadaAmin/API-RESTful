const { urlencoded } = require('body-parser');
const express = require('Express');
const { Router } = express;
const app = express();
const port = 8080;

import Productos from './productos';

const server = app.listen(port, () => {
    console.log(`Escuchando puerto ${port}`);
})

server.on('error', (error) => {
    console.log(error);
})

const router = new Router();

app.use('/api/productos', router);
app.use(express.json());
app.use(urlencoded({extended: true}));

router.get("/api/productos", (req, res) => {
    const productos = Productos.getAll();
    res.send(productos);
})

router.get("/api/productos/:id", (req, res) => {
    const productos = Productos.getById(id);
    res.send(productos);
})

routerPets.post('/api/productos', (req, res) => {
    const productos = Productos.getAll();
    const { body } = req;
    productos.push(body);
    res.send(body);
  });

router.put("/api/productos/:id", (req, res) => {
    const productos = Productos.getById(id);
    res.send(productos);
})

router.delete("/api/productos/:id", (req, res) => {
    const productos = Productos.getById(id);
    res.send(productos);
})