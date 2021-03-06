log = console.log;
log = spyDecorator(log);
let m = new Map();
log(m);
m.set("n1", { c: 4 });
m.set({}, 0);
m.set(1, 1).set("1", "c");
log(m);
for (let el of m) log(el);

let obj = Object.fromEntries(m);
log(obj);

let o = { name: "jane", age: 35 };
m = new Map(Object.entries(o));
log(m);
log();

let setTest = new Set(m.keys());
setTest.add({});
setTest.add(0);
setTest.add({});
setTest.add(0);
setTest.add("");
setTest.add({ name: "x" });
log(setTest);
let str;
setTest.forEach((val) => (str += val));
log(str);

function unique(arr) {
    let uniq = new Set(arr);
    return Array.from(uniq.values());
}

let values = [
    "Noez",
    "Monica",
    "Noez",
    "Monica",
    "Monica",
    "Monica",
    "Noez",
    "Noez",
    ":-)",
];

log(unique(values));

let obj2 = {
    a: 10,
    c: 12,
    d: 16,
    e: 14,
};

obj2 = Object.fromEntries(
    Object.entries(obj2).map(([key, value]) => [key, value / 100])
);
log(obj2);

log("*** Decorators");

function basicWork(x, y) {
    return `The ${x} is doing basic work: ${y}`;
}

function stringFunParDecorator(fun, parA, parB) {
    return function (...args) {
        return `${parA}${fun(...args)}${parB}`;
    };
}
// decorating
basicWork = stringFunParDecorator(basicWork, "(", ")");
basicWork = stringFunParDecorator(basicWork, "[", "]");
basicWork = stringFunParDecorator(basicWork, "-", "-");
log(basicWork("Jong", "Typing code"));

let workingObj = {
    arg: "work",
    work(a){
        let x = a ?? 0;
        return `do:${this.arg}-${x}`;
    }
}

let tw = {arg: "none"};
let methodWork = workingObj.work;

log(workingObj.work());
log(methodWork.call(tw, 0));

function stringMethodPDecorator(method, p) {
    return function (...args) {
        return `${p.toLowerCase()}${method.call(this, ...args)}${p.toUpperCase()}`;
        // method.apply(this, args)
    };
}

workingObj.work = stringMethodPDecorator(workingObj.work, 'j');
log(workingObj.work(2));

// method borroing
log(String.prototype.toLowerCase.call("DOM"));
log([].join.call(["D", "M", "Z"], "-"));
log(Array.prototype.join.call("greatings!".split(""), "-"));

function spyDecorator(func) {

    function nfunc(...args) {
        nfunc.calls.push([nfunc.calls.length+1,...args]);
        func.apply(this, args);
    }
    nfunc.calls = [];
    return nfunc;
}
log(1,2,3);

log.calls.forEach((e) => {
    let [n, arg1, ...args] = e;
    log(`call# ${n}, with ${e.length-1} args: [${arg1}...]`);
});

log("*** Iterators, for of");

let range = {
    from: 10,
    to: 20,
    [Symbol.iterator]: function() {
        // call once in forOf, return iterator
        log(">Enter in Symbol.iterator");
        // make iterator obj
        return {
            current: this.from,
            last: this.to,
            next(){
                if (this.current <= this.last) return {done: false, value: this.current++ };
                return {done: true};
            }
        }
    }
}

for (let i of range) log(`#${i}`);

let randomGen = {
    seed: 20,
    [Symbol.iterator]: function() {
        return {
            current: this.seed,
            next(){
                this.current = (134775813 * this.current + 1) % (2**32);
                return {done: false, value: this.current };
            }
        }
    }
}

let srand = "";
for (let r of randomGen) {log(r); if (srand.length > 100) break; srand += r.toString(36)}
log(srand);

for (let c of "string is iterable") 
    process.stdout.write(`(${c})`);

log();
log("Implicit iterate:");

let retstr = "ReTuRn?";
log(Object.getOwnPropertySymbols(retstr.__proto__));
// log(Object.getOwnPropertyNames(retstr));
let iterator = retstr[Symbol.iterator]();
log(iterator);
// iterator = iterator();
// log(iterator);

while (true) {
    let current = iterator.next();
    if (current.done) break;
    log(current, `-> ${current.value}`);
} 

log(Array.from(range));
log(Array.from(range, n => n*10+n));

let pseudoArray = { 0: 'c', 1:'y', 2:'b', length: 3};
log(Array.from(pseudoArray).join("-"));


