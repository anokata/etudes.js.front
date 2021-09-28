(async () => {
console.log("async script started");

async function work(ms) {
  await new Promise((res, rej) => setTimeout(() => {
    console.log("done");
    res();
    }, ms));
}

work(1000);

await new Promise((res, rej) => setTimeout(() => {
  console.log("done in async");
  res();
  }, 500));

console.log("async script ended.");

})();
