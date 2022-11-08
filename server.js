const express = require('Express');
//const { urlencoded } = require('body-parser');
const { Router } = express;
const app = express();
const port = 8080;
const Productos = require('./productos.js') 

const server = app.listen(port, () => {
    console.log(`Escuchando puerto ${port}`);
})

server.on('error', (error) => {
    console.log(error);
})

const router = new Router();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/productos', router);
app.use('/static', express.static(__dirname + '/public'))

router.get("/", (req, res) => {
    const productos = Productos.getAll();
    res.send(productos);
})

router.get("/:id", (req, res) => {
    const productos = Productos.getById(id);
    res.send(productos);
})

router.post('/', (req, res) => {
    const productos = Productos.getAll();
    const { body } = req;
    productos.push(body);
    res.send(body);
  });

router.put("/:id", (req, res) => {
    const productos = Productos.getById(id);
    res.send(productos);
})

router.delete("/api/productos/:id", (req, res) => {
    const productos = Productos.getById(id);
    res.send(productos);
})