## Plugin in Webpack

```javascript
class MyPlugin {
    apply(compiler) {
        compiler.hooks.emit.tap('MyPlugin', (compilation) => {
            console.log("Plugin tapped into the emit hook.");
        });
    }
}

module.exports = MyPlugin;
```