// Loader definitions
const sassLoader = (input) => {
  console.log("Processing Sass...");
  return `/* Sass compiled */\n${input}`;
};

const cssLoader = (input) => {
  console.log("Resolving CSS...");
  return `/* CSS resolved */\n${input}`;
};

const styleLoader = (input) => {
  console.log("Injecting Styles...");
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
