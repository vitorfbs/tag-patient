const express = require('express'); // importa o express
const server = express(); // cria uma variável chamada server que chama a função express

var path = __dirname + '/public';

var router = express.Router();

server.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));

server.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

server.use(express.static(__dirname + '/public'));

server.use('/',router);

router.get('/', function(req, res) {
    res.sendFile(path+'/index.html');
});

router.get('/consultation', function(req, res) {
    res.sendFile(path+'/consultation.html');
});

server.get('/health', (req, res) => {
    return res.sendFile( { message: 'Hello world' });
})

server.listen(3001);