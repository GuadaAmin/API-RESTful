class Productos {
    constructor() {
        this.productos = [];
        this.id = 0;
    }

    getAll() {
        this.productos.length > 0 ? this.productos : {error: 'No hay ningún producto'}
    }

    getById(id) {
        try {
            const productos = this.getAll();
            const filteredProductos = productos.slice([id-1], [id])
            console.log(filteredProductos)
            return (filteredProductos);
        } catch (error) {
            console.log('Ocurrió un error getById', error)
            return [];
        }
    }

    newId() {
        let newId;
        if(productos.length === 0) {
            newId = 1;
        } else {
            newId = productos[productos.length - 1].id + 1;
        }
    }
}

export default Productos;