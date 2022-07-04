// Importar a depencia do express para a criação do servidor
const express = require('express');
const db = require('./config/db')
const dotenv = require('dotenv');
dotenv.config();

// Criar uma constante que representa a nossa aplicação como um todo, 
// vamos a chamar de app e ela recebe a invocação do express
const app = express();


// criar uma rota que vai listar todos os cadastros
app.get('/clientes', async (req, res) => {
    const sql = `select * from clientes`;
    const clientes = await db.query(sql);
    let clearClientes = {
        quantidade: clientes.rowCount,
        clientes: clientes.rows.map(c => ({id: c.id, nome: c.nome, email: c.email}))
    }
    res.status(200).send(clearClientes);
});

// Definise-se em qual porta a palicação vai rodar
// para isso usamos a função .listen(PORT, CALLBACK())
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Servidor rodando na porta: ' + PORT);
});