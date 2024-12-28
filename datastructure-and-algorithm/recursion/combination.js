// 寫一個 function, 有兩個入參:
// N: n 是數字類型, 代表的是 1, …, n 的數列, 像是: n = 4, 代表的是 1, 2, 3, 4
// K: k 是數字類型, 代表從 n 這個數列裡取 k 個數字, 像是: n=4, k=2, 從 1, 2, 3, 4 裡取兩個數字, [1, 2] , [1, 3 ] 等等

// 把所有可能的組合返回出來, ex: n=4, k=2
// [ 1, 2 ] [ 1, 3 ] [ 1, 4 ] [ 2, 3 ] [ 2, 4 ] [ 3, 4 ]

// 不用考慮順序

const solution = (N, K) => {
  const ans = [];
  const roots = Array.from(new Array(N), (_v, i) => i + 1);
  const dfs = (nodes, currentAns, level) => {

    if (level === K) {
      ans.push(currentAns);
      return;
    }

    for (let i = 0; i < nodes.length; i++) {
      const newCurrentAns = [...currentAns, Number(nodes[i])];
      const nextNodes = nodes.slice(i + 1);
      dfs(nextNodes, newCurrentAns, level + 1);
    }
  };
  dfs(roots, [], 0);
  return ans;
};

console.log(JSON.stringify(solution(6, 4)));