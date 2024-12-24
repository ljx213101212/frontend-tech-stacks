// 示例
const preorderTraversal = [8, 5, 1, 7, 10, 12];
const notPreorderTraversal = [8, 5, 10, 1, 7, 12];

console.log(verifyPreorder(preorderTraversal)); // 应该输出 true
console.log(verifyPreorder(notPreorderTraversal)); // 应该输出 false


function verifyPreorder(preorder) {

    const stack = [];
    let lowBound = -Infinity;

    for (let i = 0; i < preorder.length; i++) {
        const current = preorder[i];

        if (current < lowBound) {
            return false;
        }

        while (stack.length > 0 && stack.at(stack.length - 1) < current) {
            lowBound = stack.pop();
        }

        stack.push(current);
    }

    return true;
  
}