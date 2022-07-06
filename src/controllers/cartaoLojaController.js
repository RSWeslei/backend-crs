const cartaoLojaService = require('../services/cartaoLojaService');

const getAllCartaoLoja = async (req, res) => {
    try {
        const cartaoLoja = await cartaoLojaService.getAllCartaoLoja();
        res.status(200).send(cartaoLoja);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getCartaoLojaById = async (req, res) => {
    try {
        const cartaoLoja = await cartaoLojaService.getCartaoLojaById(req.params);
        res.status(200).send(cartaoLoja);
    } catch (error) {
        res.status(500).send(error);
    }
}

const insertCartaoLoja = async (req, res) => {
    try {
        const cartaoLoja = await cartaoLojaService.insertCartaoLoja(req.body);
        res.status(201).send(cartaoLoja);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteCartaoLojaById = async (req, res) => {
    try {
        let deletado = await cartaoLojaService.deleteCartaoLojaById(req.params);
        let msg = deletado 
            ? `CartaoLoja ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhum cartaoLoja com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (error) {
        res.status(500).send(error)
    }
}

const patchCartaoLoja = async (req, res) => {
    try {
        const cartaoLoja = await cartaoLojaService.patchCartaoLoja(req.body);
        res.status(201).send(cartaoLoja);
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.getAllCartaoLoja = getAllCartaoLoja;
module.exports.getCartaoLojaById = getCartaoLojaById;
module.exports.insertCartaoLoja = insertCartaoLoja;
module.exports.deleteCartaoLojaById = deleteCartaoLojaById;
module.exports.patchCartaoLoja = patchCartaoLoja;