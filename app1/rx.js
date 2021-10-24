"use strict";
const log = console.log;
const input = document.querySelector("input");
const ul = document.querySelector("ul");

function emulateRequest() {
  return rxjs.timer(100).pipe(rxjs.operators.mapTo("{done}"));
}

// rxjs hello world
rxjs
  .of("rxjs")
  .pipe(rxjs.operators.map((v) => `hi ${v}!`))
  .subscribe(log);

// github api
const getUsersRepsFromAPI = (username) => {
  const url = `https://api.github.com/users/${username}/repos`;

  return fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error("Ошибка");
  });
};
// test api
getUsersRepsFromAPI("anokata").then(log);

// list
const recordRepsToList = (reps) => {
  reps.forEach((e, i) => {
    if (!ul.children[i]) {
      const newEl = document.createElement("li");
      ul.appendChild(newEl);
    }
    const li = ul.children[i];
    li.innerHTML = reps[i].name;
  });

  while (ul.children.length > reps.length) {
    ul.removeChild(ul.lastChild);
  }
};

// key events stream
const keyUp = rxjs.fromEvent(input, "keyup").pipe(
  rxjs.operators.debounceTime(500),
  rxjs.operators.map((e) => e.target.value),
  rxjs.operators.filter((val) => val.length > 2),
  rxjs.operators.distinctUntilChanged()
);

keyUp.subscribe(log);

keyUp
  .pipe(
    rxjs.operators.mergeMap((val) =>
      rxjs
        .from(getUsersRepsFromAPI(val))
        .pipe(rxjs.operators.catchError((err) => of([])))
    )
  )
  .subscribe({
    next: (val) => recordRepsToList(val),
    error: log,
  });
//.subscribe((promise => promise.then(res => recordRepsToList(res))));

let requester = rxjs
  .timer(0, 5000) // every 5000 ms
  .pipe(
    rxjs.operators.map(() => emulateRequest()),
    rxjs.operators.mergeAll()
  );
// short way
requester = rxjs
  .timer(0, 1000) // every 1000 ms
  .pipe(
    rxjs.operators.mergeMap(() => emulateRequest()),
  );
// mergeMap = map + mergeAll

requester.subscribe(log);
