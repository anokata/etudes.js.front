const colors = require('colors');
const l = console.log;

// async == return Promise.resolve
async function asyncF1() { return 74; }
l(asyncF1());  // Promise
asyncF1().then((val) => l(`asyncF1 complete with ${val}`.blue));

async function asyncF2() {
    l("[F2] start F2");
    let p1 = new Promise((resolve, reject) => {
        setTimeout(()=> resolve("timeout: done F2"), 500);
    });
    let result = await p1;
    l("[F2] after await, in F2, result:".green, result);
    l("[F2] end F2");
}

l("[G] before F2");
asyncF2();
l("[G] after F2");

l("anon async");

(async () =>{
    await new Promise((r)=> setTimeout(()=>r(), 200));
    l("anon in".yellow);
})();

l("[G] end. PromiseTime!".red);

async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return 10;
}

function f() {
    wait().then((r) => l(r));
}

f();


