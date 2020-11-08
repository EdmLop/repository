const fs = require('fs');
const colors = require('colors');

let listar = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(limite)) {
            reject(`El valor introducido para limite ${limite} no es un numero`);
            return;
        }
        if (!Number(base)) {
            reject(`El valor introducido para la base ${base} no es un numero`);
            return;
        }
        for (index = 1; index <= limite; index++) {
            console.log(`${index} *  ${base} = ${index*base}`.blue);
        }
    });
}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido para base ${base} No es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido para limite ${limite} No es un numero`);
            return;
        }
        let data = '';
        for (index = 1; index <= limite; index++) {
            data += `${index} *  ${base} = ${index*base}\n`;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            }
            resolve(`tabla-${base}.txt`);
        });

    });
}

module.exports = {
    crearArchivo,
    listar
}