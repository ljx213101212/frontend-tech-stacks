/**
 * @file 找出字符串中第一个只出现一次的字符
 */

// function firstSingleChar(str: string) {
//     // 补全此处代码
//     const mySet = new Set();
//     const vi = new Map();
//     for (let i = str.length - 1; i >= 0; i--) {
//        if (!mySet.has(str[i])) {
//             vi.set(str[i], i);
//             mySet.add(str[i]);
//        } else {
//             vi.delete(str[i]);
//        }
//     }

//     let min_i = str.length;
//     for (let value of vi.values()) {
//         min_i = Math.min(min_i, value);
//     }
//     return min_i === str.length ? undefined : str[min_i];
// }

function firstSingleChar(str: string) {
    const uniqueStr = str.split("").filter((item: string, index: number, arr: string[]) => {
        arr.splice(index, 1);
        return !arr.includes(item)
    })
    return uniqueStr.length === 0 ? undefined : uniqueStr[0]
}

// a 和 b 都出现了两次，只有 c 出现了一次，返回 c
console.log(firstSingleChar('abcba')) // c
// b c d 都出现了一次，返回第一个
console.log(firstSingleChar('aabcdee')) // b
// a 和 b 都出现了多次，没有只出现一次的元素，返回 undefined
console.log(firstSingleChar('aaaabbbb')) // undefined

export default {}
