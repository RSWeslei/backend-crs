const categoriasController = require('../controllers/categoriasController');

module.exports = (app) => {
    app.get('/categorias', categoriasController.getAllCategorias);
    app.get('/categorias/:id', categoriasController.getCategoriaById);
    app.post('/categorias', categoriasController.insertCategoria);
    app.delete('/categorias/:id', categoriasController.deleteCategoriaById);
    app.patch('/categorias', categoriasController.patchCategoria)
}