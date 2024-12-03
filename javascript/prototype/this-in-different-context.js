//"use strict";
// Please noted that "use strict", functionScope return "undefined"
function globalFunctionScope() {
  let name = "Hello World";
  console.log(this, this.name); //undefined
  //this -> node: Global
  //this -> javascript: window
}
globalFunctionScope();

//Global anonymous arrow function scope
(() => {
  console.log(this); // Node.js: {}, Browser (strict): undefined
  console.log(global); //Node.js: Global, Browser: undefined
})();

const objectScope = {
  name: "Hello World",
  showName() {
    console.log(this.name); //Hello World
  },
  showNameNestedObject() {
    return {
      name: "React",
      showNestedName() {
        console.log(this.name); //React
      },
      showNestedES6Name: () => {
        console.log(this.name); //Hello World
      },
    };
  },
  showNameArrow: () => {
    console.log(global, this, this.name); //{} , undefined
  },
  showNameNestedObjectArrow: () => ({
    name: "Vue",
    showNestedName: () => console.log(this, this.name), //undefined
    showNestedES5Name() {
      console.log(this.name); //Vue
    },
  }),
};
objectScope.showName();
objectScope.showNameArrow();
objectScope.showNameNestedObject().showNestedName();
objectScope.showNameNestedObjectArrow().showNestedName();

objectScope.showNameNestedObject().showNestedES6Name();
objectScope.showNameNestedObjectArrow().showNestedES5Name();

class ClassScope {
  constructor(name) {
    this.name = name;
  }

  showName() {
    console.log(this.name);
  }
}

const classScope = new ClassScope("Alice");
classScope.showName(); // 'Alice'
