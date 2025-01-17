### apply, call, and bind

- call: Invokes a function with a specific this value and arguments provided individually.

```javascript
func.call(thisArg, arg1, arg2);
```

- apply: Similar to call, but arguments are provided as an array.

```javascript
func.apply(thisArg, [arg1, arg2]);
```

- bind: Didn't invoke a function, but argument should provide individually like call

```javascript
const boundFunc = func.bind(thisArg, arg1);
boundFunc(arg2);
```

| **Method** | **Purpose**                                                                 | **Syntax**                                   | **Key Difference**                        | **Similarity**                                                                                                |
| ---------- | --------------------------------------------------------------------------- | -------------------------------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `call`     | Invokes a function with a specific `this` value and arguments individually. | `func.call(thisArg, arg1, arg2)`             | Arguments are passed individually.        |                                                                                                               |
| `apply`    | Invokes a function with a specific `this` value and arguments as an array.  | `func.apply(thisArg, [arg1, arg2])`          | Arguments are passed as an array.         | Same as `call` but differs in how arguments are passed.                                                       |
| `bind`     | Creates a new function with a specific `this` value and preset arguments.   | `const boundFunc = func.bind(thisArg, arg1)` | Does not invoke the function immediately. | Similar to `call` but didn't trigger the function immediately and returns a new bound function for later use. |

### this (ES5 !== ES6)

behave differently in different cases:
  - Global Context
  - Function Context
  - Constructor Functions
  - Explicit Binding (apply, call, bind)
  - Arrow Functions
  - Event Handlers

- ES5
  - **this refers to the object that is calling the function. (dynamic)**
- ES6
  - **this is deterrmined by the closest non-arrow function or global context at the creation time. (lexical)**

### Data Type Checking by Prototype

- Use Object.prototype.toString for a robust and generic way to check built-in types.
- Use instanceof or constructor for checking instances of custom types.


### Hoisting Rules

- var
  - to the top with initial value "undefined" 
- let, const
  - to the top with "Reference Error" (uninitialized)
- function 
  - to the top with full body included


### Prototype inheritance
If we want to read a property of obj or call a method, and it doesn’t exist, then JavaScript tries to find it in the prototype, if it present, then take it as property, we call this process **Prototype inheritance**
