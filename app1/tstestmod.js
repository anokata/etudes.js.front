// order is important. main is last
// tsc -t es6 --outFile tsmod.js tsmodx.ts  tstestmod.ts
/// <reference path="tsmodx.ts" />
import * as Modx from './tsmodx';
var log = console.log;
Modx.NS2.show();
Modx.NS2.INNERNS8.print("hi");
var print8 = Modx.NS2.INNERNS8.print;
print8("shortname");
import ensom from './module';
ensom();
//tsc  --module esnext
