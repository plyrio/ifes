(function () {
  "use strict";

  var forms = document.querySelectorAll(".needs-validation");

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          form.classList.add("was-validated");
        } else {
          inserir();
          form.classList.remove("was-validated");
          form.reset();
        }
        event.preventDefault();
        event.stopPropagation();
      },
      false
    );
  });
})();

function getLocalStorage() {
  return JSON.parse(localStorage.getItem("bd_games")) ?? [];
}

function setLocalStorage(bd_games) {
  localStorage.setItem("bd_games", JSON.stringify(bd_games));
}

function limparTabela() {
  var elemento = document.querySelector("#tabela>tbody");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}

function atualizarTabela() {
  // Adaptação da função atualizarTabela (5 pontos)
  limparTabela();
  const bd_games = getLocalStorage();
  let index = 0;
  for (game of bd_games) {
    const novaLinha = document.createElement("tr");
    novaLinha.innerHTML = `
        <th scope="row">${index}</th>
        <td>${game.nome}</td>
        <td>${game.desenvolvedora}</td>
        <td>${game.plataforma}</td>
        <td>${game.modo}</td>
        <td>${game.data}</td>
        <td>${game.genero}</td>
        <td>
            <button type="button" class="btn btn-danger" id="${index}" onclick="excluir(${index})">Excluir</button>
        </td>
    `;
    document.querySelector("#tabela>tbody").appendChild(novaLinha);
    index++;
  }
}

function inserir() {
  // Adaptação da função inserir (10 pontos)
  const game = {
    nome: document.getElementById("nome").value,
    desenvolvedora: document.getElementById("desenvolvedora").value,
    plataforma: document.getElementById("plataforma").value,
    modo: document.getElementById("modo").value,
    data: document.getElementById("data").value,
    genero: document.getElementById("genero").value,
  };
  const bd_games = getLocalStorage();
  bd_games.push(game);
  setLocalStorage(bd_games);
  atualizarTabela();
}

function excluir(index) {
  // Adaptação da função excluir (5 pontos)
  const bd_games = getLocalStorage();
  bd_games.splice(index, 1);
  setLocalStorage(bd_games);
  atualizarTabela();
}

function validarNome() {
  // Adaptação da função validar (10 pontos)
  const bd_games = getLocalStorage();
  for (game of bd_games) {
    if (nome.value == game.nome) {
      nome.setCustomValidity("Este jogo já foi cadastrado!");
      feedbackNome.innerText = "Este jogo já foi cadastrado!";
      return false;
    } else {
      nome.setCustomValidity("");
      feedbackNome.innerText = "Informe o nome do Game.";
    }
  }
  return true;
}

atualizarTabela();
// Seleção dos elementos e adição do listener para validação customizada (5 pontos)
const nome = document.getElementById("nome");
const feedbackNome = document.getElementById("feedbackNome");
nome.addEventListener("input", validarNome);