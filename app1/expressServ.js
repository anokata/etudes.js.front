const log = console.log;
const express = require("express");
const server = express();
// log(server);
log(__dirname);
// middlewares

server.use(express.static(__dirname + "/static"));

const urlencodedParser = express.urlencoded({extended: false});

server.post("/register",urlencodedParser, (req, res) => {
    if(!req.body) return response.sendStatus(400);
    log(req.body);
    res.send(`${req.body.userName} - ${req.body.userAge}`);
});

server.use((req, res, next) => {
    log("Middleware #1 ... Preparing");
    req.middleware = {};
    next();
});

server.use("/about2", (req, res, next) => {
    log("Middleware #about");
    res.send(['abc', 123]);
    next();
});


server.use("/product*", (req, res, next) => {
    log("Middleware pattern*");
    res.send(`product # ${req.baseUrl} | ${req.path}`);
    next();
});

server.use("/cash", (req, res, next) => {
    let id = req.query.id;
    let amount = req.query.amount;
    if (Array.isArray(id)) {
        let response = "ids:";
        id.forEach((id) => {response += `<br> <li>${id}</li>`});
        res.send(response);
    } else if (typeof id == 'object'){
        res.send(`OBJ: ${JSON.stringify(req.query)}`);
    } else {
        res.send(`Params: ID:${id} amount:${amount}$ <br> params: ${JSON.stringify(req.query)}`);
    }
    next();
});

server.get(/.*(\.)js/, function (request, response) {
    log("Middleware pattern js hook");
    response.send(request.url)
});

server.get("/list", (req, res) => {
    log("/list get")
    res.send("<h3>Hi Express.js</h3> <a href='/about' >a</a> <a href='/about.html'> about</a>");
});

// main roots
server.get("/", root);
server.get("/about", (req, res) => {
    log("/about get")
    log(req.middleware);
    res.sendFile(__dirname + "/static/about.html");
});


server.get("/hi", (req, res) => {
    res.send("About");
    // res.send({name: "Antony"});
});


server.get("/*", (req, res) => {
    // res.redirect("/");
});

server.get("/no", (req, res) => {
    res.status(404).send("Nothing");
});

function root(req, res) {
    res.redirect("index.html");
}



server.listen(3000);
log("listen on 3000 port");

