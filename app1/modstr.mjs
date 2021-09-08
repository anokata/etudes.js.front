export const log = console.log;
export function logme(s) {
    log(`--- Log at ${Date.now()} --- message:'${s}'`); 
    return `[${s}]`;
}
