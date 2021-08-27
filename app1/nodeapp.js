const http = require('http');
const os = require("os");
const say = require("./say");

const hostname = '127.0.0.1';
const port = 3000;

let userName = os.userInfo().username;
console.log(userName);
console.log(`request date: ${say.date}`);
console.log(say.getMessage(userName));

const User = require("./user");
let me = new User("Penguine", 32);
me.sayHi();
console.log(`Hello ${say.name}`); 

const Mod2 = require("./mod2");
Mod2.start();
console.log(global._soiliton);


function info(){
    let nodePath = process.argv[0];
    let appPath = process.argv[1];
    let name = process.argv[2];
     
    console.log();
    console.log("nodePath: " + nodePath);
    console.log("appPath: " + appPath);
    console.log("name: " + name);
}
info();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

