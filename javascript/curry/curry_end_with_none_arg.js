const curry = (...args) => {
  //end with no arg
  if (args.length === 0) {
    return 1;
  }
  let total = args.reduce((acc, cur) => acc * cur, 1);

  _curry = () => {
    return (...params) => {
      //end with no arg
      if (params.length === 0) {
        return total;
      }
      total = params.reduce((acc, cur) => acc * cur, total);
      return _curry.call();
    };
  };
  return _curry();
};
const multi1 = curry(2, 3)(4)(5);
const multi2 = curry();
const multi3 = curry(2, 3)(4)(5)(2, 3)(4)(5)(2, 3)(4)(5)(2, 3)(4)(5)(2, 3)(4)(
  5
)(
  2,
  3
)(4)(5);
console.log(multi1());
console.log(multi2);
console.log(multi3());
