// Crear la estructura adecuada para guardar las siguientes películas:

// "star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"

// verificá que todo funciona correctamente accediendo a alguna de las películas una vez creada la estructura correspondiente.

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];

console.log(peliculas);

// De producción dieron el aviso de que las películas deberían estar todas en mayúsculas. 

// Para esto solicitan que crees una función que reciba por parámetro un array y convierta el contenido de cada elemento a mayúsculas

// revisá qué hace el método de strings .toUpperCase().

let peliculasCaps;

function arrayToUpperCase(array){
    let nuevoArray = [];
    for (let i = 0; i < array.length; i++) {
        nuevoArray[i] = array[i].toUpperCase()
    }
    return nuevoArray;
}

peliculasCaps = arrayToUpperCase(peliculas);

console.log(peliculasCaps);

// Mientras trabajabas en el feature anterior, se dio el aviso de que también hay que crear otra estructura similar a la primera, pero con las siguientes películas animadas:

// "toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"

// Piden crear una función que reciba dos arrays como parámetros, para poder agregar los elementos contenidos en el segundo array dentro del primero, y así retornar un solo array con todas las películas como sus elementos.

// Las películas animadas también deberían convertirse a mayúsculas.

// Durante el proceso, uno de los desarrolladores advierte que el último elemento del array de películas animadas es un videojuego. Ahora tenés que editar el código y modificarlo de manera que puedas eliminar ese último elemento antes de migrar el contenido al array que contenga todas las películas.

// Por precaución, guardá el elemento que vas a eliminar en una variable.

let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
let juego = peliculasAnimadas.pop();

function convertir(array1, array2) {
    for (let i = 0; i < array2.length; i++) {
        array1.push(array2[i].toUpperCase())
    }
    return array1;
}
let peliculas3 = (convertir(peliculasCaps, peliculasAnimadas));
console.log(peliculas3);
console.log(juego);

// Finalmente, te envían dos arrays con calificaciones que hacen distintos usuarios del mundo sobre las películas con el siguiente formato:

// const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];

// const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]; 

// Te piden crear una función que compare las calificaciones e indique si son iguales o diferentes. Te confirman que están en el orden adecuado y que solo traen valores numéricos del 1 al 10.

// Los elementos de los scores tanto de Asia como de Europa corresponden en orden al del array resultante de combinar películas con películas animadas. Es decir, el primer elemento del array de películas general corresponde al primer elemento de asiaScores y al primer elemento de euroScores, y así sucesivamente.

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];

const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]; 

function comparacion(scores1, scores2){
    for (let i = 0; i < scores1.length; i++) {
        if(scores1[i] !== scores2[i]){
            return false;
        }
    }
    return true;
}

console.log(comparacion(asiaScores, euroScores));