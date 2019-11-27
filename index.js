'use strict';

const express = require('express');
const axios = require('axios');
const PORT = 80;

const app = express();


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});



/** 
 * Função que busca as anomalias na API, grava no banco os ataques e retorna para o usuário;
*/
app.get('/infos', (req, res) => {

  let retornoMocado = [{
    id: 1,
    idJogador: 1,
    comando: "Avançar direita -> Avançar direita ->Avançar direita ->Avançar direita",
  },
  {
    id: 2,
    idJogador: 2,
    comando: "Avançar esquerda -> Avançar esquerda -> Faça enquanto houver terreno",
  },{
    id: 3,
    idJogador: 1,
    comando: "Faça enquanto houver terreno",
  },{
    id: 4,
    idJogador: 4,
    comando: "Avançar direita -> Avançar direita ->Avançar direita ->Avançar direita",
  },{
    id: 5,
    idJogador: 3,
    comando: "Avançar direita",
  },{
    id: 6,
    idJogador: 1,
    comando: "Avançar direita -> Avançar esquerda",
  }]

    res.status(200).send({
      status: 200,
      infos: {
        retornoMocado
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