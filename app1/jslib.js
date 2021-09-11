log = console.log;

function kMake36Num(n) {
    return `${n}0${Math.round(Math.random()*1e7).toString(36)}0${n}`;
}

function test() {
    log(kMake36Num(2));
}

// test();
