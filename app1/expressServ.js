const log = console.log;
const express = require("express");
const server = express();
// log(server);
log(__dirname);
// middlewares

server.use(express.static(__dirname + "/static"));

server.use((req, res, next) => {
    log("Middleware #1 ... Preparing");
    next();
});

server.use("/about", (req, res, next) => {
    log("Middleware #about");
    // res.send(['abc', 123]);
    next();
});


server.use("/product*", (req, res, next) => {
    log("Middleware pattern*");
    res.send(`product # ${req.baseUrl} | ${req.path}`);
    next();
});

server.get(/.*(\.)js/, function (request, response) {
    log("Middleware pattern js hook");
    response.send(request.url)
});


// main roots
server.get("/", root);
server.get("/about", (req, res) => {
    log("/about get")
    res.sendFile(__dirname + "/static/about.html");
});


server.get("/hi", (req, res) => {
    res.send("About");
    // res.send({name: "Antony"});
});


server.get("/*", (req, res) => {
    res.redirect("/");
});

server.get("/no", (req, res) => {
    res.status(404).send("Nothing");
});

function root(req, res) {
    res.send("<h3>Hi Express.js</h3> <a href='/about' >a</a> <a href='/about.html'> about</a>");
}



server.listen(3000);
log("listen on 3000 port");

