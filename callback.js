
//Requerimos el módulo file sytem y lo almacenamos en una constante
const fs = require('fs');

fs.writeFile('./texto.txt', 'linea uno', function(err) {
    if(err) { //Funcion de Callback asíncrona
        console.log(err);
    }
    console.log('Archivo creado');
});

//Comprobamos el orden de ejecución
console.log('Ultima linea de codigo');

/* Orden de ejecución
Primero "Ultima linea de codigo"
Segundo creara el archivo .txt con "linea uno"
Aparecera el mensaje "Archivo creado"
*/