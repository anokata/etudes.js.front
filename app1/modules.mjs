import {logme, log} from './modstr.mjs';
import {messageAkr} from './modstr.mjs';
import * as modnum from './modnum.mjs';
import {someVeryLongNameForTrivialFunc as svlnftf } from './modnum.mjs';
import {gus } from './modnum.mjs';
import MakeNumX from './modnum.mjs';  //default export/import
import strobj from './modstr.mjs';
import colors from 'colors';

export function main() {
    log(import.meta);
    logme("test" + messageAkr + modnum.PI);
    log(svlnftf("xu").brightMagenta, gus.brightRed);
    logme(this);

    log(colors.red("test"));
    log(colors.bgBrightBlue(colors.brightWhite("test")));
    log('TEST'.bgGray);
    /// 'abcd' abd

    log(MakeNumX(82), MakeNumX(41).toString().red);
    log(strobj);
}

main();
