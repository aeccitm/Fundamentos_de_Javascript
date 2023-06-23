console.log("Conectados exisotamente");

//funcion que se Math.random(): La función Math.random() retorna un punto flotante, un número pseudo-aleatorio dentro del rango [0, 1).

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!

let numeroMaquina = Math.floor(Math.random() * (10-1)) + 1;
console.log(numeroMaquina);

let numeroUsuario = parseInt(prompt("Adivine el numero de 1 al 10"));

let vidas = 3;

while (numeroMaquina !== numeroUsuario && vidas >1){
    //vidas=vidas -1;
    vidas--;
    numeroUsuario = parseInt(prompt("Vuelve a  intentarlo, tus vidas son: " + vidas));
}


if (numeroMaquina === numeroUsuario){
    console.log("GANASTE");
}else{
    console.log("PERDISTE, el numero era: " + numeroMaquina);
}

