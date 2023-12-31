var cachorros = [
  { nome: "Thor", imagem: "dog1" },
  { nome: "Zeca", imagem: "dog2" },
  { nome: "Zeus", imagem: "dog3" },
  { nome: "Pingo", imagem: "dog4" },
];

var gatos = [
  { nome: "Dunga", imagem: "cat1" },
  { nome: "Mika", imagem: "cat2" },
  { nome: "Conan", imagem: "cat3" },
  { nome: "Messi", imagem: "cat4" },
];

// Selecionar elemento 'select_animais' ( 1 ponto)
var select_animais = document.getElementById("select_animais");
// Selecionar elemento 'container' ( 1 ponto)
var container = document.getElementById("container");
// Selecionar elemento 'nome' ( 1 ponto)
var nome = document.getElementById("nome");

// Adicionar Listener 'input' ao elemento 'select_animais' (1 ponto)
select_animais.addEventListener("input", listarAnimais);
// Adicionar Listener 'mouseover' ao elemento 'container' (1 ponto)
container.addEventListener("mouseover", mostrarNome);
// Adicionar Listener 'mouseout' ao elemento 'container' (1 ponto)
container.addEventListener("mouseout", limparNome);

function listarAnimais() {
  // Implementação da função (10 pontos)
  limparDivContainer();
  // Implementar...
  if (select_animais.value == "dog") {
    for (let i = 0; i < cachorros.length; i++) {
      var dogs = document.createElement("img");
      dogs.src = "./img/" + cachorros[i].imagem + ".jpg";
      dogs.alt = cachorros[i].nome;
      container.appendChild(dogs);
    }
  } else {
    for (let i = 0; i < gatos.length; i++) {
      var cats = document.createElement("img");
      cats.src = "./img/" + gatos[i].imagem + ".jpg";
      cats.alt = gatos[i].nome;
      container.appendChild(cats);
    }
  }
}

function mostrarNome(e) {
  // Implementação da função (4 pontos)
  // Implementar...
  nome.innerText = e.target.alt;
}

function limparNome() {
  nome.innerText = "";
}

// Função para limpar as imagens antigas, antes de inserir novas imagens
function limparDivContainer() {
  var elemento = document.querySelector("#container");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}
