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
        asignarTextoElemento('p',`All possible numbers have already been drawn...`);
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
        asignarTextoElemento('p',`¡Congratulations! The secret number was ${numeroSecreto}. You guessed it in ${intentos} ${(intentos===1)? 'try:'tries'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(intentoDeUsuario>numeroSecreto){
            asignarTextoElemento('p',`Try it once again, the secret number is smaller.`);    
        }else asignarTextoElemento('p',`Try it once again, the secret number is bigger.`);   
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
    asignarTextoElemento('h1',"Guess the secret number!");
    asignarTextoElemento('p',`Your attempt (The number is located between 1 y ${numeroMaximo}):`);
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


