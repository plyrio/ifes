const prompt = require('prompt-sync')();
var nome = prompt("Digite o seu nome: ")
var salario_bruto = prompt("Digite o seu salário bruto: ");
var ir = salario_bruto * (10/100);
var salario_liquido = salario_bruto - ir;
console.log("O salario liquido é de R$", salario_liquido+",00"\n);