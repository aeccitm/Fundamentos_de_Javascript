console.log("conectados de manera existosa!!");

//if/else
// se utiliza para evaluar una expresion condicional: se cumple esa condicion (verdadera), ejecutara un bloque de codigo

//if (condition) {
    //bloque verdadero
//}else{
    //bloque falso
//}

//ejemplo 01

//let textoJavascript = prompt("Escriba 'javascript'");

//if (textoJavascript === "javascript"){
 //   console.log("Lo escribiste super bien");

//}else{
    //console.log("lo escribiste mal");
//}

//ejemplo 02

//let numUsuario = prompt("Ingrese un numero del 1 al 10");

//console.log(numUsuario + " Es: " + typeof numUsuario);

//console.log(parseInt(numUsuario));

//if (parseInt(numUsuario) <= 10) {
//    console.log("Genial escogiste un numero del 1 al 10")
//} else {
//    console.log("Super mal, escogiste un numero fuera del rago")
//}


//switch

//let opcionesUsuario = prompt(`
//eliga un opcion:
//1: libros
//2: Peliculas
//3: juegos
//`)

//switch (opcionesUsuario) {
//    case "1":
 //       console.log("Principito");
  //      
   //     break;
   // case "2":
   //     console.log("Matrix");
    //    break;
   // case "3":
    //    console.log("GTA V");
     //   break;    
    //default:
    //    console.log("Opcion no es valida")
     //   break;
//}

//While

//Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia.

let numero = 0;

while (numero <= 10){
    console.log(numero);
    numero ++; 
    //numero = numero + 1;
}

console.log("Fin: " + numero);
