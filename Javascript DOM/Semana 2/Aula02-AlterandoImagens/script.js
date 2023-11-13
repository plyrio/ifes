const imgTecnologia = document.getElementById('imgTecnologia');
const btnHTML = document.getElementById('btnHTML');
const btnCSS = document.getElementById('btnCSS');
const btnJS = document.getElementById('btnJS');


function tecnologiaHTML() {
  imgTecnologia.src = './img/html.png';
}

function tecnologiaCSS() {
  imgTecnologia.src = './img/css.png';
}

function tecnologiaJS() {
  imgTecnologia.src = './img/js.png';
}

function tecnologiaTodas() {
  imgTecnologia.src = './img/todas.png';
}

btnHTML.addEventListener('click', tecnologiaHTML);
btnCSS.addEventListener('click', tecnologiaCSS);
btnJS.addEventListener('click', tecnologiaJS);

imgTecnologia.addEventListener('click', tecnologiaTodas);

//lamp.addEventListener('mouseover', lampOn);
//lamp.addEventListener('mouseleave', lampOff);
//lamp.addEventListener('dblclick', lampBroken);

