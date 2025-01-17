/**
 * @file 假设加法是一个异步过程，如何计算多个数组之和？
 */
function sleep(ms: number) {
    return new Promise(r => {
        setTimeout(() => {
            r(undefined)
        }, ms);
    })
}

async function asyncAdd(a: number, b: number) {
    await sleep(1000);
    return a + b;
}

async function sum(arr: number[]): Promise<number> {
    // 补全这里代码，涉及 arr 中两数求和只能使用 asyncAdd，禁止使用加号
    //throw new Error('功能待实现');
    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
        ans = await asyncAdd(ans, arr[i]);
    }
    return ans;
}

console.time('a')
sum([1, 2, 3, 4, 5, 6, 7, 8])
    .then(v => {
        console.log(v) // 36
        console.timeEnd('a') // a: <耗时>
    })

export default {}