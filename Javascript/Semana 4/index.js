const prompt = require("prompt-sync")();

alturas = [];

// Implementar a entrada de dados
for (var i = 0; i <= 9; i++) {
  let num = parseFloat(prompt("Digite a altura: "));
  alturas.push(num);
}
// Implementar o processamento de dados
// Fazer for dentro de for
for (var i = 0; i <= 9; i++) {
  let maior = 0;
  for (var j = 0; j <= 9; j++) {
    if (alturas[i] > alturas[j]) {
      maior++;
    }
  }
  // Implementar a saída de dados
  console.log("Aluno", i,": maior que", maior, "aluno(s)");
}
