function say(){
    console.log(`Hi from module say`);
}

function some(x) { return `x:${x*x}`}

module.exports = {
    say: say,
    some: some,
}
