const notaFiscalController = require('../controllers/notaFiscalController');

module.exports = (app) => {
    app.get('/notaFiscal', notaFiscalController.getAllNotaFiscal);
    app.get('/notaFiscal/:id', notaFiscalController.getNotaFiscalById);
    app.post('/notaFiscal', notaFiscalController.insertNotaFiscal);
    app.delete('/notaFiscal/:id', notaFiscalController.deleteNotaFiscalById);
    app.patch('/notaFiscal', notaFiscalController.patchNotaFiscal)
}