/// <reference path='fourslash.ts' />

// @noUnusedLocals: true
// @Filename: file2.ts
//// import {/*0*/Calculator,/*1*/ test, test2} from "./file1"

//// test();
//// test2();

// @Filename: file1.ts
//// export class Calculator {
////     handleChar() {}
//// }

//// export function test() {
////
//// }

//// export function test2() {
////
//// }

verify.codeFixAtPosition(`
import {test, test2} from "./file1"

test();
test2();
`);

