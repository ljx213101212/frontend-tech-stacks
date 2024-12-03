//Daily Scenario
const compose =
  (...functions) =>
  (input) =>
    functions.reduceRight((acc, fn) => fn(acc), input);

const capitalize = (name) => name.charAt(0).toUpperCase() + name.slice(1);
const addTitle = (name) => `Mr. ${name}`;
const greetUser = (name) => `Hello, ${name}!`;

const processUser = compose(greetUser, addTitle, capitalize);

console.log(processUser("john")); // "Hello, Mr. John!"

//Middleware
const sanitize = (input) => input.trim();
const validate = (input) => {
  if (!input) throw new Error("Invalid input");
  return input;
};
const log = (input) => {
  console.log(`Processed: ${input}`);
  return input;
};

const processInput = compose(log, validate, sanitize);

try {
  console.log(processInput("  Hello World  ")); // Logs: "Processed: Hello World", Returns: "Hello World"
} catch (error) {
  console.error(error.message);
}
