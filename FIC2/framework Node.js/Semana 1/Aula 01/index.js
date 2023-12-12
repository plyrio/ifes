/*const prompt = require("prompt-sync")();

console.log("Digite o seu nome: ");
var nome = prompt("Digite o seu nome: ");

console.log(nome);*/

//Usando o modulo de temperatura

const conversor = require('./temperatureConverter.js');

var tempC = 25;

var tempF = conversor.celsiusToF(tempC);

console.log(tempF);