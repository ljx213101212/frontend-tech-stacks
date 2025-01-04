### How Babel Works
1. Parsing
    -  into an Abstract Syntax Tree (AST)
```json
    {
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "greet"
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "name": "console"
                },
                "property": {
                  "type": "Identifier",
                  "name": "log"
                }
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": "Hello, world!"
                }
              ]
            }
          }
        }
      ]
    }
  ]
}

    ```
2. Transforming
The AST is transformed based on Babel plugins and presets.

3. Code Generation
The transformed AST is converted back into JavaScript code (ES5 or another target version).

