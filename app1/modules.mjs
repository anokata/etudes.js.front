import {logme, log} from './modstr.mjs';
import {messageAkr} from './modstr.mjs';
import * as modnum from './modnum.mjs';
log(import.meta);
logme("test" + messageAkr + modnum.PI);
logme(this);

import colors from 'colors';
log(colors.red("test"));
log(colors.bgBrightBlue(colors.brightWhite("test")));
log('TEST'.bgGray);
/// 'abcd' abd
