//Sample for the most reliable way to check build-in types

function checkType(value) {
  console.log(Object.prototype.toString.call(value));
  return Object.prototype.toString.call(value).slice(8, -1);
}

// Usage
console.log(checkType(123)); // "Number"
console.log(checkType("Hello")); // "String"
console.log(checkType(true)); // "Boolean"
console.log(checkType([])); // "Array"
console.log(checkType({})); // "Object"
console.log(checkType(null)); // "Null"
console.log(checkType(undefined)); // "Undefined"
console.log(checkType(new Date())); // "Date"
console.log(checkType(() => {})); // "Function"

//Sample for typeof can be ambiguous
console.log(typeof []); // "object" (not "array")
console.log(typeof null); // "object" (not "null")

//Sample for instanceof and constructor in ES5 function can be ambiguous
//instanceof and contructor are good fit in Custom class/type
function CustomType() {}
const instance = new CustomType();

class CustomTypeES6 {}
const instanceES6 = new CustomTypeES6();

console.log(instance instanceof CustomType); // true
console.log(instance instanceof Object); // true
console.log(instanceES6 instanceof CustomTypeES6); //true

console.log(instance.constructor, instance.constructor === CustomType); // true
console.log(instance.constructor, instance.constructor === Object); // false
console.log(instanceES6.constructor, instanceES6.constructor === CustomTypeES6); //true
