namespace MyPartialNS {
  type Foo = {
    a: string;
    b: number;
    c: boolean;
  };
  // below are all valid
  const a: MyPartial<Foo> = {};
  const b: MyPartial<Foo> = {
    a: "BFE.dev",
  };
  const c: MyPartial<Foo> = {
    b: 123,
  };
  const d: MyPartial<Foo> = {
    b: 123,
    c: true,
  };
  const e: MyPartial<Foo> = {
    a: "BFE.dev",
    b: 123,
    c: true,
  };

  export type MyPartial<T> = Partial<Foo>;
  //type MyPartial<T> = {[K in keyof T]?: T[K]}
}
