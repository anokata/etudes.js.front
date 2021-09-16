const log = console.log;
const express = require("express");
const server = express();
const urlencodedParser = express.urlencoded({ extended: false });
const jsonParser = express.json();
const catRouter = express.Router();

server.use(express.static(__dirname + "/static"));
server.set("view engine", "pug");

server.use("/tools", (request, response) => {
    response.render("tools", {
        tools: [
            { type: "steel", name: "whrench" },
            { type: "rock", name: "hammer" },
            { type: "iron", name: "nakovalnya" },
            { type: "code", name: "bash" },
        ],
        title: "Tools List",
    });
});

server.get("/", root);

function root(req, res) {
    res.redirect("index.html");
}

server.listen(3000);
log("listen on 3000 port");
