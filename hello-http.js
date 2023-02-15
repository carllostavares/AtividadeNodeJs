//carregar o módulo hhttp
var http = require('http');
var url = require('url')


var callback = function (request, response){

//Define o cabeçalho(HEADER) com o tipo da resposta + UTF-8 como charset
response.writeHead(200,{"Content-Type": "text/plain; charset=utf-8"});  

// Faz o parts da url separado do caminho de rota
var parts = url.parse(request.url);

//Verifica a rota
if(parts.path == '/'){
    response.end("Site na raiz.");
}else if(parts.path == '/carros') {
    response.end("Voce digitou a rota /carros !\ns")
}else{
    response.end("Rota inválida" +  parts.path);
}
};

//Criar um servidor HTTP que vai responder "Hello World" para todas asaa requisições
var server = http.createServer(callback);

//Porta de o servidor vai escutar
server.listen(3000);

//Mensagem ao iniciar o servidor
console.log("Servidor iniciado em http://localhost:3000/");
