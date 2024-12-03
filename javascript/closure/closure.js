const counterClosure = (base) => {
    let multiplier = 1; // Default multiplier

    // Return an object with methods to manage the counter
    return {
        setMultiplier: (newMultiplier) => {
            multiplier = newMultiplier;
        },
        increase: (num) => {
            base += num * multiplier;
            return base;
        },
        decrease: (num) => {
            base -= num * multiplier;
            return base;
        },
        value: () => {
            return base;
        }
    };
};

// Initialize the closure with a base value
const closure = counterClosure(100);

// Set the multiplier and perform operations
closure.setMultiplier(1.1);
console.log(closure.increase(10)); // 111

closure.setMultiplier(0.9);
console.log(closure.decrease(5)); // 106.5

console.log(closure.value()); // 106.5


