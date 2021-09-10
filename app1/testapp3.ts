// import * as colors from 'colors';

const log:(...a)=>void =console.log;
log("==start==");
type Numbers = number[];
let prices: Numbers = [0.1,0.02,0.93];
log(prices);

let doublePrices: Array<number> = Array.from("127578954892").map((v)=>(+v)*10);
log(doublePrices);
doublePrices = doublePrices.map((v)=>v*2.02);
log(doublePrices);

let staticPrices: readonly number[] = doublePrices.map((v) => +(v/34).toFixed(2));
log(staticPrices.join(" "));

let [head, ...tail] = staticPrices;
log(head);
log();log("Tupels...");

type ComplexNumber = [real:number, img:number];
let c1: ComplexNumber = [1,8.3];
let tup1: [string, {}] = ["abc", {ko: 2}];
c1[0] *=0.2;
log(c1, tup1);

let tup2: [] = [];
let tup3: [string, string] = ["abc", "__3"];

function rePair(a:[number, number], b:[string, string]): [number, string] {
    return [a[0]+a[1], b[0]+b[1]];
}

let tup4 = rePair(c1, tup3);
log(tup4, tup2);

let tup5: [string, string?] = ["A", "__3"];
let tup6: [string, string?] = ["B"];
tup5 = tup6;
tup6 = tup5;
log(tup5, tup6);

let flags: [string, ...boolean[]] = ["FLAGS", true, false];
let [h, ...t] = flags;
log(flags, h, t);

log();

function sumSub(base: number, ...xs:number[]): [number, number] {
    let sum = xs.reduce((acc, x) => acc = (acc+x)/base, 0);
    let sub = xs.reduce((acc, x) => acc = (acc-x)*base, 0);
    return [sum, sub];
}

log(sumSub(0.1, 1,2,3,4,5,6,7));

const ys = [8,8,2,500] as const;
log(sumSub(...ys));
log();

enum Drawables {Pen=8, Pencil, Marker, Brush, FeltTipPen, Liner};
let tool:Drawables = Drawables.Brush;
log(Drawables);
log(tool, Drawables[tool]);

enum AgentNames {A= "Antony", J="James", T="Target"};
const a008: AgentNames = AgentNames.J;
log(a008);
log(); log("*** OOP");

class Empty {};

let voiding: Empty = new Empty();
log(voiding);

abstract class UnderSpace {
    abstract toString(): void;
    private static _count:number = 0;
    constructor(){
        UnderSpace.incount();
    }
    public static get count():number { return UnderSpace._count; }
    public static incount():void { UnderSpace._count++; }
}

class Space extends UnderSpace {
    protected volume: number = 1e-3; 
    protected readonly tag: string = "_";
    protected _protection: boolean = false;

    constructor(volume:number = 1e-3, tag:string = "-") {
        super();
        this.volume = volume;
        this.tag = tag;
    }

	toString(): string {
		return `...[${this.volume}]@${this.tag}`;
	}

    protected isProtected(){return this._protection;}
    protected protect(){this._protection = true;}
    public getTag() { return this.tag; }
}

log(new Space(), new Space().getTag());
log(`${ new Space(0.002) }`);
let s1: UnderSpace = new Space();

class DustSpace extends Space {
    private _dust: number;

    constructor(dustAmount: number = 0.1) {
        super(2e3, "D");
        this._dust = dustAmount;
    }

    toString() { return `Dust.${super.toString()}`; }
}

let s2: Space = new DustSpace();
log(`${ new DustSpace(1.302) }`);
log(s1, s2);
s1 = s2; 
//s2 = s1; //no

class PSpace extends Space {

    constructor (public p:{}) {
        super();
    }

    toString() { return JSON.stringify(this.p); }
}

log(`${new PSpace({n:2})}`);
log('space created: ', PSpace.count);

log();log("*** Interfaces");

interface IWalkable {
    walk(distance: number): boolean;
}

let catWalker :IWalkable = {walk(d) {return true}};
log(catWalker.walk(1));

class Cat implements IWalkable {
    walk(d: number) { return d > 10; }
    speak() { log("cat"); }
}

class Dox implements IWalkable {
    walk(d: number) { return d < 9; }
    speak() { log("dox"); }
    doku():void {}
}

let cat1: IWalkable = new Cat();
let cat2: Cat = new Cat();
let dox1: IWalkable = new Dox();
let dox2: Dox = new Dox();
cat1 = cat2; // ok
// cat2 = cat1; // no
cat1 = dox2;
// cat2 = dox1; // no
cat2 = dox2; 
cat2.speak();
// extend interface:
interface IDoner {
    done():void;
}
interface IDoner {
    speed: number;
}

class Crow implements IDoner {
    public speed: number = 10;
    done() {log("kar!", this.speed)}
}
new Crow().done();

interface IMeganer extends IDoner {
    megadone(): boolean;
}

class MegaCrow implements IMeganer {
    public speed: number = 1e2;
    done() {log("Mega kar!", this.speed, this.megadone())}
    megadone(): boolean {return true}
}

new MegaCrow().done();

log("*Function interface")
interface ThingsMaker {
    (amount: number):{count: number, kind: string};
}

let foodMaker: ThingsMaker = function(a: number) {return {
    count: a*10,
    kind: "Food",
    info: "coil",
}};
log(foodMaker(21));

log("*Array Interface");

interface StoSArray {
    [index: string]:string;
}

let tools: StoSArray = {"some": "knife"};
log(tools);
log(typeof(s2), s2 instanceof Space);

log();log("*** <Generics>");

function genX<X>(x:X):X { return x; }
log(genX<number>(8));
log(genX<string>("a"));

function mapT<T>(...xs: T[]):string {
    return xs.reduce((acc, x)=>`${acc}.${x}.`, "");
}

log(mapT<number>(6,4,2,7));

function titleGlue<T extends {title: string}>(a:T, b:T):string {
    return `${a.title}-${b.title}`;
}
class User {
    constructor(public title:string) {}
}
let u1 = new User("Konna ni sekai");
let u2 = new User("Umareta shojo");
log(titleGlue(u1, u2));

