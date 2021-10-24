// basic
const log = console.log;
console.log("Promises");
const p1 = new Promise((res, rej)=> {
  console.log("run immidetly");
  setTimeout(()=> res("result"), 1000);
});

p1.then((r) => {
  console.log(`p1 result: ${r}`);
}).then((r) => {
  log(`chain :${r}`)
  return 1;
}).then((r) => {
  log(`chain :${r}`)
  return Promise.resolve("ok");
}).then(log);

// ---
console.log("end.");

const p2 = new Promise((res, rej) => {
  log('p2 created');
  setTimeout(()=>res('a'), 100);
});

p2
  .then(v=>v+"b")
  .then(v=>v+"c")
  .finally(v=>v+"F") // no value
  .catch(v=>v+"C")
  .then(v=>v+"D")
  .then(v=>Promise.reject(v+"R"))
  .catch(v=>v+"!")
  .then(v=>v+"Z")
  .then(v=>log(`p2 in end: ${v}`));

