const log = console.log;
log("*** Classes");
class Lamp {
    constructor(model) {
        this.model = model ?? "basic";
        Lamp._count++;
    }

    describe() {
        return `Lamp[${this.model}]`;
    }

    toString() {
        return this.describe();
    }

    static _count = 0;
    static get lampCount() {
        return Lamp._count;
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

log();

class ModernLamp extends Lamp {
    static createLamp(modelName) {
        return new this(`~${modelName}~`);
    }
    toString() {
        return `${super.toString()}(${this.#serialNum})`
    }
    #serialNum = Math.round(Math.random()*1e8);
    _lampsCount = 0;
    getLampsCount() { return this._lampsCount };

    // [Symbol.toStringTag]: "ModernLamp";
    static polyFunc(lamp) {
        if (lamp instanceof ModernLamp) {
            return "modern";
        } else if (lamp instanceof BigLamp) {
            return "big";
        } else if (lamp instanceof Lamp) {
            return "normal";
        }
    }
}

let mlamp = ModernLamp.createLamp("Bijoku");
log(mlamp);
log(`${mlamp}`);
log(`Lamps created: ${Lamp.lampCount}`); // and ModernLamp.lampCount too

let objectToString = Object.prototype.toString;
log(objectToString.call(mlamp));
log({}.toString.call(blamp));
log(typeof(mlamp), mlamp instanceof Lamp, basicLamp instanceof ModernLamp);
log(ModernLamp.polyFunc(blamp));
log([basicLamp, blamp, mlamp].map(ModernLamp.polyFunc));
log();

