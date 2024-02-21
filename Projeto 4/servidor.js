// ESSE ARQUIVO É DO BACK-END DA PAGINA


const http = require('http');
// cria um requerimento 

const express = require('express');
// antes devemos rodar no terminal a instalação
// npm install express

const aplicacao = express(); 
// executando a função anterior

const servidorHttp = http.createServer(aplicacao);

// colocando o socket no servidor http
const io = require('socket.io')(servidorHttp);
// websocket/socket 
// canal de comunicação entre o servidor e o usuário
// usar no temrinal:
// npm install socket.io

io.addListener('connection', (socket) => {
    console.log('um usuário conectou');
    socket.addListener('nova mensagem', (msg) => {
        io.emit('nova mensagem', msg);
    });
    // A MENSAGEM APARECE NO TERMINAL
});
// semelhante ao addEventListener (para o backand)
// é ativado quando um usuário entra na aplicação.
// o socket identifica essa situação.


aplicacao.use(express.static('public'));
// a aplicação pode usar todos os recursos 
// estaticos (html, css) dentro da pasta especificada

servidorHttp.listen(1000, '192.168.1.2');
// após isso, para acessarmos a pagina, colocamos no navegador a url: http://192.168.1.2:1000/



// para criarmos o servidor, devemos rodar no terminal:
// node ./servidor.js -> (nome do arquivo)

//node --watch ./servidor.js -> para não ter que ficar 
// reiniciando o servidor em cada alteração. 


// criando uma função sem nome (Arrow Function): 
//() => {
//    return}

// se quisessemos dar um nome para a função, seria:
// fazerBolo = () => {}
// chamando:
// fazerBolo()