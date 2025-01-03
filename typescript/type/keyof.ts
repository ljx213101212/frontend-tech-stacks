namespace MyKeyOfNS {
  type Point = { x: number; y: number };
  type P = keyof Point;
  //type P = "x" | "y"
  const v = "string" as P;

  //If the type has a string or number index signature, keyof will return those types instead:
  type Arrayish = { [n: number]: unknown };
  type A = keyof Arrayish;
  //type A = number
  const v1: A = 1;

  type Mapish = { [k: string]: boolean };
  type M = keyof Mapish;

  const v2: M = 1;
  const v3: M = "1";
}
