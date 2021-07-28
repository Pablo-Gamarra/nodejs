//Inicializar un servidor manual

/*
const http = require('http');

http.createServer(function (req, res) {
    //req de request petición
    //res de response respuesta
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('<h1>Hola Mundo desde Nodejs</h1>');
    res.end();
}).listen(3000);
*/

//Otra forma usando constantes

/*
const http = require('http');

const colors = require('colors');

const handleServer = function (req, res) {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('<h1>Hola Mundo desde Nodejs</h1>');
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function () {
    console.log('Server on port 3000'.green)
    //.green usamos el modulo colors que instalamos con npm
    // npm install colors, guardamos en una constante el requerimiento 
});
*/

//Usamos el módulo express 

const express = require('express');
const colors = require('colors');

const server = express();

server.get('/', (req, res) => {
    res.send('<h1>Hola Mundo con express</h1>');
    res.end();
});

server.listen(3000, () => {
    console.log('Server on port 3000'.red);
});