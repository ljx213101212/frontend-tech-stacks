function greet(param1, param2, param3) {
  console.log(param1, param2, param3);
}

const greetArrow = (param1, param2, param3) => {
  console.log(param1, param2, param3);
};

const obj = { name: "JavaScript" };
const param1 = "JavaScript";
const param2 = "TypeScript";
const param3 = "NodeJS";

greet.call(this, param1, param2, param3); // 'JavaScript'
greet.apply(this, [param1, param2, param3]); // 'JavaScript'

const boundFunc = greet.bind(this, ...[param1, param2, param3]);
boundFunc(); // 'JavaScript'
