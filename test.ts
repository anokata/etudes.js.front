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

let a: string | undefined;
let A: { a: string; b: object; c: any } = { a: "2", b: {}, c: undefined };
console.log(A.a, A.c?.b, !!undefined);
console.log(((a) => a * 2)(3));

class Some {
  constructor(public id: number) {}
}
class Other {
  constructor(public id: number, public x: string) {}
}
let some: Some = { id: 8 }; // Structural typing
console.log(some, typeof some);
let other: Other = new Other(1, "2");
some = other;
console.log(some, typeof some);

let arr: Array<string> = [""];
let tuple: [number, number] = [1, 2];
console.log(tuple);

class Over {
  method(id?: number | string): void {
    console.log(id || "1");
  }
}
new Over().method(2);

let an2: 2 = 2;
let an23: 2 | 3 = 3;
const an5 = 5; // type is 5
let an6 = 6; // type is number
