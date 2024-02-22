const prompt = require('prompt-sync')();

setTimeout(() => {
    console.log(`Será executado após 20 segundos.`); //Primeiro parametro da função a ser recebido, pode ser um bloco de codigos.
}, 20000); // recebe 2000 sendo em ms, como segundo parametro.

setTimeout(() => {console.log(typeof setTimeout)}, 2000);

//Callbacks

function obterNome(callback) {
    const nome = prompt('Entre com o seu nome: ');
    callback(nome);
}

obterNome((nome) => {
    console.log(nome);
});

const obterNomes = (callback) => {
    const nome = prompt('Entre com o nome: ');
    callback(nome);
}

obterNomes((nome) => {
    console.log(nome);
})