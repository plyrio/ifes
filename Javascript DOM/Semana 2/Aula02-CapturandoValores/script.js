function calcular() {
  var altura = parseFloat(window.document.getElementById('txtAltura').value);
  var peso = parseFloat(window.document.getElementById('txtPeso').value);
  var imc = peso / (altura * altura);

  var d = window.document.getElementById('divIMC');
  d.innerHTML = `O IMC é: <strong>${imc.toFixed(2)}</strong>`;
}