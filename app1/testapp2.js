/* import 'colors'; */
let l = console.log;
let a = 8;
a = "c".codePointAt(0);
l(a);
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
