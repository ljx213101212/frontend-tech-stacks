namespace keepCommonKeysNS {
  type A = { a: number; b: string };
  type B = { a: number };

  // 1. Get the intersection of the key sets: "a"
  type CommonKeys = keyof A & keyof B; // "a"

  // 2. Pick those keys from one of the types (A or B)
  export type C = Pick<A, CommonKeys>; // { a: number }
}

// const data: keepCommonKeysNS.C = {
//     a: 1
// }