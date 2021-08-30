function say(){
    console.log(`Hi from module say`);
}

function some(x) { return `x:${x/2}`}

module.exports = {
    say: say,
    some: some,
}
