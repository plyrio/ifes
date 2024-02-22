const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('escola.sqlite', (err) => {
  if(err) {
    return console.error(err.message);
  } 
  console.log("Conectado ao banco de dados");

  // db.run("CREATE TABLE aluno(matricula int primary key, nome varchar(60), email varchar(40), cidade varchar(60))");
});

// db.run("INSERT INTO aluno(matricula, nome, email, cidade) values(1, 'Pedro Lyrio', 'pedrolyrio@ucl.br', 'Vila Velha')");
// db.run("INSERT INTO aluno(matricula, nome, email, cidade) values(2, 'Thays Souza', 'thays@example.com', 'Vila Velha')");
// db.run("INSERT INTO aluno(matricula, nome, email, cidade) values(3, 'João Lopes', 'joao@example.com', 'Vila Velha')");


 db.each("SELECT matricula, nome FROM aluno", (err, row) =>{
   if (err) {
     console.error(err.message);
   }
   console.log(row.matricula + "\t" + row.nome);
 });
