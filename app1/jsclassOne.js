const log = console.log;
log("*** Classes");
class Lamp {
    constructor(model) {
        this.model = model ?? "basic";
    }

    describe() {
        return `Lamp[${this.model}]`;
    }
}

log(Lamp, typeof Lamp);
let basicLamp = new Lamp();
log(basicLamp, typeof basicLamp, basicLamp.describe());
log(Lamp.prototype.describe);
log(Object.getOwnPropertyNames(Lamp.prototype));

log("*** Class exp");

const myClass = class {
    do() {
        log("(unnamed class)");
    }
};
new myClass().do();

function ClassFactory(param) {
    return class {
        constructor() {
            this.x = param;
        }
        do() {
            console.log(`x: ${++this.x}`);
        }
    };
}

let ArtificalClass = ClassFactory(80);
let artificalClassObj = new ArtificalClass();
artificalClassObj.do();

log();

class BigLamp extends Lamp {
    unit = 'l';

    constructor(size) {
        super('B.G.0');
        this._size = 0;
        this.size = size;
    }
    get size() {
        return `${this._size}${this.unit}`;
    }
    set size(value) {
        if ((typeof value == 'number') && (value > 10))
            this._size = value;
    }
    toString() {
        return `BigLamp: ${this.size} model(${this.model})`;
    }
    describe() {
        return `Big${super.describe()}.`;
    }
}

let blamp = new BigLamp(18);
log(`${blamp} || ${blamp.describe()}`);
