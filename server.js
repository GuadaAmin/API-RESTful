const express = require('Express');
//const { urlencoded } = require('body-parser');
const { Router } = express;
const app = express();
const port = 8080;
const ProductosContenedor = require('./productos.js') 
const productos = new ProductosContenedor('./products.txt')

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

router.get("/", async (req, res) => {
    const getProductos = await productos.getAll();
    res.send(getProductos);
})

router.get("/:id", async (req, res) => {
    const productosById = await productos.getById(req.params.id);
    res.send(productosById);
})

router.post('/', async (req, res) => {
    const { body } = req;
    const newProduct = await productos.save(body);
    res.json(newProduct);
  });

router.put("/:id", async (req, res) => {
    const productosById = await productos.update(req.params.id, req.body);
    res.send(productosById);
})

router.delete("/:id", async (req, res) => {
    await productos.deleteById(req.params.id);
    res.send('El producto fue eliminado');
})