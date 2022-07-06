const categoriasService = require('../services/categoriasService');

const getAllCategorias = async (req, res) => {
    try {
        const categorias = await categoriasService.getAllCategorias();
        res.status(200).send(categorias);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getCategoriaById = async (req, res) => {
    try {
        const categoria = await categoriasService.getCategoriaById(req.params);
        res.status(200).send(categoria);
    } catch (error) {
        res.status(500).send(error);
    }
}

const insertCategoria = async (req, res) => {
    try {
        const categoria = await categoriasService.insertCategoria(req.body);
        res.status(201).send(categoria);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteCategoriaById = async (req, res) => {
    try {
        let deletado = await categoriasService.deleteCategoriaById(req.params);
        let msg = deletado 
            ? `Categoria ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhumA categoria com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (error) {
        res.status(500).send(error)
    }
}

const patchCategoria = async (req, res) => {
    try {
        const categoria = await categoriasService.patchCategoria(req.body);
        res.status(201).send(categoria);
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.getAllCategorias = getAllCategorias;
module.exports.getCategoriaById = getCategoriaById;
module.exports.insertCategoria = insertCategoria;
module.exports.deleteCategoriaById = deleteCategoriaById;
module.exports.patchCategoria = patchCategoria;