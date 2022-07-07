const { query } = require('express');
const { param } = require('express/lib/request');
const db = require('../config/db');

// retorna todos roupas
const getAllRoupas = async () => {
    let sql = 'select * from roupas';
    let roupas = await db.query(sql);
    return roupas.rows;
}

// retorna um roupa pelo id
const getRoupaById = async (params) => {
    let sql = 'select * from roupas where id = $1';
    let roupa = await db.query(sql, [params.id]);
    return roupa.rows;
}

// insere um novo roupa
const insertRoupa = async (params) => {
    let {nome, cor, tamanho, marca, preco_compra, lucro_porcentagem, id_categoria} = params;
    let sql = `insert into roupas(
        nome,
        cor,
        tamanho,
        marca,
        preco_compra,
        lucro_porcentagem,
        id_categoria
    ) values ($1, $2, $3, $4, $5, $6, $7) returning id`;
    let roupa = await db.query(sql, [nome, cor, tamanho, marca, preco_compra, lucro_porcentagem, id_categoria]);
    console.log(sql);
    sql = `update roupas set 
        preco_venda = preco_compra + (lucro_porcentagem / 100 * preco_compra)
        where id = ${roupa.rows[0].id};`;
    await db.query(sql);
    return roupa.rows[0];
}

const deleteRoupaById = async (params) => {
    let sql = `delete from roupas where id = $1`
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
}

const patchRoupa = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update roupas set ${fields} where id = ${params.id}`;
    await db.query(sql);
}

module.exports.getAllRoupas = getAllRoupas;
module.exports.getRoupaById = getRoupaById;
module.exports.insertRoupa = insertRoupa;
module.exports.deleteRoupaById = deleteRoupaById;
module.exports.patchRoupa = patchRoupa;

// select 
//     nf.id, nf.valor, nfr.valor, nfr.quantidade, r.preco_venda, r.nome, c.nome
// from nota_fiscal as nf
// inner join nota_fiscal_roupas as nfr on (nf.id = nfr.id_nota_fiscal)
// inner join roupas as r on (nfr.id_roupa = r.id)
// inner join categorias as c on (r.id_categoria = c.id)