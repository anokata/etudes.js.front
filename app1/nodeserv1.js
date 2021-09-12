const http = require("http");
const fs = require("fs");
const log = console.log;

log(fs);
let server = http.createServer(serverHandler);
log(server, server.listen);
server.listen(3000);

function serverHandler(request, response) {
    log(request); // http.IncomingMessage
    log(request.headers);
    log();
    log(response); // http.ServerResponse

     if(request.url === "/"){
        response.statusCode = 302;
        response.setHeader("Location", "/about");
        response.end();
        return;
    }

    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    response.statusCode = 200;
    response.statusMessage = "hi";
    response.write("Hi!\n");
    response.end(`Request: [${request.method}] on: ${request.url}`);
}
