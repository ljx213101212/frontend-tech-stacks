const obj = {
    a: {
      b: 1,
      c: 2,
      d: {
        e: 5,
      },
    },
  b: [1, 3, { a: 2, b: 3 }],
  c: 3,
  d: undefined,
  e: null
};
// {
//   'a.b': 1,
//   'a.c': 2,
//   'a.d.e': 5,
//   'b[0]': 1,
//   'b[1]': 3,
//   'b[2].a': 2,
//   'b[2].b': 3
//    c: 3
// }

// function flatten(obj) {
//   const ans = {};

//   const doFlatten = (keys, obj) => {
//     for (const [key, value] of Object.entries(obj)) {
//       if (Array.isArray(value)) {
//         for (let i = 0; i < value.length; i++) {
//             const newKey = keys + "." +  key + "[" + String(i) + "]";
//             doFlatten(newKey, value[i]); 
//         }
//       } else if (value instanceof Object) {
//         const newKey = keys + "." + key;
//         doFlatten(newKey, value);
//       } else {
//         ans[keys] = value;
//       }
//     }
//   };
//   doFlatten("", obj);
//   return ans;
// }

function flatten(obj) {
    const ans = {}

    const doFlatten = (keys, current) => {

        if (current === null || typeof current === "undefined" || typeof current === "number") {
            const key = keys.join(".");
            ans[key] = current;
            return;
        }
        for (const [key, value] of Object.entries(current)) {
            if (Object.prototype.toString.call(value) === "[object Array]") { //Array.isArray(value)
                for (let i = 0; i < value.length; i++) {
                    const newKeys = [...keys, key + "[" + String(i) + "]"];
                    doFlatten(newKeys, value[i]);
                }
            } else {
                const newKeys= [...keys, key];
                doFlatten(newKeys, value);
            }
        }
    }

    doFlatten([], obj);
    return ans;
}

console.log(JSON.stringify(flatten(obj)));
