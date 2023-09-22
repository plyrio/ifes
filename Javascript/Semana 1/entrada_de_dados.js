const prompt = require('prompt-sync')();
var nome = prompt("Digite o seu nome: ")
var salario_bruto = parseFloat(prompt("Digite o seu salário bruto: "));
var ir = salario_bruto * (10/100);
var salario_liquido = salario_bruto - ir;
console.log(nome,"o salario liquido é de R$", salario_liquido+",00");