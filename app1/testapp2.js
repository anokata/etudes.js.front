/* import 'colors'; */
let l = console.log;
let a = 8;
l(String.prototype.codePointAt);
let _a = "c".codePointAt(0);
/* a = _a instanceof number ? _a : 0; */
l(a, _a);
function logtype(value) {
    l(`|${typeof value}|=${value}`);
}
let t_bool = true;
let t_num = 32.2e20;
let t_str = "tJklz@3j0 09]";
let t_any = 2;
let t_arrn = [1, 12, 24];
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
function sumarr(a) {
    return a.reduce((acc, x) => acc + x, 0);
}
logtype(sumarr(t_arrn));
logtype(sumarr);
l();
l("*** Optional params");
function paramsopt(a, b) {
    l('get args:', arguments.length);
    if (b) {
        l('2:', a, b);
    }
    else {
        l('1:', a, b);
    }
}
function paramsinit(a, b = sumarr([1, 2, 3, 4])) {
    l('get args:', arguments.length);
    if (b) {
        l('2:', a, b);
    }
    else {
        l('1:', a, b);
    }
}
paramsopt(100);
paramsopt(100, 200);
paramsinit(100);
paramsinit(100, 200);
l("*** function type");
let f1;
f1 = l;
let f2;
f2 = logtype;
function usefunc(value, func) {
    return func(value.toUpperCase());
}
function f1s(s) {
    return `[${s.trim()}]`;
}
l(usefunc("   abc!=144   ", f1s));
let f3;
f3 = (v) => 3;
l(f3(0), f3);
f3 = (v) => v * 3;
l(f3(23));
let p1;
let a4 = [1];
let a5 = new Array(1);
l(typeof (a4), typeof (a5));
l();
l("*** Union");
let u1;
u1 = 1;
u1 = "a";
function uf1(a) { }
let id = 8;
function pSz(a) { l(a); }
;
pSz();
l();
l("*** obj type");
let user1 = { name: "Jonh", prof: "cleaner", cost: 1e3 };
l(user1, typeof (user1));
user1 = { name: "Jane" };
function objfunc(o) { return { o: o }; }
;
l(objfunc({ x: 'y' }));
l("prop IN obj");
function testObj(obj) { return "ok" in obj; }
l(testObj({ ok: true }));
l("decompose obj");
function showObj({ value, x = "_", y = "Y" }) {
    console.log(`Obj: {${value}-${x}-${y}}`);
}
showObj({ value: 512 });
