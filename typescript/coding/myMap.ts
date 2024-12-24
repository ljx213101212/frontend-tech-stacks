/**
 * @file 实现数组 map 方法
 */

function myMap<T, R>(arr: T[], callbackFn: (v: T) => R): R[] {
    // 补全此处代码，可以使用除数组 map 以外的其他任何函数
    const ans = [];
    for (let i = 0; i < arr.length; i++) {
        ans.push(callbackFn(arr[i]));
    }
    return ans;
}
// 测试
console.log(myMap([1, 2, 3], v => v * 2)) // [2, 4, 6]

export default {};