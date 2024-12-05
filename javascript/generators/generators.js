function* asyncGenerator() {
  const data = yield fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (res) => res.json()
  );
  console.log(data);
}

const gen = asyncGenerator();
const promise = gen.next().value;
promise.then((data) => gen.next(data));
