namespace MyRequiredNS {
  export type MyRequired<T extends object> = {
    // the 'optional' symbol = '?'
    // the 'not' symbol = '-'
    // K is not optional in T
    [K in keyof T]-?: T[K];
  };
}
