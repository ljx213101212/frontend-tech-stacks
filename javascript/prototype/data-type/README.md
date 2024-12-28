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

