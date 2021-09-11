// import * as colors from 'colors';
const log = console.log;
log("==start==");
let prices = [0.1, 0.02, 0.93];
log(prices);
let doublePrices = Array.from("127578954892").map((v) => (+v) * 10);
log(doublePrices);
doublePrices = doublePrices.map((v) => v * 2.02);
log(doublePrices);
let staticPrices = doublePrices.map((v) => +(v / 34).toFixed(2));
log(staticPrices.join(" "));
let [head, ...tail] = staticPrices;
log(head);
log();
log("Tupels...");
let c1 = [1, 8.3];
let tup1 = ["abc", { ko: 2 }];
c1[0] *= 0.2;
log(c1, tup1);
let tup2 = [];
let tup3 = ["abc", "__3"];
function rePair(a, b) {
    return [a[0] + a[1], b[0] + b[1]];
}
let tup4 = rePair(c1, tup3);
log(tup4, tup2);
let tup5 = ["A", "__3"];
let tup6 = ["B"];
tup5 = tup6;
tup6 = tup5;
log(tup5, tup6);
let flags = ["FLAGS", true, false];
let [h, ...t] = flags;
log(flags, h, t);
log();
function sumSub(base, ...xs) {
    let sum = xs.reduce((acc, x) => acc = (acc + x) / base, 0);
    let sub = xs.reduce((acc, x) => acc = (acc - x) * base, 0);
    return [sum, sub];
}
log(sumSub(0.1, 1, 2, 3, 4, 5, 6, 7));
const ys = [8, 8, 2, 500];
log(sumSub(...ys));
log();
var Drawables;
(function (Drawables) {
    Drawables[Drawables["Pen"] = 8] = "Pen";
    Drawables[Drawables["Pencil"] = 9] = "Pencil";
    Drawables[Drawables["Marker"] = 10] = "Marker";
    Drawables[Drawables["Brush"] = 11] = "Brush";
    Drawables[Drawables["FeltTipPen"] = 12] = "FeltTipPen";
    Drawables[Drawables["Liner"] = 13] = "Liner";
})(Drawables || (Drawables = {}));
;
let tool = Drawables.Brush;
log(Drawables);
log(tool, Drawables[tool]);
var AgentNames;
(function (AgentNames) {
    AgentNames["A"] = "Antony";
    AgentNames["J"] = "James";
    AgentNames["T"] = "Target";
})(AgentNames || (AgentNames = {}));
;
const a008 = AgentNames.J;
log(a008);
log();
log("*** OOP");
class Empty {
}
;
let voiding = new Empty();
log(voiding);
class UnderSpace {
    constructor() {
        UnderSpace.incount();
    }
    static get count() { return UnderSpace._count; }
    static incount() { UnderSpace._count++; }
}
UnderSpace._count = 0;
class Space extends UnderSpace {
    constructor(volume = 1e-3, tag = "-") {
        super();
        this.volume = 1e-3;
        this.tag = "_";
        this._protection = false;
        this.volume = volume;
        this.tag = tag;
    }
    toString() {
        return `...[${this.volume}]@${this.tag}`;
    }
    isProtected() { return this._protection; }
    protect() { this._protection = true; }
    getTag() { return this.tag; }
}
log(new Space(), new Space().getTag());
log(`${new Space(0.002)}`);
let s1 = new Space();
class DustSpace extends Space {
    constructor(dustAmount = 0.1) {
        super(2e3, "D");
        this._dust = dustAmount;
    }
    toString() { return `Dust.${super.toString()}`; }
}
let s2 = new DustSpace();
log(`${new DustSpace(1.302)}`);
log(s1, s2);
s1 = s2;
//s2 = s1; //no
class PSpace extends Space {
    constructor(p) {
        super();
        this.p = p;
    }
    toString() { return JSON.stringify(this.p); }
}
log(`${new PSpace({ n: 2 })}`);
log('space created: ', PSpace.count);
log();
log("*** Interfaces");
let catWalker = { walk(d) { return true; } };
log(catWalker.walk(1));
class Cat {
    walk(d) { return d > 10; }
    speak() { log("cat"); }
}
class Dox {
    walk(d) { return d < 9; }
    speak() { log("dox"); }
    doku() { }
}
let cat1 = new Cat();
let cat2 = new Cat();
let dox1 = new Dox();
let dox2 = new Dox();
cat1 = cat2; // ok
// cat2 = cat1; // no
cat1 = dox2;
// cat2 = dox1; // no
cat2 = dox2;
cat2.speak();
class Crow {
    constructor() {
        this.speed = 10;
    }
    done() { log("kar!", this.speed); }
}
new Crow().done();
class MegaCrow {
    constructor() {
        this.speed = 1e2;
    }
    done() { log("Mega kar!", this.speed, this.megadone()); }
    megadone() { return true; }
}
new MegaCrow().done();
log("*Function interface");
let foodMaker = function (a) {
    return {
        count: a * 10,
        kind: "Food",
        info: "coil",
    };
};
log(foodMaker(21));
log("*Array Interface");
let tools = { "some": "knife" };
log(tools);
log(typeof (s2), s2 instanceof Space);
log();
log("*** <Generics>");
function genX(x) { return x; }
log(genX(8));
log(genX("a"));
function mapT(...xs) {
    return xs.reduce((acc, x) => `${acc}.${x}.`, "");
}
log(mapT(6, 4, 2, 7));
function titleGlue(a, b) {
    return `${a.title}-${b.title}`;
}
class User {
    constructor(title) {
        this.title = title;
    }
}
let u1 = new User("Konna ni sekai");
let u2 = new User("Umareta shojo");
log(titleGlue(u1, u2));
log();
log("*** Namespaces!");
var NS1;
(function (NS1) {
    NS1.Value = +(Math.random() * 1e5).toFixed();
})(NS1 || (NS1 = {}));
log(NS1.Value);
