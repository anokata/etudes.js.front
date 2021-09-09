export {logme, log} from './modstr.mjs';
export {main} from './modules.mjs';

import {logme, log} from './modstr.mjs';
log();
log("obj to num/str");

let o1 = {
    value: 42,
    [Symbol.toPrimitive]: function(hint) {
        log("H: ", hint);
        return this.value*2;
    },
}

log(o1 +200);

let o2 = {
    name: 'x',
    toString(){
        return `OBJ: ${this.name}`;
    }
}

log(o2);
log(o2 + "");

let o3 = new function(){
    // like this = {};
    this.a = 8;
    log(Boolean(new.target));
    // like return this
}
log(o3);

let _globObj = {};
function A() { return _globObj; }
function B() { return _globObj; }

let a = new A;
let b = new B;

log( a == b ); // true
