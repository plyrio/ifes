const   prompt = require("prompt-sync")();

var n1 = parseInt(prompt("Digite o num 1: "));
var n2 = parseInt(prompt("Digite o num 2: "));

if (n1 > 0 && n2 > 0 ){
    if (n1 % 2 == 0 && n2 % 2 == 0){
        console.log("Os dois são pares;")
    } else if(n1 % 2 !== 0 && n2 % 2 !== 0){
        console.log("Os dois são impares;")
    } else {
        console.log("Um par e um ímpar;")
    }

} else {
    console.log("Existe pelo menos um numero 0 ou negativo.")
}
