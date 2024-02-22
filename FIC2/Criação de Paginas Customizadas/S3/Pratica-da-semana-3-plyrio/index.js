const porta = 443;
const formidavel = require('formidable');
const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  if (req.url != '/enviodearquivo') {
    fs.readFile('index.html', (err, arquivo) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(arquivo);
      return res.end();
    });
  }
    app.post('/enviodearquivo', (req, res) => {
      const form = new formidavel.IncomingForm();
      form.parse(req, (erro, campos, arquivos) => {
        const urlAntiga = arquivos.filetoupload[0].filepath;
        const urlNova = './enviodearquivo/' + arquivos.filetoupload[0].originalFilename;
        var rawData = fs.readFileSync(urlAntiga);
        fs.writeFile(urlNova, rawData, (err) => {
          if (err) console.log(err);
        res.send("Arquivo enviado com sucesso!");
        });
      });
    });
  });
app.get('/enviodearquivo', (req, res) => {
  res.send("Arquivo enviado com sucesso!");
});

app.get('/listar', (req, res) =>{
  function listarArquivos(diretorio, arquivos) {

     if (!arquivos)
        arquivos = []
     let listagemArquivos = fs.readdirSync(diretorio)
     console.log(listagemArquivos)
  }
  listarArquivos('./enviodearquivo')
  res.send("Arquivo(s) listado(s) com sucesso no Console!");
});

    app.listen(porta, () => {
      console.log('Servidor rodando!');
      });