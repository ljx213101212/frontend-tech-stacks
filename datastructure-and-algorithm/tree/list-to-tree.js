// 示例数据
const list = [
    { id: 1, name: 'Node 1', parentId: null },
    { id: 2, name: 'Node 1.1', parentId: 1 },
    { id: 3, name: 'Node 1.2', parentId: 1 },
    { id: 4, name: 'Node 2', parentId: null },
    { id: 5, name: 'Node 2.1', parentId: 4 },
    { id: 6, name: 'Node 2.2', parentId: 4 },
    { id: 7, name: 'Node 2.1.1', parentId: 5 },
];

//ES5
const listToTrees = (list) => {
    const m = new Map();

    const trees = [];
    for (let i = 0; i < list.length; i++) {
        const node = list[i];
        node.children = [];
        m.set(node.id, node);
    }

    for (const [key, value] of m.entries()) {
        if (value.parentId === null) {
            trees.push(value);
        } else {
            m.get(value.parentId).children.push(value);
        }
    }

    console.log(JSON.stringify(trees));
    return trees;
}

const listToTreesES6 = (list) => {
    const m = new Map();
    const trees = [];
    list.forEach((node) => {
        node.children = [];
        m.set(node.id, node);
    });

    m.entries().forEach(([_key, value]) => {
        if (value === null) {
            trees.push(value);
        } else {
            m.get(value.parentId).children.push(value);
        }
    });
    return trees;
}

// 转换列表为树
// const tree = listToTrees(list);
const tree = listToTreesES6(list);

const printTree = (trees, level = 0) => {
    trees.forEach(tree => {
        console.log(tree.id, " Level: ", level);
        for (const node of tree.children) {
            printTree([node], level + 1);
        }
    });
}

printTree(tree);

