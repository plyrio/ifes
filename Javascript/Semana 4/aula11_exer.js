const prompt = require("prompt-sync")();

var salarios = [];
var soma_sal = 0;
var media;
var qtd_menores = 0;

for (var i = 1; i <= 5; i++) {
  console.log("Pessoa ", i);
  var nome = prompt("Digite o seu nome: ");
  var sal_b = parseFloat(prompt("Digite o seu salario bruto: "));
  var dependentes = parseInt(prompt("Digite o numero de dependentes: "));

  for (var j = 1; j <= dependentes; j++) {
    var ganho = parseFloat(prompt("Digite o salario do dep: "));
    sal_b = sal_b + ganho;
  }

  var renda_pc = sal_b / (dependentes + 1);

  if (renda_pc < 500) {
    console.log("Isento de imposto de renda.");
  } else {
    if (sal_b > 0 && sal_b <= 1903.98) {
      var ir = sal_b * 0.05;
    } else if ((sal_b) => 1903.99 && sal_b <= 2826.65) {
      var ir = sal_b * 0.075;
    } else {
      var ir = sal_b * 0.15;
    }
    //console.log("Seu imposto é de: R$", ir);
  }
  var sal_l = sal_b - ir;
  //console.log("Seu salario liquido é de: R$", sal_l);

  salarios.push(sal_l);
  soma_sal = soma_sal + sal_l;
}

media = soma_sal / 5;

for (var i = 0; i <= 4; i++) {
    if  (salarios[i] < media) {
        qtd_menores++;
    }
}

console.log("A media dos salarios liquidos é: R$", media);
console.log("A quantidade de pessoas com salario liquido menor que a media é: ", qtd_menores);