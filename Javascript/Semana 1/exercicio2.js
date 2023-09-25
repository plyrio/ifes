const prompt = require('prompt-sync')();

var car_model = prompt("Digite o modelo do seu carro: ");
var km_percorrido = parseFloat(prompt("Quantos KM você percorreu? "));
var litros_comb = parseFloat(prompt("Digite o número de litros gastos no percuso: "));

var consumo = km_percorrido / litros_comb;

console.log("O consumo do carro ",car_model," é de ",consumo,"km/litro.")