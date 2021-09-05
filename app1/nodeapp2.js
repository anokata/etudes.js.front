const fs = require("fs");
const l = console.log;

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

l("// dynamic prop name");
const propname = "somename";
let dinobj = {
	[propname]: 4,
};
log(dinobj, dinobj.somename);

l("// Const obj");
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

l("// Object.entries, Object.keys, Object,values");

function ConstructA() {
    this.method = function(){ return 2; };
    ConstructA.prototype.method2 = function() {return 3;} ;
    let privateX = 0;
    this.getX = function () {return privateX; };
    this.incX = function () {privateX++;};
    this.y = 0;
    this.getY = function () {return this.y; };
}
let a1 = new ConstructA();
let a2 = new ConstructA();
log(a1 == a2);
log(a1.method == a2.method); // diff!
log(a1.method2 == a2.method2, a1.method2()); // same
log(a1 instanceof ConstructA);
a1.incX();

ConstructA.prototype.id = Math.random();
ConstructA.prototype.toString = function() {return this.id.toString();};
log(a1);
log(a1.id, a1.getX());

function ConstructBfromA() {
    ConstructA.call(this);
    this.news = [1,2,3];
}
ConstructBfromA.prototype = Object.create(ConstructA.prototype);
ConstructA.prototype.somenew = function() {log(1, this)};
(new ConstructBfromA).somenew();
/*
 * С помощью Object.create(X.prototype) можно создать объект прототипа.
 * Нужно создавать чтобы в наследнике был свой - и изменение его не меняло родительский. Но он был бы таким же и вообщ его.
 * А в прототипе могут быть ещё определены методы,поэтому его надо брать
*/

log(a1.getX()); // 1
log(a2.getX()); // 0
let f = a1.getX;
log(f.call(a2), a2); // 1

a1.y = 12;
log(a1.getY()); // 12
log(a2.getY()); // 0
log(a1.getY.call(a2)); // 0
let f2 = a1.getY;
log(f2.call(a2)); // 0

let f3 = a1.getY.bind(a2);
a2.y = 3;
log(f3()); // 3

l("// descruct");
let [x1, x2] = Array.from(Array(3).keys()); log(x1, x2);

let name = "Jonh";
function sendMail(to, from) { log(`The mail is sent by ${from} to ${to}`); };
let mailJonh = sendMail.bind(null, name); // Carring ! Partial apply
mailJonh("Clair");
name = "Rob";
mailJonh("Historia");


l("// spread...obj");
function namepass(name, pass){
    log(`name:${name} with pass: ${pass}`);
}
// namepass(...{name: "jonh", pass: "69cDkfBn3, length:2)"});

l("// Properies");

let Machine = { cost: 1.0, name:"XT_PCv2"};
log(Object.getOwnPropertyDescriptor(Machine, "name"));
l("// Make const property");
Object.defineProperty(Machine, "config", {value: "/etc/p", writeable: false, enumerable: true});
Object.defineProperty(Machine, "name", {writeable: false, configurable:false });
Machine.config = "/new";
// Machine.name = "new";
log(Machine);
let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
log();

l("// Proxy");
const original = {name: "original", conf: "//:conf", do: function() {log(`connecting: ${this.conf}`)}};
const handler = { get: function(target, prop, receiver){
    log(`Proxing: ${target.name}@${prop}`);
    if (prop == "conf") return `protocolUCQ${target[prop]}`;
    if (typeof(target[prop])=='function') {
        log("Preparing connection...");
        return target[prop];
    }
    return target[prop];
}};
const proxyOriginal = new Proxy(original, handler);
proxyOriginal.do();

log();
const original2 = {};
const handler2 = {get:function(target, prop) {
    return "none";
}};
const proxyOriginal2 = new Proxy(original2, handler2);
log(proxyOriginal2.somepropthatnotexist);
l();

l("// Symbols");
const users = {
    [Symbol("Black")]: "writer",
    [Symbol("Black")]: "cleaner",
};
for (let user of Object.getOwnPropertySymbols(users)){
    l(user, user.description, users[user]);
}
log(Symbol.for("Black"), Symbol.for("Black") == Object.getOwnPropertySymbols(users)[0] );
l();

