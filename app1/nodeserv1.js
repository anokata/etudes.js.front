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

    const filePath = request.url.substr(1);
    fs.readFile(filePath, (err, data) => {
        if (err) {
            response.statusCode = 404;
            response.end("Not found :(");
            return;
        }
        response.statusCode = 200;
        response.end(data);
    });

    // response.setHeader("Content-Type", "text/html; charset=utf-8;");
    // response.write(`Request: [${request.method}] on: ${request.url}`);
    // response.statusMessage = "hi";
}
