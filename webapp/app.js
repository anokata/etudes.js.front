const express = require("express");
const fs = require("fs");
log = console.log;    
const app = express();
const jsonParser = express.json();
  
app.use(express.static(__dirname + "/public"));
const filePath = "cats.json";

app.get("/api/cats", function(req, res){
    const content = fs.readFileSync(filePath,"utf8");
    const cats = JSON.parse(content);
    res.send(cats);
});

app.get("/api/cats/:id", function(req, res){
    const id = req.params.id;
    const content = fs.readFileSync(filePath, "utf8");
    const cats = JSON.parse(content);
    let cat = cats.find(c => c.id == id);

    if(cat){
        res.send(cat);
    } else {
        res.status(404).send();
    }
});

app.post("/api/cats", jsonParser, function (req, res) {
    if(!req.body) return res.sendStatus(400);
      
    const catName = req.body.name;
    const catAge = req.body.age;
    let cat = {name: catName, age: catAge};
    log(req.body);
      
    let data = fs.readFileSync(filePath, "utf8");
    let cats = JSON.parse(data);
      
    const id = Math.max.apply(Math, cats.map(o => o.id));
    cat.id = id + 1;
    log(cats, id);
    cats.push(cat);
    data = JSON.stringify(cats);
    fs.writeFileSync("cats.json", data);
    res.send(cat);
});

app.delete("/api/cats/:id", function(req, res){
    const id = req.params.id;
    let data = fs.readFileSync(filePath, "utf8");
    let cats = JSON.parse(data);
    let index = cats.findIndex(c => c.id == id);
    if(index > -1){
        const cat = cats.splice(index, 1)[0];
        data = JSON.stringify(cats);
        fs.writeFileSync("cats.json", data);
        res.send(cat);
    } else {
        res.status(404).send();
    }
});

app.put("/api/cats", jsonParser, function(req, res){
    if(!req.body) return res.sendStatus(400);

    const catId = req.body.id;
    const catName = req.body.name;
    const catAge = req.body.age;
      
    let data = fs.readFileSync(filePath, "utf8");
    const cats = JSON.parse(data);
    let cat = cats.find(c => c.id == catId);

    if(cat){
        cat.age = catAge;
        cat.name = catName;
        data = JSON.stringify(cats);
        fs.writeFileSync("cats.json", data);
        res.send(cat);
    } else {
        res.status(404).send(cat);
    }
});
   
app.use("/", (req, res) => {
    res.redirect("/client.html");
});

app.listen(3000, function(){
    console.log("serving on 3000...");
});
