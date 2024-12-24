function product(xList: number[], yList: number[]): [number, number][] { 
    const ans = [];
    // for (let i = 0; i < xList.length; i++) {
    //     for (let j = 0; j < yList.length; j++) {
    //         ans.push([xList[i], yList[j]]);
    //     }
    // }
    // return ans as [number, number][];
    return xList.reduce((acc, x) => {
         return acc.concat(yList.map((y) => [x, y]));
    }, [] as [number, number][]);
}

const xList = [1, 2];
const yList = [3, 4];

console.log(product(xList, yList));

export default {}
