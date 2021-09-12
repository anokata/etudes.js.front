const log = console.log;
const express = require("express");
const server = express();
// log(server);

// middlewares
server.use((req, res, next) => {
    log("Middleware #1 ... Preparing");
    next();
});

server.use("/about", (req, res, next) => {
    log("Middleware #about");
    next();
});

// main roots
server.get("/", root);
server.get("/about", (req, res) => {
    log("/about get")
    res.send("About");
});

function root(req, res) {
    res.send("<h3>Hi Express.js</h3> <a href='/about' >a</a>");
}



server.listen(3000);
log("listen on 3000 port");

