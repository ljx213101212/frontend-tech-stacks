## Plugin in Webpack

```javascript
const { SyncHook } = require('tapable');

class MyCompiler {
    constructor() {
        this.hooks = {
            compile: new SyncHook(['params']),
        };
    }

    compile(params) {
        console.log("Starting compilation...");
        this.hooks.compile.call(params); // Notify all observers
    }
}

// Usage
const compiler = new MyCompiler();
compiler.hooks.compile.tap('MyPlugin', (params) => {
    console.log("Plugin reacting to compile:", params);
});

compiler.compile({ foo: 'bar' });

```