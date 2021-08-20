// IIFC
(function () {
const segmentInc = 1;
function AddSegment(segment){
    console.log(`Adding segment: ${segment}`)
    return segment + segmentInc;
}
AddSegment(1);
})();


// Reveal
let SegMod = (function () {
const segmentInc = 1;
function AddSegment(segment){
    console.log(`Adding segment: ${segment}`)
    return segment + segmentInc;
}
AddSegment(1);

// export 
return { 
    AddSegment : AddSegment
}
})();

SegMod.AddSegment(8);

// Promise
const mypony = new Promise((res, rej) => {
    if (Math.random() < 0.5)
    res("ok"); else
    rej("no");
});

mypony.then((x) => {console.log(x);}).catch(console.log);

async function ao(){
    console.log(await mypony);
}

ao();
