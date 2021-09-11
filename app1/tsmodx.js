export var NS2;
(function (NS2) {
    NS2.N = 8;
    var log = console.log;
    function show() { log("Hi from NS2. " + NS2.N); }
    NS2.show = show;
    var INNERNS8;
    (function (INNERNS8) {
        function print(x) { log("-" + x + "-"); }
        INNERNS8.print = print;
        ;
    })(INNERNS8 = NS2.INNERNS8 || (NS2.INNERNS8 = {}));
})(NS2 || (NS2 = {}));
