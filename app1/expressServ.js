const log = console.log;
const express = require("express");
const server = express();
log(server);

server.get("/", root);

function root(req, res) {
    res.send("<h3>Hi Express.js</h3>");
}

server.listen(3000);
log("listen on 3000 port");

