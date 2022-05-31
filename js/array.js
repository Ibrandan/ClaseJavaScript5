let arrayCorreoPendientes = [
'@ITBANK.com',
'loki@ITBANK.com',
'@ITBANK.com',
'@ITBANK.com',
'wanda@ITBANK.com'
]

let arrayCorreoAdmitidos =[

]

let arrayCorreoDescartados = [

]

function verificarCorreo(correo) {
    let correoSinEspacios = correo.trim();

    correoSinEspacios.includes('@')
    ? arrayCorreoAdmitidos.push(correo)
    : arrayCorreoDescartados.push(correo);
}

for (let i = 0; i < arrayCorreoPendientes.length; i++) {
    verificarCorreo(arrayCorreoPendientes[i]);
}

console.log(arrayCorreoAdmitidos);
console.log(arrayCorreoDescartados);

let array = ['hola', {'atributo1': 1, 'atributo2': 2}]
