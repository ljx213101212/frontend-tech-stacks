const flatten = (arr, depth = 1) => {
  const ans = [];
  if (!Array.isArray(arr)) {
    ans.push(arr);
    return ans;
  }
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    const current = arr[i];
    if (depth > 0) {
      ans.push(...flatten(current, depth - 1));
    } else {
      ans.push(current);
    }
  }

  return ans;
};

const input = [1, [2, [3, 4]]];
console.dir(flatten(input, 1));
