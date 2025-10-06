'use strict'

//Eventos
//son funciones que se ejecutan cuando ocurre algo
//como por ejemplo cuando el usuario hace click en un boton

//Eventos de raton

function cambiarColorBoton(){
    console.log("has dado click");

    var boton = document.getElementById('boton');

    var bgButton = boton.style.background;

    if(bgButton == 'green'){
        boton.style.background = 'red';
    }else{
        boton.style.background = 'green';
    }

    boton.style.padding = '10px';
    boton.style.border = 'none';
    boton.style.color = 'white';
    boton.style.fontSize = '16px';
    boton.style.cursor = 'pointer';

    return true;
}

boton.addEventListener('click', cambiarColorBoton);


//eventos focuts y blur
var input = document.querySelector('#campo_nombre');
input.addEventListener('focus', function(){
    console.log("estas dentro del input");
});
input.addEventListener('blur', function(){
    console.log("estas fuera del input");
});

//eventos keydown, keypress y keyup
input.addEventListener('keydown', function(event){
    console.log(event,'evento');
    console.log('keydown tecla presionada'+ event.key);
});

input.addEventListener('keypress', function(event){
    console.log(event,'evento');
    console.log('key press tecla presionada'+ event.key);
});
input.addEventListener('keyup', function(event){
    console.log(event,'evento');
    console.log('keyup tecla soltada'+ event.key);
});

