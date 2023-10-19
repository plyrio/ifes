const prompt = require("prompt-sync")();
var array_games = [];

do {
  console.log("Sistema de Cadastro de Jogos");
  console.log("1 - Inserir Jogo");
  console.log("2 - Excluir Jogo");
  console.log("3 - Listar Jogos");
  console.log("0 - Sair");

  var opcao = prompt("Digite sua opção: ");

  if (opcao == 1) {
    console.log("\n\nInserindo Jogo...\n");
    let codigo = parseInt(prompt("Digite o código: "));
    let nome = prompt("Digite o nome do jogo: ");
    let genero = prompt("Digite o gênero: ");
    let plataforma = prompt("Digite a plataforma (Mobile, PC...): ");
    let lancamento = prompt("Digite o ano de lançamento: ");

    // Neste trecho estamos declarando um objeto
    const jogo = {
      codigo: codigo,
      nome: nome,
      genero: genero,
      plataforma: plataforma,
      lancamento: lancamento,
    };
    // Chamar a função inserir
    inserir_jogo(jogo);
  } else if (opcao == 2) {
    console.log("\n\nExcluindo Jogo...\n");
    let codigo = parseFloat(prompt("Digite o código do jogo: "));
    // Chamar a função excluir
    excluir_jogo(codigo);
  } else if (opcao == 3) {
    console.log("\n\nListando Jogos...\n");
    // Chamar a função listar
    listar_jogos();
  } else {
    console.log("\n\nSaindo do programa...\n");
  }

  prompt("\nEnter para continuar...");
  console.clear();
} while (opcao != 0);

function inserir_jogo(jogo) {
  // Implementar corpo da função
  array_games.push(jogo);
}

function excluir_jogo(codigo) {
  // Implementar corpo da função
  /*var narray_games = array_games.splice(codigo, 1);
  return narray_games;*/
  for (let i = 0; i < array_games.length; i++) {
  if (array_games[i].codigo == codigo) {
   array_games.splice(i, 1);
   break;
  }
}
}

function listar_jogos() {
  // Implementar corpo da função
  for (let jogo of array_games) {
    console.log(jogo);
  }
}