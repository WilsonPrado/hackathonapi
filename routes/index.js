'use strict';

const axios = require('axios');
const url = '';

var optionsPost = { method: 'POST',
  url: 'https://upxtestebackend-3b72.restdb.io/rest/anomalies',
  headers: 
   { 'cache-control': 'no-cache',
     'x-apikey': '412bfa50859d606423f0d54a5f02d19d72ddc',
     'content-type': 'application/json' },
  data: {},
  json: true };


var optionsGet = { method: 'GET',
  url: 'https://upxtestebackend-3b72.restdb.io/rest/anomalies',
  headers: 
  { 'cache-control': 'no-cache',
      'x-apikey': '412bfa50859d606423f0d54a5f02d19d72ddc' } };


module.exports.getAnomalies = () => {
    let objToAxios = {
        url: url,
        method: 'GET'
    };

    return axios(objToAxios);
}


module.exports.saveAnomalies = (anomalies) => {
    optionsPost.data.anomalies = anomalies;
    return axios(optionsPost);
}

module.exports.getDbAnomalies = () => {
    return axios(optionsGet);
}