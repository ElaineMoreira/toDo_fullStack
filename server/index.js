const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

const SENHA_SECRETA_ENV = process.env.SECRET_CONNECTION_MONGO;

const PORT = process.env.PORT || 3001;

mongoose.connect(`${ SENHA_SECRETA_ENV }`)
/** se deu certo retorna */
	.then((data) => {
		console.log("Conexão bem sucedida do MongoDB!", data.version);
	})
/** se der errado, me mostrar a mensagem de erro */
	.catch((error) => {
		console.log("Erro ao conectar no banco de dados!", error.message);
	});

app.listen(PORT, () =>
	console.log(`Servidor da Elaine Online na porta ${PORT}!`)
);
