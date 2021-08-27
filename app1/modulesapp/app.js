const express = require("express");
const numeral = require("numeral");
const app = express();
 
app.get("/", function(request, response){
    let msg = `Hi Dude, I am node.js Express.js and numeral: ${numeral(901283123).format("0a.0")}`;
    response.end(msg);
});

app.listen(3000);
