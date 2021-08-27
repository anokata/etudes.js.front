const http = require('http');
const os = require("os");
const say = require("./say");

const hostname = '127.0.0.1';
const port = 3000;

let userName = os.userInfo().username;
console.log(userName);
console.log(`request date: ${say.date}`);
console.log(say.getMessage(userName));

const User = require("./user")
let me = new User("Penguine", 32);
me.sayHi();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

