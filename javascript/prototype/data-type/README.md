### Type Check

- typeof

```    
console.log(typeof 42); // "number"
console.log(typeof 'hello'); // "string"
console.log(typeof true); // "boolean"
console.log(typeof null); // "object"（这是一个历史遗留问题） <- (please noted!)
console.log(typeof Symbol()); // "symbol"
console.log(typeof undefined); // "undefined"
console.log(typeof {}); // "object"
console.log(typeof []); // "object"  <-  (please noted!)
console.log(typeof function(){}); // "function"
```
- instanceof

```
console.log([] instanceof Array); // true
console.log({} instanceof Object); // true
console.log(function(){} instanceof Function); // true
console.log(new Date() instanceof Date);  // true

class MyClass {}
const myInstance = new MyClass();
console.log(myInstance instanceof MyClass); // true
```

- Object.prototype.toString

```
console.log(Object.prototype.toString.call(null));          // "[object Null]"
console.log(Object.prototype.toString.call(undefined));     // "[object Undefined]"
console.log(Object.prototype.toString.call([]));            // "[object Array]"
console.log(Object.prototype.toString.call({}));            // "[object Object]"
console.log(Object.prototype.toString.call(new Date()));    // "[object Date]"
console.log(Object.prototype.toString.call(/regex/));       // "[object RegExp]"
console.log(Object.prototype.toString.call(() => {}));      // "[object Function]"

```

- Array.isArray()


#### Comparison of `typeof`, `instanceof`, and `Object.prototype.toString`

| **Feature**                | **typeof**                    | **instanceof**                 | **Object.prototype.toString**       |
|-----------------------------|-------------------------------|---------------------------------|-------------------------------------|
| **Primary Use**             | Check primitive types         | Check constructor inheritance  | Get exact object type              |
| **Works With Primitives**   | Yes                          | No                              | Yes                                |
| **Works With Objects**      | Partially                    | Yes                             | Yes                                |
| **Can Distinguish Objects** | No (all objects are `object`) | Limited                         | Yes                                |
| **Cross-Environment**       | Yes                          | No                              | Yes                                |
| **Readable Syntax**         | Yes                          | Yes                             | No (more verbose)                  |
| **Examples**                | `typeof 123`                 | `[] instanceof Array`          | `Object.prototype.toString.call([])` |


#### Symbol

- A unique and immutable primitive introduced in ES6.
- Mainly used as unique identifiers for object properties, ensuring no naming conflicts.

```javascript
const sym1 = Symbol("uniqueKey");
const sym2 = Symbol("uniqueKey");

const obj = {
  [sym1]: "value1",
  [sym2]: "value2"
};

console.log(obj[sym1]); // "value1"
console.log(obj[sym2]); // "value2"
console.log(Object.keys(obj)); // [] (Symbols are not enumerated)
console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(uniqueKey), Symbol(uniqueKey)]

```

#### Symbol vs String
| **Aspect**               | **String**                                   | **Symbol**                                    |
|--------------------------|---------------------------------------------|---------------------------------------------|
| **Purpose**              | Represent textual data or property keys.    | Create unique and immutable property keys.   |
| **Mutability**           | Strings are immutable.                      | Symbols are immutable.                      |
| **Uniqueness**           | Strings with the same value are equal.      | Every Symbol is unique, even with the same description. |
| **Type**                 | `typeof "example"` → `"string"`             | `typeof Symbol("example")` → `"symbol"`     |
| **Usage as Object Keys** | Strings can be used as keys.                | Symbols are used to create unique keys that don’t clash. |
| **Iteration**            | Enumerated in `for...in` and `Object.keys`. | Not enumerated in `for...in` or `Object.keys`. |
| **Conversion to String** | Automatically converted.                    | Requires explicit conversion (e.g., `Symbol.toString()`). |




#### Object vs Map
| **Aspect**      | **Object**                                                                 | **Map**                                                                                 |
|------------------|---------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| **Definition**   | A built-in data structure for storing key-value pairs.                   | A newer data structure (introduced in ES6) specifically for key-value pairs.          |
| **Key Types**    | Keys are always strings or symbols (numbers are converted to strings).   | Keys can be of any type: objects, numbers, strings, etc.                              |
| **Order of Keys**| Keys are not guaranteed to be in insertion order (though modern implementations do maintain it for string keys). | Keys are guaranteed to maintain insertion order.                                      |
| **Performance**  | Optimized for small sets of string-based keys.                           | Optimized for frequent additions and deletions, especially with non-string keys.      |
| **Prototypes**   | Objects inherit from `Object.prototype`, which can lead to prototype-related issues. | Maps do not have a prototype chain affecting stored keys.                             |

```javascript
const obj = {};
obj[1] = "value"; // Key becomes "1"
console.log(obj["1"]); // "value"

const map = new Map();
map.set(1, "value"); // Key remains 1 (number)
console.log(map.get(1)); // "value"
console.log(map.get("1")); // undefined (no type conversion)
```