const log = console.log;
const express = require("express");
const server = express();
const urlencodedParser = express.urlencoded({ extended: false });
const jsonParser = express.json();
const catRouter = express.Router();

server.use(express.static(__dirname + "/static"));
server.set("view engine", "ejs");
// server.set("view options", { layout: "layouts/layout" });

server.use("/pets", (request, response) => {
    response.render("pets", {
        pets: [
            { type: "cat", name: "felix" },
            { type: "parrot", name: "vovan" },
        ],
        title: "Pets List",
    });
});

server.get("/", root);

function root(req, res) {
    res.redirect("index.html");
}

server.listen(3000);
log("listen on 3000 port");
