const db = require('../config/db');

// retorna todos cartaoLoja
const getAllCartaoLoja = async () => {
    let sql = 'select * from cartao_loja';
    let cartaoLoja = await db.query(sql);
    return cartaoLoja.rows;
}

// retorna um cartaoLoja pelo id
const getCartaoLojaById = async (params) => {
    let sql = 'select * from cartao_loja where id = $1';
    let cartaoLoja = await db.query(sql, [params.id]);
    return cartaoLoja.rows;
}

// insere um novo cartaoLoja
const insertCartaoLoja = async (params) => {
    let {nome_titular, numero, cvv, vencimento, id_cliente} = params;
    let sql = `insert into cartao_loja(
        nome_titular,
        numero,
        cvv,
        vencimento,
        id_cliente
    ) values ($1, $2, $3, $4, $5) returning id`;
    let cartaoLoja = await db.query(sql, [nome_titular, numero, cvv, vencimento, id_cliente]);
    return cartaoLoja.rows[0];
}

const deleteCartaoLojaById = async (params) => {
    let sql = `delete from cartao_loja where id = $1`
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
}

const patchCartaoLoja = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update cartao_loja set ${fields} where id = ${params.id};`;
    await db.query(sql);
}

module.exports.getAllCartaoLoja = getAllCartaoLoja;
module.exports.getCartaoLojaById = getCartaoLojaById;
module.exports.insertCartaoLoja = insertCartaoLoja;
module.exports.deleteCartaoLojaById = deleteCartaoLojaById;
module.exports.patchCartaoLoja = patchCartaoLoja;