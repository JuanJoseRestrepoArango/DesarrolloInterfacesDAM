'use strict'

//BOM: Browser Object Model (Modelo de Objetos del Navegador)

//definimos una funcion para ver el tamaño de nuestra ventana

function getBom(){
    //innerWidth: ancho interior de la ventana
    console.log(window.innerWidth);
    //innerHeight: alto interior de la ventana
    console.log(window.innerHeight);
    //Ver la url de la pagina
    console.log(window.location);
    //href: url completa
    console.log(window.location.href);
}

//definimos una funcion para redireccionar a otra pagina web
function redirect(url){
    window.location.href = url;
}

//definimos una funcion para abrir una nueva ventana
function openNewPage(url){
    window.open(url, '_blank');
    //window.open(url, '_self'); //abre en la misma ventana
    //window.open(url, '_parent'); //abre en el padre
    //window.open(url, '_top'); //abre en la ventana superior
}

