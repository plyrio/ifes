const express = require('express');
const app = express();
const porta = 443;

app.use(express.static('public'));

app.get("/p1.html", (req, res) => {
    res.sendFile(__dirname + "/p1.html");
});

app.get("/p2.html", (req, res) => {
    res.sendFile(__dirname + "/p2.html");
});

app.get("/p3.html", (req, res) => {
    res.sendFile(__dirname + "/p3.html");
});

app.get("/home.html", (req, res) => {
    res.sendFile(__dirname + "/home.html");
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/home.html");
});

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});

