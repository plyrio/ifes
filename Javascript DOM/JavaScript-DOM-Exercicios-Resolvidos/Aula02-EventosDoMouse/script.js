a1 = document.getElementById('area1');
a1.addEventListener('mousedown', mDown);
a1.addEventListener('mouseup', mUp);

a2 = document.getElementById('area2');
a2.addEventListener('mouseover', mOver);
a2.addEventListener('mouseout', mOut);

function mDown() {
  obj = document.getElementById('area1');
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "Solte-me!";
}

function mUp() {
  obj = document.getElementById('area1');
  obj.style.backgroundColor = "#f04028";
  obj.innerHTML = "Obrigado!";
}

function mOver() {
  obj = document.getElementById('area2');
  obj.innerHTML = "Obrigado!"
}

function mOut() {
  obj = document.getElementById('area2');
  obj.innerHTML = "Passe o Mouse!"
}
