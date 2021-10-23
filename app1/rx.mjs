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


