(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        form.classList.add('was-validated')
      } else {
        inserirContato()
        form.classList.remove('was-validated')
        form.reset();
      }
      event.preventDefault()
      event.stopPropagation()

    }, false)
  })
})()

function getLocalStorage() {
  return JSON.parse(localStorage.getItem('bd_contatos')) ?? [];
}

function setLocalStorage(bd_contatos) {
  localStorage.setItem('bd_contatos', JSON.stringify(bd_contatos));
}

function atualizarTabela() {
  limparTabela();
  const bd_contatos = getLocalStorage();
  bd_contatos.forEach(inserirLinhaTabela);
}

function inserirLinhaTabela(contato, index) {
  const novaLinha = document.createElement('tr');

  novaLinha.innerHTML = `
        <th scope="row">${index}</th>
        <td>${contato.nome}</td>
        <td>${contato.telefone}</td>
        <td>
            <button type="button" class="btn btn-danger" id="${index}" onclick="excluirContato(${index})">Excluir</button>
        </td>
    `
  document.querySelector('#tabelaContato>tbody').appendChild(novaLinha)

}

function limparTabela() {
  var elemento = document.querySelector("#tabelaContato>tbody");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}

function inserirContato() {
  const contato = {
    nome: document.getElementById('txtNome').value,
    telefone: document.getElementById('txtTelefone').value
  }
  const bd_contatos = getLocalStorage();
  bd_contatos.push(contato);
  setLocalStorage(bd_contatos);
  atualizarTabela();
}

function excluirContato(index) {
  const bd_contatos = getLocalStorage();
  bd_contatos.splice(index, 1);
  setLocalStorage(bd_contatos);
  atualizarTabela();
}


atualizarTabela();