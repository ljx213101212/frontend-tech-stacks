## Event Loop

#### Key Components:

1. Call Stack

- Executes synchronous code.

2. Microtask Queue

- Handles microtasks—tasks that should be executed immediately after the current operation completes but before the next event is processed.
- example:
  - Promise callbacks (.then(), .catch(), .finally())
  - MutationObserver callbacks
  - queueMicrotask function
- Behavior: Drained entirely before the Event Loop proceeds to the Macrotask Queue.

3. Macrotask (Callback) Queue

- Handles macrotasks—tasks that are scheduled to run after the current code execution completes.
- example:
  - setTimeout, setInterval
  - I/O operations
  - User interactions (e.g., clicks, key presses)
  - setImmediate (Node.js)
- Behavior: Processes one macrotask at a time. After each macrotask, the Event Loop checks the Microtask Queue.

4. Event Loop

- Continuously monitors and coordinates the execution of tasks between the Call Stack, Microtask Queue, and Macrotask Queue.

Operation Sequence:

1. Execute Synchronous Code: Runs all code on the Call Stack until it's empty.
2. Drain Microtask Queue: Executes all pending microtasks.
3. Process Macrotask: Executes the next macrotask from the Macrotask Queue.
4. Repeat: The loop continues indefinitely, ensuring tasks are handled efficiently.

#### Example code

```javascript
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
```

Expected Output:

```
Start
End
Microtask 1
Microtask 2
Macrotask 1
Microtask 3
Macrotask 2
```

Visual Representation

```
+-----------------------------+
|        Call Stack           |
|-----------------------------|
| Executes 'Script Start'     | --> Logs "Script Start"
| Schedules Macrotask 1        |
| Schedules Macrotask 2        |
| Schedules Microtask 1        |
| Schedules Microtask 2        |
| Executes 'Script End'        | --> Logs "Script End"
+-----------------------------+
               |
               v
+-----------------------------+
|      Microtask Queue        |
|-----------------------------|
| Microtask 1                 | --> Logs "Microtask 1"
| Microtask 2                 | --> Logs "Microtask 2"
+-----------------------------+
               |
               v
+-----------------------------+
|   Macrotask (Task) Queue    |
|-----------------------------|
| Macrotask 1 (setTimeout)    | --> Logs "Macrotask 1"
| Macrotask 2 (setTimeout)    | --> Logs "Macrotask 2"
+-----------------------------+
               |
               v
+-----------------------------+
|         Event Loop          |
|-----------------------------|
| 1. Execute Call Stack       |
| 2. Drain Microtask Queue    |
| 3. Execute Macrotask 1      |
|    - Enqueue Microtask 3    |
| 4. Drain Microtask Queue    |
|    - Execute Microtask 3    |
| 5. Execute Macrotask 2      |
| 6. Repeat                   |
+-----------------------------+

```

#### Answer in Interview

```
The Event Loop is JavaScript’s mechanism for handling asynchronous operations in its single-threaded environment, ensuring responsive execution.
It continuously monitors the call stack, the Microtask Queue, and the Macrotask Queue. When the call stack is empty, the Event Loop first processes all microtasks from the Microtask Queue. After draining the microtasks, it executes the next macrotask from the Macrotask Queue, one at a time.  This prioritization ensures that the main thread remains responsive to user interactions, API calls, and timer functions without being blocked by ongoing tasks.
```