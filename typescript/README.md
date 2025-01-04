## enum vs const enum

- enum
  - runtime , support reverse mapping.
- const num
  - comile-time, NOT support reverse mapping.

## unknown vs any

- unknown
- must type check in compile-time
- any
- no type check but might throw type error in run-time

| **Property**           | **`any`**                                      | **`unknown`**                                             |
| ---------------------- | ---------------------------------------------- | --------------------------------------------------------- |
| **Type Checking**      | Skips type checking                            | Requires explicit type checks or assertions               |
| **Assignment**         | Can be assigned to any type                    | Can only be assigned to `unknown` or `any` types          |
| **Safety**             | Unsafe, prone to runtime errors                | Safe, requires explicit handling before use               |
| **Use Cases**          | Prototyping, temporarily bypassing type checks | Handling unknown inputs (e.g., user input, API responses) |
| **Runtime Error Risk** | High                                           | Low                                                       |

## In

```typescript
const person = { name: "Alice", age: 30 };

console.log("name" in person); // true
console.log("gender" in person); // false
```

## Union, Intersection, Declaration Merging

- Union

```
type Animal = "cat" | "dog" | "bird";
```

- Intersection

```
type Person = { name: string };
type Employee = { id: number };
type Staff = Person & Employee;
const staff: Staff = { name: "Alice", id: 1 };
```

## interface vs type

- interface
- Can be extended or merged
- NOT support Union, Intersection
- Suport Declaration Merging

- type
- Cannot be extedned or merged
- Support Union, Intersection
