prompt = require("prompt-sync")();

array = [];
soma = 0;

for (i = 0; i < 8; i++) {
  num = parseInt(prompt('Digite um número: '));
  soma = soma + num;
  array.push(num);
}

media = soma / 8;

for (i = 0; i < 8; i++) {
  if (array[i] > media) {
    console.log(array[i]);
  }
}