var NS2;
(function (NS2) {
    NS2.N = 8;
    const log = console.log;
    function show() { log(`Hi from NS2. ${NS2.N}`); }
    NS2.show = show;
})(NS2 || (NS2 = {}));
