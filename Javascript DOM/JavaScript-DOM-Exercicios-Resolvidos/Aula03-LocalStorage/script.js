const contato1 = {
  nome: "Rafael",
  telefone: "(11)11111-1111"
}

const contato2 = {
  nome: "João",
  telefone: "(22)22222-2222"
}
const bd_contatos = [contato1, contato2];

localStorage.setItem('bd_contatos', JSON.stringify(bd_contatos));

const contatos = JSON.parse(localStorage.getItem('bd_contatos'));

for (let c of contatos) {
  document.write("<p>" + c.nome);
  document.write("<p>" + c.telefone);
}
