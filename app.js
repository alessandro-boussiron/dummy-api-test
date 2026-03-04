/*
** EPITECH PROJECT, 2026
** epytodo-test
** File description:
** app
*/

const express = require('express')
const swaggerUi = require('swagger-ui-express')
const routes = require('./routes')
const swagger_document = require('./swagger.json');
const port = 3000;

const app = express()

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swagger_document));

app.get('/api-spec.json', (req, res) => {
    res.sendFile(__dirname + '/swagger.json');
});

app.use('/', routes);

app.listen(port, () => {
    console.log(`App listening on ${port}`);
});