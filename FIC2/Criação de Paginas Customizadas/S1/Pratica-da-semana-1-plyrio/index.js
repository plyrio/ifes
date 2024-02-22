const http = require('http');
const fs = require('fs');
const porta = 443;
const readline = require('readline');

const servidor = http.createServer((req, res) => {
  fs.readFile('pagina.html', (err, arquivo) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write(arquivo);
    return res.end();
  });
  fs.appendFile('criado.txt', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', (err) => {
    if (err) throw err;
    console.log(`Arquivo criado com sucesso!`);
    res.end(); 
  });
});
servidor.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});

async function readFileByLine(file) {
  const fileStream = fs.createReadStream(file);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  for await (const line of rl) {
    console.log(line);
  }
}

readFileByLine('criado.txt')
