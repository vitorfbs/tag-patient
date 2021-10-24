const express = require('express'); // importa o express

const server = express(); // cria uma variável chamada server que chama a função express

server.get('/', (req, res) => {
    return res.sendFile('/Users/dmbrasil/Documents/tag-patient/index.html');
}) // Cria a rota /teste com o método GET, o console.log retornará no terminal ‘teste’ caso tenha executado com sucesso.

server.get('/health', (req, res) => {
    return res.sendFile( { message: 'Hello world' });
}) // Cria a rota /teste com o método GET, o console.log retornará no terminal ‘teste’ caso tenha executado com sucesso.

server.get('/patients', (req, res) => {
    console.log('teste');
})

server.listen(3000); // faz com que o servidor seja executado na porta 3000 do seu localhost:3000