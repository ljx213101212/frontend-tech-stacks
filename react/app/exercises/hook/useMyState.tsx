function reactRender() {
  console.log("React is rendering the page");
}

function createUseState() {
  type T = any;
  let states: T[] = [];
  let currentIndex = 0;

  function useState(initialValue: T) {
    const index = currentIndex;

    if (states[index] === undefined) {
      states[index] = initialValue;
    }

    const setState = (newValue: T) => {
      states[index] =
        typeof newValue === "function" ? newValue(states[index]) : newValue;
      reactRender();
    };

    currentIndex++;
    return [states[index], setState];
  }
  return { useState };
}

export { createUseState };
