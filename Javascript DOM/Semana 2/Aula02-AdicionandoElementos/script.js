function adicionarLinha() {
  const num = parseInt(Math.random() * (100 - 1) + 1);
  const novaLinha = document.createElement('tr');
  novaLinha.innerHTML = `<td>${num}</td>`;
  document.querySelector('#tabela1').appendChild(novaLinha);
}