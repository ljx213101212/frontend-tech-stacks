function curry(fn, len) {
  const _curry = (fn, len, ...args) => {
    return (...params) => {
      const newArgs = [...args, ...params]; //combine the new arguments list

      if (newArgs.length > len) {
        // if combined total arguments length is larger than pre-defined.
        throw "[curry error]: newArgs length is larger than fixed length";
      } else if (newArgs.length < len) {
        // arguments don't reach the pre-defined length yet.
        return _curry.call(this, fn, len, ...newArgs);
      } else {
        // argument reached the pre-defined length, invoke fn with newArgs (with pre-defined length)
        return fn.apply(this, newArgs);
      }
    };
  };

  return _curry(fn, len).bind(this);
}

// const LENGTH = 5;

//target function to curry
const multi = (...args) => {
  return args.reduce((acc, cur) => acc * cur, 1);
};

// const add = (...args)

const fn = curry(multi, 5);
console.log(fn(1, 2)(3, 4, 5));
