const notaFiscalService = require('../services/notaFiscalService');

const getAllNotaFiscal = async (req, res) => {
    try {
        const notaFiscal = await notaFiscalService.getAllNotaFiscal();
        res.status(200).send(notaFiscal);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getNotaFiscalById = async (req, res) => {
    try {
        const notaFiscal = await notaFiscalService.getNotaFiscalById(req.params);
        res.status(200).send(notaFiscal);
    } catch (error) {
        res.status(500).send(error);
    }
}

const insertNotaFiscal = async (req, res) => {
    try {
        const notaFiscal = await notaFiscalService.insertNotaFiscal(req.body);
        res.status(201).send(notaFiscal);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteNotaFiscalById = async (req, res) => {
    try {
        let deletado = await notaFiscalService.deleteNotaFiscalById(req.params);
        let msg = deletado 
            ? `NotaFiscal ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhuma notaFiscal com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (error) {
        res.status(500).send(error)
    }
}

const patchNotaFiscal = async (req, res) => {
    try {
        const notaFiscal = await notaFiscalService.patchNotaFiscal(req.body);
        res.status(201).send(notaFiscal);
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.getAllNotaFiscal = getAllNotaFiscal;
module.exports.getNotaFiscalById = getNotaFiscalById;
module.exports.insertNotaFiscal = insertNotaFiscal;
module.exports.deleteNotaFiscalById = deleteNotaFiscalById;
module.exports.patchNotaFiscal = patchNotaFiscal;