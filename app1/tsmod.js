var NS2;
(function (NS2) {
    NS2.N = 8;
    const log = console.log;
    function show() { log(`Hi from NS2. ${NS2.N}`); }
    NS2.show = show;
    let INNERNS8;
    (function (INNERNS8) {
        function print(x) { log(`-${x}-`); }
        INNERNS8.print = print;
        ;
    })(INNERNS8 = NS2.INNERNS8 || (NS2.INNERNS8 = {}));
})(NS2 || (NS2 = {}));
const log = console.log;
NS2.show();
NS2.INNERNS8.print("hi");
var print8 = NS2.INNERNS8.print;
print8("shortname");
//# sourceMappingURL=tsmod.js.map