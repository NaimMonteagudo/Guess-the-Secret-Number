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

