/* jshint node: true */
"use strict";

Promise.prototype.myAll = function (promises) {
  return new Promise((res, rej) => { // first: return new promise
    let promisesComplete = new Array(promises.length).fill(false);
    console.log(promisesComplete);
    // for all promises set then and errror callbacks
    promises.forEach((p, i) => {
      p.then((v) => {
        promisesComplete[i] = true;
        console.log(promisesComplete, v);
        if (promisesComplete.every(f => f)) res("Done");
      }).catch((v) => rej(`Fail ${v}`));
    });
  });
};

console.log("my promise all implementation.");

const p1 = new Promise((res, rej) => res("A"));
const p2 = new Promise((res, rej) => res("B"));
const p3 = new Promise((res, rej) => setTimeout(() => res("C"), 100));
p1.myAll([p1, p2, p3]).then(console.log).catch(console.log);
// p3.then(console.log);
