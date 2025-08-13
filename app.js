let intentos = 1;
let listaNumSecretos = [];
let numeroSecreto = 0;
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    let numAleatorio = parseInt(Math.random()*numeroMaximo)+1;
    console.log(numAleatorio);
    
    console.log(listaNumSecretos);
    if(listaNumSecretos.length==numeroMaximo){
        asignarTextoElemento('p',`Ya se sortearon todos los numeros posibles.`);
    }else{
        if(listaNumSecretos.includes(numAleatorio)){
            return generarNumeroSecreto();
        }else{
            listaNumSecretos.push(numAleatorio);
            return numAleatorio;   
        }    
    }       
}

function verificarIntento(){
    let intentoDeUsuario = parseInt(document.getElementById('intentoDeUsuario').value);
    
    if(numeroSecreto==intentoDeUsuario){
        asignarTextoElemento('p',`¡Acertaste! El número secreto era ${numeroSecreto}. Lo intestaste ${intentos} ${(intentos===1)? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(intentoDeUsuario>numeroSecreto){
            asignarTextoElemento('p',`Inténtalo nuevamente, el numero secreto es menor.`);    
        }else asignarTextoElemento('p',`Inténtalo nuevamente, el numero secreto es mayor.`);   
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    let valCaja = document.querySelector('#intentoDeUsuario');
    valCaja.value = '';
    return;
}

function iniciarJuego(){
    intentos = 1;
    asignarTextoElemento('h1',"¡Adivina el número secreto!");
    asignarTextoElemento('p',`Ingresa tu intento (está entre 1 y ${numeroMaximo}):`);
    numeroSecreto = generarNumeroSecreto();
    return;
}

function reiniciarJuego(){
    limpiarCaja();
    iniciarJuego();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    return;
}


iniciarJuego();
console.log(listaNumSecretos);
/*
//1)Crear una función que muestre "¡Hola, mundo!" en la consola
function saludar(){
    return console.log("¡Hola, mundo!");
}
saludar();


//2)Crear una función que reciba un nombre como 
// parámetro y muestre "¡Hola, [nombre]!" en la consola.
function saludar2(nombre){
    return console.log(`¡Hola, ${nombre}!`);
}
saludar2("pepe");
//3)Crear una función que reciba un número 
// como parámetro y devuelva el doble de ese número.
function dobleDe(num){
    return num*2;
} 
console.log(dobleDe(3));


//4)Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promediarTres(numA, numB, numC){
    return (numA+numB+numC)/3;
}
console.log(promediarTres(3,3,4));


//5) Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function mayor(a, b){
    if(a>b) return a;
    else return b;
}
console.log(mayor(numeroMaximo0,));

//6)Crear una función que reciba un número como parámetro
//  y devuelva el resultado de multiplicar ese número por sí mismo.
let cuadrado = x => x*x;
console.log(cuadrado(64));

//Ejercicios lista
//1--Crea una lista vacía llamada "listaGenerica".
//2--Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
//3--Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
//4--Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
//5--Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
//6--Crea una función que calcule el promedio de los elementos en una lista de números.
//7--Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
//8--Crea una función que devuelva la suma de todos los elementos en una lista.
//9--Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
//10--Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
//11--Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
*/

