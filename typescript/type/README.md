### mapped Type
 a generic type which uses a union of PropertyKeys (frequently created via a keyof) to iterate through keys to create a type:

 ```typescript
 type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};
 ```


### keyof
The keyof operator takes an object type and produces a string or numeric literal **union** of its keys. 
```typescript
type Point = { x: number; y: number };
type P = keyof Point;
//type P = "x" | "y"
```

#### "K in T" vs "K in keyof T"
- K in T
  - T is an union type
```typescript
type T = "a" | "b" | "c";

type Example<K extends T> = {
  [P in K]: number; // P iterates over the members of K
};

```


- K in keyof T
  - T is an object type

```typescript
type T = {
  a: string;
  b: number;
  c: boolean;
};

type Example<K extends keyof T> = {
  [P in K]: T[P]; // P iterates over the keys of T
};

```


### Generic extends vs Interface extends

| **Aspect**               | **Generic `extends`**                                     | **Interface `extends`**                                |
|--------------------------|----------------------------------------------------------|-------------------------------------------------------|
| **Purpose**              | Constrains a generic type parameter to a specific type.   | Allows an interface to inherit properties from another interface. |
| **Scope**                | Applies only to the type parameter within a generic context. | Defines a broader structural relationship between interfaces. |
| **Syntax**               | `T extends BaseType`                                      | `interface Child extends Parent { ... }`             |
| **Use Case**             | Enforcing constraints on generic type arguments.          | Creating hierarchical or composite types.            |
| **Key Benefit**          | Adds flexibility to generics while maintaining type safety. | Promotes code reuse and ensures consistent structure. |
| **Resulting Type**       | Generic-specific behavior tied to `T`.                    | Inherits all properties from the parent interface.   |


Type inferences: Can infer the type of variables and functions based on their usage. This reduces the amount of code and improves readability
Conditional types: Allow us to create complex type expressions with conditional behaviors that depend on other types
Type guards: Used to write sophisticated control flow based on the type of a variable
Mapped types: Transforms an existing object type into a new type
Utility types: A set of out-of-the-box utilities that help to manipulate types