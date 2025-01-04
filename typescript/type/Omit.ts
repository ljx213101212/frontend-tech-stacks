namespace MyOmitNS {
  type Foo = {
    a: string;
    b: number;
    c: boolean;
  };

  type MyOmit<T, K extends keyof any> = {
    [key in keyof T as key extends K ? never : key]: T[key];
  };

  export type A = MyOmit<Foo, "a" | "b">; // {c: boolean}
  export type B = MyOmit<Foo, "c">; // {a: string, b: number}
  export type C = MyOmit<Foo, "c" | "d">; // {a: string, b: number}
}


// const data: MyOmitNS.A = {
//     c: true,
// }
// const data2: MyOmitNS.B = {
//     a: "123"
// } //error: didn't declare "b"

// console.log(data2);
