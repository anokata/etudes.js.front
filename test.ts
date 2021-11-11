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
