### Summary of Hoisting Across ES5 and ES6 Syntax:
- var: Hoisted; accessible before initialization as undefined.
- let and const: Hoisted but in a temporal dead zone; ReferenceError if accessed before declaration.
- Functions: Hoisted; callable before declaration.
- Classes: Hoisted but in a temporal dead zone; ReferenceError if accessed before declaration.
- Arrow Functions / Function Expressions: Variable is hoisted but not initialized; results in TypeError if accessed before assignment.
