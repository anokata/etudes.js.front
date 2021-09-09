export let PI = 3.1415926;
export function someVeryLongNameForTrivialFunc(n) {
    return `long[${PI}]*${n}`;
}

let GlobalUnwantedStr = "~unwanted~";

export { GlobalUnwantedStr as gus };

export default function MakeNum(n) {
    return {n, name:"Num", type: "number",
        toString: function() {return `[${n}] of ${this.name}`},
    };
}
