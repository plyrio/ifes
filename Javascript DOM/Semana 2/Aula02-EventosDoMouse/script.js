a1 = window.document.getElementById('area1');
a1.addEventListener('mousedown', mDown);
a1.addEventListener('mouseup', mUp);

a2 = window.document.getElementById('area2');
a2.addEventListener('mouseover', mOver);
a2.addEventListener('mouseout', mOut);

function mDown() {
  obj = window.document.getElementById('area1');
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "Solte-me!";
}

function mUp() {
  obj = window.document.getElementById('area1');
  obj.style.backgroundColor = "#f04028";
  obj.innerHTML = "Obrigado!";
}

function mOver() {
  obj = window.document.getElementById('area2');
  obj.innerHTML = "Obrigado!"
}

function mOut() {
  obj = window.document.getElementById('area2');
  obj.innerHTML = "Passe o Mouse!"
}