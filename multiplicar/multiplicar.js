const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite) => {
    console.log('================================'.green);
    console.log(`tabla ${ base }`.green);
    console.log('================================'.green);

    for (let i = 1; i < limite; i++) {
        console.log(` ${ base } * ${ i } = ${ base * i } `);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let contenido = '';
        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un numero`);
            return;
        }
        for (let i = 1; i < limite; i++) {
            contenido += ` ${ base } * ${ i } = ${ base * i } \n`;
        }


        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, contenido, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}