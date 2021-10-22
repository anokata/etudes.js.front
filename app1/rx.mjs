import * as rxjs from 'rxjs';
const log = console.log;
// log(rxjs, typeof rxjs);
const observable = new rxjs.Observable(observer =>{ // subscribe fn
  observer.next(1)
  observer.next(2)
  observer.next(3)
  observer.complete()
});

const observer = {
  next: v => log(`next: ${v}`),
  error: v => log(`error: ${v}`),
  complete: () => log(`end`),
};

observable.subscribe(observer);

