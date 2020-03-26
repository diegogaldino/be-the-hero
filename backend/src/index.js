const express= require('express');
const cors = require('cors');
const routes= require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 *Rota / Recurso 
 */

 /**
  * metodos http:
  * 
  * GET: Buscar uma informação no backend
  * POST: Criar uma informação no backend
  * PUT: Alterar uma informação no backend
  * DELETE: Buscar uma informação no backend 
  */
 /**
  * tipos de parametros:
  * 
  * query params: parametros nomeados enviados apos "?"(filtros, paginação)
  * route params: parametros utilizados para identificar recursos
  * request body; corpo da requisição utilizado para criar ou alterar recursos
  */

  /**
   * SQL: mysql, sqlite,postgresql
   * nosql: mongodb,couchdb
   */
  /**
   * driver: 
   */

app.listen(3333);