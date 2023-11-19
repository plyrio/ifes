var elementos = document.getElementsByTagName('*');
document.write("Quantidade de elementos: " + elementos.length);

var todosElementos = "";

for (let e of elementos) {
  todosElementos = todosElementos + "<br>" + e.tagName;
}

/*
for (let i = 0; i < elementos.length; i = i + 1) {
  todosElementos = todosElementos + "<br>" + elementos[i].tagName;
}
*/


document.write(todosElementos);