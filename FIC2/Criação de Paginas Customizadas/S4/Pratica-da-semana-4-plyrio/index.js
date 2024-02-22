const express = require('express');
const app = express();
const porta = 443;
const nodemailer = require('nodemailer');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'public')))
app.use(session({ secret: '12345678900' }));
app.use(bodyParser.urlencoded({ extended: false }));

var login = 'admin';
var pass = '1234';

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, './'));

app.get('/', (req, res) => {
    if (req.session.login) {
        res.render('logado');
        console.log('Usuário logado: ' + req.session.login);
    } else {
        res.render('home');
    }
});

app.post('/', (req, res) => {
    if (req.body.login == login && req.body.password === pass) {
        req.session.login = login;
        res.render('logado');
    } else {
        res.render('home');
    }
});


app.get('/enviaremail', (req, res) => {
    if (req.session.login) {
        const mensagem = req.query.mensagem || '';
        res.render('email', { mensagem });
    } else {
        res.redirect('/');
    }
});

app.post('/enviodeemail', async (req, res) => {
    if (req.session.login) {
        var fromEmail = req.body.email;
        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "c159dfe7e6cef8",
                pass: "a50a26c4ab9a41",
            }
        });
        var message = {
            from: "praticas4@ifes.br",
            to: fromEmail,
            subject: "Teste de e-mail",
            text: "Este é um teste de e-mail enviado usando o Nodemailer!",
            html: "<p>Este é um teste de e-mail enviado usando o Nodemailer! Atividade pratica 4, de Plyrio.</p>",
        }
        transport.sendMail(message, (err) => {
            if (err) {
                res.render('email', { mensagem: 'Falha ao enviar e-mail!' });
            } else {
                res.redirect('/enviaremail?mensagem=Enviado com sucesso!');
            }
        });

    } else {
        res.redirect('/');

    }
});


app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
})