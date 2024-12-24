/**
 * @file 二叉树所有路径
 */

type Tree = {
    value: number;
    left?: Tree;
    right?: Tree;
}
const tree: Tree = {
    value: 1,
    left: {
        value: 2,
        right: { value: 5 }
    },
    right: { value: 3 }
};
function treePath(root: Tree): string[] {
    // 补全此处代码
    //throw new Error('功能待实现');
    const ans = [] as string[][];
    if (!root) {
        return [];
    }

    let tmp = [] as string[];
    const dfs = (node: Tree) => {

        if (!node) {
            return;
        }
        tmp.push(String(node.value));
        if (!node.left && !node.right) {
            ans.push(tmp as string[]);
            tmp = [String(root.value)] as string[];
        }
       
        if (node.left) dfs(node.left);
        if (node.right) dfs(node.right);

    }

    dfs(root);
    console.log(ans);
    //return ans.map((item) => item.join("->"));
    return [];
}
console.log(treePath(tree)) // [ '1->2->5', '1->3' ]

export default {}