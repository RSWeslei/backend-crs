const db = require('../config/db');

// retorna todos categorias
const getAllCategorias = async () => {
    let sql = 'select * from categorias';
    let categorias = await db.query(sql);
    return categorias.rows;
}

// retorna um categoria pelo id
const getCategoriaById = async (params) => {
    let sql = 'select * from categorias where id = $1';
    let categoria = await db.query(sql, [params.id]);
    return categoria.rows;
}

// insere um novo categoria
const insertCategoria = async (params) => {
    let {nome} = params;
    let sql = `insert into categorias(
        nome
    ) values ($1) returning id`;
    let categoria = await db.query(sql, [nome]);
    return categoria.rows[0];
}

const deleteCategoriaById = async (params) => {
    let sql = `delete from categorias where id = $1`
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
}

const patchCategoria = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update categorias set ${fields} where id = ${params.id}`;
    await db.query(sql);
}

module.exports.getAllCategorias = getAllCategorias;
module.exports.getCategoriaById = getCategoriaById;
module.exports.insertCategoria = insertCategoria;
module.exports.deleteCategoriaById = deleteCategoriaById;
module.exports.patchCategoria = patchCategoria;