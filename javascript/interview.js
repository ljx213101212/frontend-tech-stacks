const flatten = (arr) => {
  const ans = [];

  const doFlatten = (arr) => {
    arr.forEach((item) => {
      //console.log(item, item instanceof Array);
      if (Array.isArray(arr)) {
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
//const input = [1, [2]];

console.log(flatten(input));
