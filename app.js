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
const cors = require('cors');

var corsOptions = {
    origin: '*',
}

const app = express()

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swagger_document));
app.use(express.json);

app.get('/api-spec.json', (req, res) => {
    res.sendFile(__dirname + '/swagger.json');
});

app.use('/', cors(corsOptions), routes);

app.get('/', (req, res) => {
    res.status(200).send("Hello world");
});

app.listen(port, () => {
    console.log(`App listening on ${port}`);
});