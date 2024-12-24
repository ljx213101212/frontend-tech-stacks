const tree = {
    value: 'root',
    children: [
        {
            value: 'child1',
            children: [
                { value: 'grandchild1', children: [] },
                { value: 'grandchild2', children: [] }
            ]
        },
        {
            value: 'child2',
            children: [
                { value: 'grandchild3', children: [] },
                { value: 'grandchild4', children: [] }
            ]
        }
    ]
};

// 从根节点开始深度优先遍历  
const ans = depthFirstSearch(tree);

console.log(ans);


function depthFirstSearch (tree) {
    const ans = []
    const dfs = (node) => {
        if (!node) return;
        ans.push(node.value);  
        for (let i = 0; i < node.children.length; i++) {
            dfs(node.children[i]);
        }  
    }
    dfs(tree);
    return ans;
}

