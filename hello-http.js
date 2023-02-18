//carregar o módulo hhttp
var http = require('http');
var url = require('url')
var fs = require('fs');

//Função para le um arquivo e escrevê-lo na response
function readFile(response,file){
    //faz a leitura do arquivo  de forma assícrona
    fs.readFile(file,function(err, data){
        //Quando ler, escreve na response o conteúdo do arquivo JSON
        response.end(data);
    });
}

//Função callback para o servidor http
function callback (request, response){

//Define o cabeçalho(HEADER) com o tipo da resposta + UTF-8 como charset
response.writeHead(200,{"Content-Type": "application/json; charset=utf-8"});  

// Faz o parts da url separado do caminho de rota
var parts = url.parse(request.url);

var path = parts.path


//Verifica a rota
if(path == '/carros/classicos'){
    //Retorna o JSON dos carros classicos
    readFile(response,"carros_classicos.json");

}else if(path == '/carros/esportivos') {
    //Retorna o JSON dos carros esportivos
   readFile(response,"carros_esportivos.json");

}else if(path == '/carros/luxo'){
     //Retorna o JSON dos carros de luxo
    readFile(response, "carros_luxo.json");

} else{
    response.end("Rota inválida" + path);
}
};

//Criar um servidor HTTP que vai responder "Hello World" para todas asaa requisições
var server = http.createServer(callback);

//Porta de o servidor vai escutar
server.listen(3000);

//Mensagem ao iniciar o servidor
console.log("Servidor iniciado em http://localhost:3000/");
