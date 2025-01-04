var isValid = function(s) {
    const mapping = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    const stack = [];

    for (const current of s) {
        //current如果不是反括号
        if (!mapping.hasOwnProperty(current)) {
            stack.push(current);
        } else {
            //处理反括号
            if (stack.length === 0) { //()) -> 情况2
                return false;
            }
            if (mapping[current] !== stack.pop()) { //[} -> 情况3
                return false;
            }
        }
    }

    return stack.length === 0; //stack.length > 0  ( -> 情况1
}

// Reference: https://leetcode.cn/problems/valid-parentheses/solutions/2809539/gua-hao-xiao-xiao-le-san-chong-li-yong-z-2xb3/
// 什么情况下是无效字符串？
// 1. 左括号没有对应的右括号。例如 (()，缺失了一个右括号。
// 2. 右括号没有对应的左括号。例如 ())，缺失了一个左括号。
// 3. 括号类型不匹配。例如 [()}，其中 [ 要和 } 组成一对括号，但是括号类型不同。


