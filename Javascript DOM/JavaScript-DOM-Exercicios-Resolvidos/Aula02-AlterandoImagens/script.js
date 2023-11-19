const imgTecnologia = document.getElementById('imgTecnologia');
const btnHTML = document.getElementById('btnHTML');
const btnCSS = document.getElementById('btnCSS');
const btnJS = document.getElementById('btnJS');

btnHTML.addEventListener('click', tecnologiaHTML);
btnCSS.addEventListener('click', tecnologiaCSS);
btnJS.addEventListener('click', tecnologiaJS);
imgTecnologia.addEventListener('click', tecnologiaTodas);

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



