export default function ensom(radix: number = 36): void {
    let n:number = Math.round(Math.random() * 1e5);
    let rn:string = n.toString(radix);
    console.log(rn);
}
