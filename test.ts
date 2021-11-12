console.log("from ts");

type User = { name: string };

let u: User = { name: "a" };
console.log(u);

class Uname {
  constructor(public id: number, public tos: string) {}
}
console.log(new Uname(Math.random() * 1000, "HkdzlK-df9"));

// import {of} from 'rxjs';
Promise.resolve(80).then(console.log);

type UA = string | number;
type UB = "a" | "2" | 4;
enum EA {
  S = 1,
  b = 4,
  E = 8 * EA.b,
}

let ua: UA = 8;
let ub: UB = "a";
