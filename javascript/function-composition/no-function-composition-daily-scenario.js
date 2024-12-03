function capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  
  function addTitle(name) {
    return `Mr. ${name}`;
  }
  
  function greetUser(name) {
    return `Hello, ${name}!`;
  }
  
  // Explicitly calling each function
  const user = "john";
  const capitalized = capitalize(user);
  const titled = addTitle(capitalized);
  const greeting = greetUser(titled);
  
  console.log(greeting); // "Hello, Mr. John!"
  