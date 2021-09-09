log=console.log;
let m = new Map();
log(m);
m.set("n1", {c:4});
m.set({},0);
m.set(1,1).set("1",'c');
log(m);
for (let el of m) log(el);

let obj = Object.fromEntries(m);
log(obj);

let o = {name: 'jane', age: 35};
m = new Map(Object.entries(o));
log(m);
log();

let setTest = new Set(m.keys());
setTest.add({});
setTest.add(0);
setTest.add({});
setTest.add(0);
setTest.add("");
setTest.add({name: 'x'});
log(setTest);
let str;
setTest.forEach((val) => str += val);
log(str);

function unique(arr) {
    let uniq = new Set(arr);
    return Array.from(uniq.values());
}

let values = ["Noez", "Monica", "Noez", "Monica", "Monica", "Monica", "Noez", "Noez", ":-)" ];

log( unique(values) );

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
