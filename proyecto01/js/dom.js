'use strict'
// DOM: Document Object Model (Modelo de Objetos del Documento)

// var caja = document.getElementById('caja');
// console.log(caja);
var caja = document.getElementById('caja');
console.log(caja);
// caja.innerHTML = 'Texto en la caja desde JS';
caja.innerHTML = ' Nuevo valor de mi div';

caja.style.background = 'red';
caja.style.padding = '20px';
caja.style.color = 'white';

caja.className = 'mi nueva clase';


var cajaQuery = document.querySelector('#caja');

var tdosLosDivs = document.getElementsByTagName('div');
console.log(tdosLosDivs," todos los divs");

tdosLosDivs[2].style.background = 'blue';
tdosLosDivs[2].style.color = 'white';
tdosLosDivs[2].style.padding = '10px';
tdosLosDivs[2].innerHTML = 'Nuevo valor del div';

var todosLosBlueDivs = document.getElementsByClassName('blue');
console.log(todosLosBlueDivs, " todos los blue divs");








