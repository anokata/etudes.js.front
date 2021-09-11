export namespace NS2 {
    export let N = 8;
    const log:(...a)=>void =console.log;
    export function show() { log(`Hi from NS2. ${N}`); }
    export namespace INNERNS8 {
        export function print(x) {log(`-${x}-`)};
    }
}
