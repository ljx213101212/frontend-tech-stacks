namespace MyRecordNS {
  type ValidKeyType = string | number | symbol;

  export type MyRecord<K extends ValidKeyType, V> = {
      [X in K] : V
  }

//   type MyRecord = Record<ValidKeyType, string>;

  const a: MyRecord<ValidKeyType, string> = {
    a: "BFE.dev",
    b: "BFE.dev",
    c: "BFE.dev",
  };
}
