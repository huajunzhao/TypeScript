/// <reference path='fourslash.ts' />

// @noUnusedLocals: true
//// function f1 () {
////     for(var i = 0; ;) {
////
////     }
//// }

verify.codeFixAtPosition(`
function f1 () {
    for(; ;) {

    }
}
`);

