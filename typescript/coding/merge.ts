/**
 * @file 合并两个有序数组
 */

// function merge(arr: number[], arr2: number[]): number[] {
//     // 补全此处代码
//     const ans  = [] as number[];
//     const n1 = arr.length;
//     const n2 = arr2.length;
//     let i1 = 0, i2 = 0;
//     while (i1 < n1 && i2 < n2) {
//         if (arr[i1] < arr2[i2]) {
//             ans.push(arr[i1++]);
//         } else {
//             ans.push(arr[i2++]);
//         }
//     }

//     while (i1 < n1) {
//         ans.push(arr[i1++]);
//     }
    
//     while (i2 < n2) {
//         ans.push(arr2[i2++]);
//     }
//     return ans;
// }

function merge(arr: number[], arr2: number[]): number[] {
    // 补全此处代码
    return arr.concat(arr2).sort((a, b) => a - b);
}

// 参数数组从小到大排列
console.log(merge([1, 2, 3], [2, 6])) // [ 1, 2, 2, 3, 5, 6 ]

export default {}