/* import 'colors'; */

let l = console.log;
let a: number = 8;
l(String.prototype.codePointAt);
let _a:number | undefined = "c".codePointAt(0);
/* a = _a instanceof number ? _a : 0; */
l(a, _a);

function logtype(value: any): void {
    l(`|${typeof value}|=${value}`);
}

let t_bool: boolean = true;
let t_num: number = 32.2e20;
let t_str: string = "tJklz@3j0 09]";
let t_any: any = 2;
let t_arrn: number[] = [1, 12, 24];
/* let t_bigint: bigint = 220n; */
/* кортежи */
/* Enum */
/* Symbol */

logtype(t_bool);
logtype(t_num);
logtype(t_str);
logtype(t_any);
/* logtype(t_bigint); */
logtype(t_arrn);

function sumarr(a: number[]): number {
    return a.reduce((acc, x) => acc + x, 0);
}

logtype(sumarr(t_arrn));
logtype(sumarr);

l();l("*** Optional params");

function paramsopt(a: number, b?:number):void {
    l('get args:', arguments.length);
    if (b) {
        l('2:', a, b);
    } else {
        l('1:', a, b);
    }
}

function paramsinit(a: number, b:number = sumarr([1,2,3,4])):void {
    l('get args:', arguments.length);
    if (b) {
        l('2:', a, b);
    } else {
        l('1:', a, b);
    }
}

paramsopt(100);
paramsopt(100, 200);
paramsinit(100);
paramsinit(100, 200);

l("*** function type");
let f1: ()=>void;
f1 = l;
let f2: (any)=>void;
f2 = logtype;

function usefunc(value: string, func: (string) => string) {
    return func(value.toUpperCase());
}

function f1s(s:string): string {
    return `[${s.trim()}]`;
}

l(usefunc("   abc!=144   ", f1s));

type funcNumWithOneArg = (value: number) => number;
let f3: funcNumWithOneArg;
f3 = (v) => 3;
l(f3(0), f3);

f3 = (v:number):number => v*3;
l(f3(23));

let p1: Promise<number>;
let a4: number[] = [1];
let a5: Array<number> = new Array<number>(1);
l(typeof(a4), typeof(a5));

l();l("*** Union");
let u1 : number | string;
u1 = 1; u1 = "a";

function uf1(a: string|Array<string>):void {}

type ID = number | null;
let id:ID = 8;

function pSz(a?: number) {l(a)};
pSz();

l();l("*** obj type");
type User = {name: string, prof?: string, cost?: number};
let user1: User = {name: "Jonh", prof: "cleaner", cost:1e3};
l(user1, typeof(user1));
user1 = {name: "Jane"};

function objfunc(o:{}):{} { return {o:o}};
l(objfunc({x:'y'}));

l("prop IN obj");
function testObj(obj:{}): boolean {return "ok" in obj;}
l(testObj({ok:true}));

l("decompose obj");

function showObj({value, x="_", y="Y"} : {value: number, x?: string, y?: string}):void {
    console.log(`Obj: {${value}-${x}-${y}}`);
}
showObj({value: 512});

type Person = {name: string};
type Client = Person & {provider: string};
let c1: Client = {name: "default name", provider: "none"};
l(c1);

l();l("type assertion");

let char:number = <number>"Z".codePointAt(0);
l("coerced to num ", char);
let str1: number = "abcdef".slice(1,3).codePointAt(1) as number;
l("coerced to num ", str1);
