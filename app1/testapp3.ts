const log:(...a)=>void =console.log;
log("==start==");
type Numbers = number[];
let prices: Numbers = [0.1,0.02,0.93];
log(prices);

let doublePrices: Array<number> = Array.from("127578954892").map((v)=>(+v)*10);
log(doublePrices);
doublePrices = doublePrices.map((v)=>v*2.02);
log(doublePrices);

let staticPrices: readonly number[] = doublePrices.map((v) => +(v/34).toFixed(2));
log(staticPrices.join(" "));

const [head, ...tail] = staticPrices;
log(head);
log();log("Tupels...");



