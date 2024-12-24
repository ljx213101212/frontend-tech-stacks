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

// 示例：查找所有值为'grandchild'的节点  
const predicate = (node) => node.value.startsWith('grandchild');  
const matchingNodes = findNodes(tree, predicate);  
  
console.log(matchingNodes); // 输出所有符合条件的节点


function findNodes(tree){

    const ans = [];
    const traverse = (node) => {
        if (!node) return;
        if (predicate(node)) {
            ans.push(node.value);
        }
        for (let i = 0; i < node.children.length; i++) {
            const current = node.children[i];
            traverse(current);
        }
    }

    traverse(tree);
    return ans;
}

