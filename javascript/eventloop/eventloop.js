console.log("Start");

setTimeout(() => {
  console.log("Macrotask 1");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask 1");
  Promise.resolve().then(() => {
    console.log("Microtask 3");
  });
});

setTimeout(() => {
  console.log("Macrotask 2");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask 2");
});

console.log("End");

/**
Start
End
Microtask 1
Microtask 2
Microtask 3
Macrotask 1
Macrotask 2
 */