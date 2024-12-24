async function myAll<T extends unknown[] | []>(values: T): Promise<{ [P in keyof T]: Awaited<T[P]> }> {
    // 补全此处代码，使用 Promise.all 以外的语法完成
    const ans = [];
    for (let i = 0; i < values.length; i++) {
        ans.push(await values[i]);
    }
    return ans as { [P in keyof T]: Awaited<T[P]> };
}

// 一秒钟后返回结果 value
async function request(value: string) {
    await sleep(1000);
    return value;
}
async function main() {
    console.log('start');
    const res = await myAll([
        request('a'),
        request('b'),
        request('c'),
    ])
    console.log(res); // 预期输出 start 一秒后输出 ['a', 'b', 'c']
}
main()


function sleep(ms: number) {
    return new Promise(r => {
        setTimeout(() => {
            r(undefined)
        }, ms);
    })
}
export default {}

