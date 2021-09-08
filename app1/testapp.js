class Profession {
    constructor(name) {
        if (!name) {
            this.name = "Novice";
        }
        else {
            this.name = name;
        }
    }
    toString() {
        return this.name;
    }
}
class User {
    constructor(_name, prof) {
        if (!prof) {
            this.profession = new Profession(null);
        }
        else {
            this.profession = new Profession(prof);
        }
        this.name = _name;
    }
    toString() {
        return `${this.name}(${this.profession})`;
    }
}
//  --outDir dist --outFile testapp.js
const elrik = new User("Typescript", null);
const kane = new User("Kane", "warrior");
const header = this.document.getElementById("header");
header.innerHTML = `Greating to ${elrik}! And ${kane}`;
let l = console.log;
let x = 123;
// x = 'a'; // type err
x += 123;
l(x);
{
    let x;
    x = 'xxx';
    l(x);
}
