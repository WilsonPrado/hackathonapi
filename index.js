'use strict';

const express = require('express');
const axios = require('axios');
const PORT = 5001;

const app = express();


/** 
 * Função que busca as anomalias na API, grava no banco os ataques e retorna para o usuário;
*/
app.get('/teste', (req, res) => {

    axios.get('https://api.hgbrasil.com/weather?key1008acee').then(function(data){
      let retorno = data.data;
      res.status(200).send({
        status: 200,
        infos: {
          retorno
        }
      })
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