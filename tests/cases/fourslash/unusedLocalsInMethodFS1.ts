/// <reference path='fourslash.ts' />

// @noUnusedLocals: true
// @noUnusedParameters: true
////class greeter {
////    public function1() {
////        var /*0*/x,/*1*/ y = 10;
////        y++;
////    }
////}

verify.codeFixAtPosition(`
class greeter {
    public function1() {
        var y = 10;
        y++;
    }
}`);
