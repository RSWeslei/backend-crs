// Importar a depencia do express para a criação do servidor
const express = require('express');
const db = require('./config/db')
const dotenv = require('dotenv');
dotenv.config();

// Criar uma constante que representa a nossa aplicação como um todo, 
// vamos a chamar de app e ela recebe a invocação do express
const app = express();
app.use(express.json());

// Middleware
require('./routes/index')(app)

// Definise-se em qual porta a palicação vai rodar
// para isso usamos a função .listen(PORT, CALLBACK())
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Servidor rodando na porta: ' + PORT);
});