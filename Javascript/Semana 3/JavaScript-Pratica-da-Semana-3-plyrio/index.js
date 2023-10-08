// Implementar comando de repetição (de 1 até 20)
var sum_par = 0;
var sum_imp = 0;

for (var i = 1; i <= 20; i++) {
  var j = i*i;
  console.log(j);
  
// Implementar os comandos de decisão para verificar números quadrados pares ou ímpares
  
  if (j % 2 == 0) {
    var sum_par = sum_par + j;
  } else {
    var sum_imp = sum_imp + j;
  } 
}
  console.log("A soma de quadrados pares é: " + sum_par);
  console.log("A soma de quadrados ímpares é: " + sum_imp);