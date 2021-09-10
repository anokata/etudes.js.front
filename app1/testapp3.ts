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

class Space {
    volume: number = 1e-3; 
    tag: string = "_";

	toString(): string {
		return `...[${this.volume}]@${this.tag}`;
	}
}

log(new Space(), new Space().tag);
log(`${ new Space() }`);


