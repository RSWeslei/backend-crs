const { query } = require('express');
const { param } = require('express/lib/request');
const db = require('../config/db');

// retorna todos cidades
const getAllCidades = async () => {
    let sql = 'select * from cidades';
    let cidades = await db.query(sql);
    return cidades.rows;
}

// retorna um cidade pelo id
const getCidadesById = async (params) => {
    let sql = 'select * from cidades where id = $1';
    let cidade = await db.query(sql, [params.id]);
    return cidade.rows;
}

// insere um novo cidade
const insertCidade = async (params) => {
    let {nome, uf} = params;
    let sql = `insert into cidades(
        nome,
        uf
    ) values ($1, $2) returning id`;
    let cidade = await db.query(sql, [nome, uf]);
    return cidade.rows[0];
}

const deleteCidadeById = async (params) => {
    let sql = `delete from cidades where id = $1`
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
}

const patchCidade = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update cidades set ${fields} where id = ${params.id}`;
    await db.query(sql);
}

module.exports.getAllCidades = getAllCidades;
module.exports.getCidadesById = getCidadesById;
module.exports.insertCidade = insertCidade;
module.exports.deleteCidadeById = deleteCidadeById;
module.exports.patchCidade = patchCidade;