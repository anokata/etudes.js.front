import {logme, log} from './modstr.mjs';
log(import.meta);
logme("test");
logme(this);

import colors from 'colors';
log(colors.red("test"));
log(colors.bgBrightBlue(colors.brightWhite("test")));
log('TEST'.bgGray);
/// 'abcd' abd
