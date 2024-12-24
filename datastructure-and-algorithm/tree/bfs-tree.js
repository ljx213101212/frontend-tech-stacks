// const tree = {
//     value: 'root',
//     children: [
//         {
//             value: 'child1',
//             children: [
//                 { value: 'grandchild1', children: [] },
//                 { value: 'grandchild2', children: [] }
//             ]
//         },
//         {
//             value: 'child2',
//             children: [
//                 { value: 'grandchild3', children: [] },
//                 { value: 'grandchild4', children: [] }
//             ]
//         }
//     ]
// };

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

// 从根节点开始广度优先遍历  
console.log(breadthFirstSearch(tree));


function breadthFirstSearch(tree) {
    const ans = [];
    if (!tree) {
        return ans;
    }
    const q = [];
    q.push(tree);
    while (q.length > 0) {
        const node = q.shift();
        ans.push(node.value)
        for (let i = 0; i < node.children.length; i++) {
            const current = node.children[i];
            q.push(current);
        }
    }
    return ans;
}
