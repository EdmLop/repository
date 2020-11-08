//const fs = require('fs'); //paquete de node
//const fs = require('express'); paquete externo a node
//const fs = require('./fs'); paquete propio
const { crearArchivo, listar } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];
console.log(argv.base);

console.log(argv);
/* console.log(comando);
 */
switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite).catch(err => {
            console.log('Error: '.red, err);
        });
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => {
            console.log('Se creo el archivo: '.green, archivo.blue);
            console.log(`Se creo el archivo: ${colors.rainbow( archivo)}`);
            console.log(`Se creo el archivo: ${archivo.red}`);
        }).catch(err => {
            console.log('Error: '.red, err);
        });

        break;
    default:
        console.log('Comando no reconocido'.red);
}


/* console.log(argv.base);
console.log(argv.limite);
 */
/* let parametro = argv[2];
let base = parametro.split('=')[1];

console.log(base);

crearArchivo(base).then(archivo => {
    console.log('Se creo el archivo: ', archivo);
}).catch(err => {
    console.log('Error: ', err);
});

 */ //let archivo = multilpicar.multilpicar