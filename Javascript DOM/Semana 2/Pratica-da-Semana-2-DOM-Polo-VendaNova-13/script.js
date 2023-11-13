var cachorros = [{ "nome": "Thor", "imagem": "dog1" }, { "nome": "Zeca", "imagem": "dog2" }, { "nome": "Zeus", "imagem": "dog3" }, { "nome": "Pingo", "imagem": "dog4" }];

var gatos = [{ "nome": "Dunga", "imagem": "cat1" }, { "nome": "Mika", "imagem": "cat2" }, { "nome": "Conan", "imagem": "cat3" }, { "nome": "Messi", "imagem": "cat4" }];

// Selecionar elemento 'select_animais' ( 1 ponto)
// Selecionar elemento 'container' ( 1 ponto)
// Selecionar elemento 'nome' ( 1 ponto)

// Adicionar Listener 'input' ao elemento 'select_animais' (1 ponto)
// Adicionar Listener 'mouseover' ao elemento 'container' (1 ponto)
// Adicionar Listener 'mouseout' ao elemento 'container' (1 ponto)

function listarAnimais() { // Implementação da função (10 pontos)
  limparDivContainer();
  // Implementar...
}

function mostrarNome(e) { // Implementação da função (4 pontos)
  // Implementar...
}

function limparNome() {
  p.innerText = "";
}

// Função para limpar as imagens antigas, antes de inserir novas imagens
function limparDivContainer() {
  var elemento = document.querySelector("#container");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}