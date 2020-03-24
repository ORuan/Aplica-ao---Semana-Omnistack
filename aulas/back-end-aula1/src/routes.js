const express = require('express');

const routes = express.Router();

routes.post('/users/', (request, response) => {
    const body =  request.body;

    console.log(body);
    return response.json ({
       evento: 'Semana omnistack',
       aluno : 'Ruzin Pablo m. Ṕereira'
    })
});

module.exports = routes;