'use strict';

const express = require('express');
const PORT = 5001;

const app = express();


/** 
 * Função que busca as anomalias na API, grava no banco os ataques e retorna para o usuário;
*/
app.get('/teste', (req, res) => {
    res.status(200).send({
      status: 200,
      data: {
        oi: "batata"
      }
    })
});

/**
 * Função que busca os ataques já inseridos no banco
 */
app.get('/api/', (req, res) => {
    
});



app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});