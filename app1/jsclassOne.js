const log = console.log;
class Lamp {
    constructor() {
        this.model = "basic";
    }

    describe() {
        return `Lamp[${this.model}]`;
    }
}

log(Lamp, typeof Lamp);
let basicLamp = new Lamp();
log(basicLamp, typeof basicLamp, basicLamp.describe());
