const cidadesController = require('../controllers/cidadesController');

module.exports = (app) => {
    app.get('/cidades', cidadesController.getAllCidades);
    app.get('/cidades/:id', cidadesController.getCidadesById);
    app.post('/cidades', cidadesController.insertCidade);
    app.delete('/cidades/:id', cidadesController.deleteCidadeById);
    app.patch('/cidades', cidadesController.patchCidade)
}