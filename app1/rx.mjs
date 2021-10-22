import * as rxjs from 'rxjs';
const log = console.log;
// log(rxjs, typeof rxjs);
const observ1 = new rxjs.Observable(observer =>{ // subscribe fn
  observer.next(1)
  observer.next(2)
  observer.next(3)
  observer.complete()
});

