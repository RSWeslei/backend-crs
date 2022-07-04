const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'loja_de_roupas',
    password: 'unochapeco',
    port: 5432
});

module.exports = {query: (text, params) => pool.query(text, params)};