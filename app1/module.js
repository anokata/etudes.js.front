export default function ensom(radix) {
    if (radix === void 0) { radix = 36; }
    var n = Math.round(Math.random() * 1e5);
    var rn = n.toFixed(radix);
    console.log(rn);
}
