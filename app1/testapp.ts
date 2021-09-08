class Profession {
    name: string;
    constructor(name:string) {
        if (!name) {
            this.name = "Novice";
        } else {
            this.name = name;
        }
    }
    toString():string {
        return this.name;
    }
}
class User{
    name : string;
    profession : Profession;
    constructor(_name:string, prof: string){
        if (!prof) {
            this.profession = new Profession(null);
        } else {
            this.profession = new Profession(prof);
        }
        this.name = _name;
    }
    toString():string {
        return `${this.name}(${this.profession})`;
    }
}
//  --outDir dist --outFile testapp.js
const elrik : User = new User("Typescript", null);
const kane : User = new User("Kane", "warrior");
const header = this.document.getElementById("header");
header.innerHTML = `Greating to ${elrik}! And ${kane}`;
