const roupasService = require('../services/roupasService');

const getAllRoupas = async (req, res) => {
    try {
        const roupas = await roupasService.getAllRoupas();
        res.status(200).send(roupas);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getRoupaById = async (req, res) => {
    try {
        const roupa = await roupasService.getRoupaById(req.params);
        res.status(200).send(roupa);
    } catch (error) {
        res.status(500).send(error);
    }
}

const insertRoupa = async (req, res) => {
    try {
        const roupa = await roupasService.insertRoupa(req.body);
        res.status(201).send(roupa);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteRoupaById = async (req, res) => {
    try {
        let deletado = await roupasService.deleteRoupaById(req.params);
        let msg = deletado 
            ? `Roupa ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhum roupa com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (error) {
        res.status(500).send(error)
    }
}

const patchRoupa = async (req, res) => {
    try {
        const roupa = await roupasService.patchRoupa(req.body);
        res.status(201).send(roupa);
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.getAllRoupas = getAllRoupas;
module.exports.getRoupaById = getRoupaById;
module.exports.insertRoupa = insertRoupa;
module.exports.deleteRoupaById = deleteRoupaById;
module.exports.patchRoupa = patchRoupa;