l("// Arrays and Strings");
const array0 = [];
array0[2] = 'some';
log(array0);
const array1 = Array.of('a', 'b', 'c');
log(array1);
const arrayofchars = Array.from("slafjeUiojvlvnkcXzowjrfj;sdfje");
log(arrayofchars);
const arrayofnums = Array.from([1,2,3], (x) => x*10);
log(arrayofnums);
const arrayofqubesby10 = Array.from(Array(10), (_, i) => {let x=i+2; return x*x*x});
log(arrayofqubesby10);
arrayofqubesby10.sort((x, y) => y - x);
log(arrayofqubesby10);
// ...
log(...arrayofqubesby10);
const arrayAll = new Array(...array1, ...arrayofnums); 
log(...arrayAll);
log([...array1, 'A']);
const partCopy = arrayofqubesby10.slice(2,6);
partCopy[1] /= 100;
partCopy.unshift(0.1);
log(partCopy);
log(partCopy.join("-"));

function myReverseInPlace(array){
    let len = array.length - 1;
    for (let i = 0; i < len/2; i++) {
        [array[i], array[len-i]] = [array[len-i], array[i]];
    }
    return array;
}

function myReverseNew(array){
    let result = [];
    for (let elem in array) {
        result.unshift(elem);
    }
    return result;
}

const numbers10 = Array.from(Array(10).keys());
log(myReverseNew(numbers10).join("_"));
myReverseInPlace(numbers10);
log(numbers10.join(","));
log(numbers10);

let testString = [];
// For Of!
for(let ch of "testString") {
    testString.push(String.fromCharCode(ch.charCodeAt(0)-1).toUpperCase());
}
log(testString.join(""));
// For In X
testString = [];
for(let i in "testString") {
    testString.push(String.fromCharCode(i.charCodeAt(0)-1).toUpperCase());
}
log(testString.join(""));
l();
// includes every some
log(arrayofqubesby10.every((x) => x > 10));
log(arrayofqubesby10.some((x) => x > 10));
log(arrayofqubesby10.filter((x) => x > 10 && x < 100));

l();
log("a".repeat(10));
let numstr = Array.from(Array(10).keys()).join("");
log(numstr.slice(-2));
// function ord(strChar) { return strChar.charCodeAt(0); }
ord = (s) => s.charCodeAt(0);
// function chr(i) { return String.fromCharCode(i); }
chr = String.fromCharCode;
log(chr(72), ord("A"), chr(ord("A")+1));
log(numstr.padStart(16,"+").padEnd(24,"-"));
log("".padStart(24,"*"));
log("'".repeat(24));
l();

l('// Template func');
function templateCheck(parts, ...args) {
    l(parts);
    l(args);
    return parts.map((s) => s.toUpperCase()).join("");
}

l(templateCheck`abc ${name} def ${obj1.name} ghi.`);

let _zip = rows=>rows[0].map((_,c)=>rows.map(row=>row[c]))
let zip = function (...args) { return _zip(args)};
l(zip([1,2], ['a','b']))
l();

l("Classes".padStart(10, "*"));
class A {};
l(A);
l(new A());

l();l("*** get set");
l();l("*** Exeptions");
const pen = {
    model:"Binog",
    partion: "XC-25",
    get name (){
        l("... property name access...");
        return `[Pen]: ${this.model}(${this.partion})`;
    },
    set name (value){
        if (typeof value != 'string') {
            l("Error. Name of pen must be string.");
            throw new Error("Error. Name of pen must be string.");
            return;
        }
        l("Error. Can not change name of pen");
    }
};

l(pen.name);
try {
    pen.name = 0;
} catch (err) {
    l(err.name, err.message);
}
pen.name = "0";

l("------------- number");
let num1 = 1e4+1e-4;
num1 = 0x123;
num1 = Math.floor(Math.random()*1e8);
log(`${num1} = ${num1.toString(36)}`);
log(12839123891203091283018..toString(36));
log((123.456.toFixed(1)));
num1 = +(0.1+0.2).toFixed(1);
log(num1);
parseInt("abba", 36);

l();l();
l("я".codePointAt(0));
l(String.fromCodePoint(1000));

function ucFirst(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
l(ucFirst("jonh"));

l();l("---- Proto");
let LivingEntity = { health: 100, step() {this.health--; return this.health}, };
let BasicCell = { size: "1nm", };
BasicCell.__proto__ = LivingEntity;
log(BasicCell.health);
log(BasicCell.step());

let cellWithMitochondria = {
    __proto__: BasicCell,
    mitos: [{energy: 42}],
};

log(cellWithMitochondria.step()); // 98 !
