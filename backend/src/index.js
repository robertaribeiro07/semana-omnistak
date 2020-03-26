const express = require("express");
const routes = require("./routes");
const cors =require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use(routes);

/**TIPOS DE PARAMETROS:
 * Query Parans = paramentos envolvidos na rota apos ? (filtros, paginação)
 * Route Parans = parmetros utilizados para identificar um único recurso
 * Request Body: corpo da requisicão, criar ou alterar recursos
 */

/**
 * Driver: select *FROM users
 * Query Builder: table("users").select("*").where()
 * npx para rodar um pacote ( npx pacote init)
 */



app.listen(3001);
