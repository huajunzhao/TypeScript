/// <reference path='fourslash.ts' />

// @noUnusedLocals: true
// @noUnusedParameters: true
//// function f1() {
////     return (x:number) => {}
//// }

verify.codeFixAtPosition(`
function f1() {
    return () => {}
}
`);
