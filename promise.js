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


