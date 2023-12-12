// Modularização 

function celsiusToF(celsius) {
  return celsius * 1.8 + 32;
}

function FtoCelsius(F) {
  return (F - 32) / 1.8;
}

//exportando as funções para torna-las acessivel a outros arquivos
module.exports = {
    celsiusToF,
    FtoCelsius
}