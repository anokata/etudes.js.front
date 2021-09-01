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

let inplaceobj = new (function () { this.a=8 });
console.log(inplaceobj);

function Clickable() {
	this.clicks = 0;
}

function ClickIcon() {
	Clickable.call(this);
	this.ico = "";
}

console.log(new ClickIcon());

function sumall() {
	let sum = 0;
	for (const x of arguments)
		sum += x;
	return sum;
}

console.log(sumall(1,2,3,2));

let moduleOne = (function() {

	let privateX = 0.11;
	function hi() {
		console.log(`hi from hi with ${privateX}`);
	}
	return {
		hi: hi,
		inc: () => privateX += 0.21,
	}
})();
console.log(moduleOne);
moduleOne.hi();
moduleOne.inc();
moduleOne.hi();

log = function () { let name = arguments[0]?.name; console.log(name?name:"", ...arguments); }
logs = (...a) => { console.log(...a); }

log(hoi);
var hoi = "undef";
logs("a"+ (((()=>{})()==(()=>{})())+"")[0]);

let obj = {hoi}; // {hoi: "undef"}
log(obj);
let objM = { make() { log("make it"); return this; }, "prop 0": "x", };
objM["prop a"] = 4;
log(objM.make());

// dynamic prop name
const propname = "somename";
let dinobj = {
	[propname]: 4,
};
log(dinobj, dinobj.somename);

// Const obj
const staticObj = { prop: 3.14, name:"staticObj" };
Object.freeze(staticObj);
staticObj.prop = 0;
log(staticObj);
const copy = {...staticObj};
copy.name = "copy";
staticObj.prop += 10;
log(copy);
log('prop' in copy);
log(copy.hasOwnProperty('name'))

function showObjProps(obj) {
    for (const prop in obj) {
        log(`${prop} : ${obj[prop]}`)
    }
}

showObjProps(moduleOne);

// Object.entries, Object.keys, Object,values

function ConstructA() {
    this.method = function(){ return 2; };
    ConstructA.prototype.method2 = function() {return 3;} ;
}
let a1 = new ConstructA();
let a2 = new ConstructA();
log(a1 == a2);
log(a1.method == a2.method); // diff!
log(a1.method2 == a2.method2, a1.method2()); // same
log(a1 instanceof ConstructA);

ConstructA.prototype.id = Math.random();
ConstructA.prototype.toString = function() {return this.id.toString();};
log(a1);
log(a1.id);
