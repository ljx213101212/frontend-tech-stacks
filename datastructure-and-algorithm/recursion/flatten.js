const flatten = (arr) => {
  const ans = [];

  const doFlatten = (arr) => {
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        doFlatten(item);
      } else {
        ans.push(item);
      }
    });
  };

  doFlatten(arr);

  return ans;
};

const input = [1, [2, [3, 4]]];
console.log(flatten(input));
