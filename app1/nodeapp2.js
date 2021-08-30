const fs = require("fs");

console.log("start");

function displaysome(d, callback) {
    var randInt = Math.random() * (10 - 1) + 1;
    var err =
        randInt > 8 ? new Error("Ошибка выполнения. randInt больше 8") : null;

    setTimeout(function () {
        callback(err, d);
    }, 0);
}

displaysome("Обработка данных...", function (err, data) {
    // if(err) throw err;
    console.log(data);
});

let a = Array.from(Array(10).keys());
let b = a.map((x) => x * x);

console.log(`end. ${a}\n${b}`);
console.log();

function sayone(a) {
    console.log(`A:${a} this: ${this} ${Reflect.ownKeys(this).length} ${this.name}`);
}

sayone('f');

let obj1 = {
    name: "obj1",
    say: sayone,
    saytwo(){}
}

obj1.say('o');

function Closure(init) {
    let x = init || 0;
    this.get = function(){return x};
    this.set = function(newX){x=newX};
}

let c1 = new Closure(2);
let c2 = new Closure(8);
console.log(c1.get());
console.log(c2.get());
c1.set(123);
c2.set(3);
console.log(c1.get());
console.log(c2.get());
