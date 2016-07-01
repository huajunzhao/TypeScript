/// <reference path='fourslash.ts' />

// @noUnusedLocals: true
//// module A {
////    export class Calculator {
////         public handelChar() {
////         }
////     }
//// }

//// module B {
////     import a = A;
//// }

verify.codeFixAtPosition(`
module A {
   export class Calculator {
        public handelChar() {
        }
    }
}

module B {
    import {} = A;
}
`);

