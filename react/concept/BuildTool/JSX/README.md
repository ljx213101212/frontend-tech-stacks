### HOW JSX works?
1. HTML-like Syntax in JavaScript
```jsx
const element = <h1>Hello, World!</h1>;
``` 

2. Transpilation
Tools like Babel convert JSX into regular JavaScript.
```jsx
const element = React.createElement('h1', null, 'Hello, World!');
```

