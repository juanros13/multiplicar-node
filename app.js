//const fs = require('express');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
const { argv } = require('./config/yargs');
var colors = require('colors');

//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        //console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        //console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(colors.green('Archivo creado: %s'), archivo.red))
            .catch(err => console.log(err));
        break;
    default:
        console.log('comando no reconocido');



}


//console.log(process.argv);

/* let argv2 = process.argv;
console.log(argv.limite);
 */


/* let parametro = argv[2];
let base = parametro.split('=')[1] */
//console.log(base);


//et base = '';