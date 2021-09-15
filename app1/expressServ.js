const log = console.log;
const express = require("express");
const hbs = require("hbs");
const server = express();
const expressHbs = require("express-handlebars");
// log(server);
log(__dirname);
// middlewares

server.use(express.static(__dirname + "/static"));
server.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
server.engine("hbs", expressHbs( {
        layoutsDir: "views/layouts", 
        defaultLayout: "layout",
        extname: "hbs"
}));
// server.use(express.static('static'));

const urlencodedParser = express.urlencoded({extended: false});
const jsonParser = express.json();

// create router
const catRouter = express.Router();

catRouter.use("/color", (req, res) => {
    res.render("catcolor.hbs");
});


catRouter.use("/type", (req, res) => {
    res.send("type");
});

catRouter.use("/name", (req, res) => {
    res.send("namecolor");
});

server.use("/cat", catRouter);

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


server.use("/product2/:prodID", (req, res, next) => {
    log("Middleware pattern* product");
    log("request param: ", req.params["prodID"]);
    res.send(`product # ${req.baseUrl} | ${req.path} | ${req.params["prodID"]}`);
});


server.use("/product/:prodID/tag/:tag", (req, res, next) => {
    log("Middleware pattern* product/tag");
    let id = req.params["prodID"];
    let tag = req.params["tag"];
    let result = {result: `Product ${id} / [${tag}]`};
    res.render("product.hbs", result);
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

// templates
server.use("/con", (request, response) => {
    response.render("contact.hbs", {
        title: "Kirille",
        emailsVisible: true,
        emails: ["ano@none.com", "kata@none.com"],
        phone: "+1234567890"
    });
});

server.use("/home", (request, response) => {
    response.render("home.hbs");
});
server.use("/x/home", (request, response) => {
    response.render("home.hbs");
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

server.post("/user", jsonParser, function (request, response) {
    console.log(request.body);
    if(!request.body) return response.sendStatus(400);
    response.json(request.body);
});

server.listen(3000);
log("listen on 3000 port");

