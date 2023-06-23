console.log("conectados exitosamente");

//arrays

//let frutas = ["manzana", "platano", "pera"];
//console.log(frutas);

//concetos claves

// 1. length: el tamaño del array (cantidad de elementos)
// 2. indice: comienzan desde cero. es decir, el indice del primer elemtnos de un arrays es 0.

// let frutas = ["manzana", "platano", "pera"];
// console.log(frutas);

// console.log(frutas.length);

// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);
// console.log(frutas[3]);


//for

let frutas = ["manzana", "platano", "pera"];

for (let i = 0; i< frutas.length; i++){
    console.log(frutas[i])
}


// for of   tener en cuenta esta propienda [Symbol.iterator]

for (let fruta of frutas){
    console.log(fruta);
}


//for in

for (let fruta in frutas){
    console.log(fruta);
}


//function

//caracteristicas 
// el nombre de la funcion
// una lista de parametros de la funcion. Entre paranteris y separados por comas
// las declaraciones de javascript que definen una funcion.  encerradas entre llaves

function saludar(){
    console.log("Bienvenidos al curso de JS")
}

saludar();


//Funciones con argumentos/parámetros:

function saludar(nombreUsuario){
    console.log("Bienvenido! " + nombreUsuario);
    
}

saludar("Sebastian");

//Funciones con retorno:

function saludar (nombreUsuario){
    return "Bienvenido" + nombreUsuario;
}

console.log(saludar(" Sebastian"));