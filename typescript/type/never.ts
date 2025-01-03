function foo(x: unknown): boolean {
    if (typeof x === "string") {
      return true;
    } else if (typeof x === "number") {
      return false;
    }
  
    // Without a never type we would error :
    // - Not all code paths return a value (strict null checks)
    // - Or Unreachable code detected
    // But because TypeScript understands that `fail` function returns `never`
    // It can allow you to call it as you might be using it for runtime safety / exhaustive checks.
    return fail("Unexhaustive!");
  }
  
  // A function never has a return value <- never
  function fail(message: string): never { throw new Error(message); }

//   const a = foo([1,2,3]);