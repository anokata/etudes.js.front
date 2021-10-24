import * as rxjs from "rxjs";
const log = console.log;
const observable = new rxjs.Observable((observer) => {
  // subscribe fn
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
});

const observer = {
  next: (v) => log(`next: ${v}`),
  error: (v) => log(`error: ${v}`),
  complete: () => log(`end`),
};

observable.subscribe(observer);

const timer = new rxjs.Observable((observer) => {
  let c = 0;
  const timerID = setInterval(() => {
    observer.next(c);
    c++;
  }, 100);

  return () => clearInterval(timerID);
});

const subscription = timer.subscribe({ next: log });
log(`after timer`);
setTimeout(() => subscription.unsubscribe(), 1000);

// simpler creation
const range1_5 = rxjs.of(1,2,3,4,5);
rxjs.of("hi", "event").subscribe(log);

const logFull = (...args) => {console.log(`Get Value: ${args[0]} and ${args}`)};

rxjs.from("abcdefg").subscribe(logFull);

// rxjs.interval(50).subscribe(log);
// pipe map
rxjs.from("abcdefg").pipe(rxjs.map(value=>value.toUpperCase())).subscribe(log);
rxjs.of(1,3,5).pipe(rxjs.map(value=>value*202)).subscribe(log);
function isPrime(n) {
  if (n <= 1) return false;
  if (n % 2 === 0) return false;
  if (n % 3 === 0) return false;
  const dv = Math.round(Math.sqrt(n));
  for (let divisor = 5; divisor < dv; divisor++) {
    if (n % divisor === 0) return false;
  }
  return true;
}
log("primes:");
rxjs.from(Array.from(Array(100).fill(null).keys()))
  .pipe(rxjs.filter(isPrime))
  .subscribe(log);


rxjs.timer(200).subscribe((v)=>log(`timer 200 ${v}`));

