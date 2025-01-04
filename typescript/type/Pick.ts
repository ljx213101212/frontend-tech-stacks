namespace MyPickNS {
  type Foo = {
    a: string;
    b: number;
    c: boolean;
  };

  type MyPick<T, K extends keyof T> = {
    [A in K]: T[A];
  };

  type A = MyPick<Foo, "a" | "b">; // {a: string, b: number}
  export type B = MyPick<Foo, "c">; // {c: boolean}
//   type C = MyPick<Foo, "d">; // Error
}

// const data: MyPickNS.B = {
//   c: false,
// };
// console.log(data);

