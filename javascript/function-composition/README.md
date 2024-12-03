### What

Combining smaller functions into a larger function where the output of one is the input of the next.

### Why to use

Promotes modularity, readability, reusability, and testability.

### Solution

Build small, pure functions.
Compose them using tools like reduceRight or functional libraries.

### Real wolrd Solution example

- Redux - combineReducers

```
const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
});

```

- Webpack - loader

```webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};

```

```Implementation analogy
// Loader definitions
const sassLoader = (input) => {
  console.log('Processing Sass...');
  return `/* Sass compiled */\n${input}`;
};

const cssLoader = (input) => {
  console.log('Resolving CSS...');
  return `/* CSS resolved */\n${input}`;
};

const styleLoader = (input) => {
  console.log('Injecting Styles...');
  return `<style>${input}</style>`;
};

// Webpack applies loaders in reverse
const webpackPipeline = [styleLoader, cssLoader, sassLoader];

// Compose loaders into one pipeline
const applyLoaders = (input) => {
  return webpackPipeline.reduceRight((acc, loader) => loader(acc), input);
};

// Input source
const inputSource = `.button { color: blue; }`;

// Process input through loader pipeline
console.log(applyLoaders(inputSource));

```
