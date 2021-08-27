console.log("hi from module [say]");

let currentDate = new Date();
module.exports.date = currentDate;
 
module.exports.getMessage = function(name){
    let hour = currentDate.getHours();
    name = name || "Jake";
    if(hour > 16)
        return "Good Evning, " + name;
    else if(hour > 10)
        return "Good day, dood, " + name;
    else
        return "Godd morning, " + name;
    
}

module.exports.name = "Alice";
global._soiliton = { name: "val" };
