### Improvements plan

1. Synchronous vs. Asynchronous Execution

- .then() and .catch() are executed synchronously which are supposted to be asynchrounous.
- suggestion

```
resolve(value) {
  if (this.state === MyPromiseState.pending) {
    this.state = MyPromiseState.fulfilled;
    this.fulfilledValue = value;
    queueMicrotask(() => {
      this.fulfilledCallbacks.forEach((callback) => callback(value));
    });
  }
}

```

2. Chaining Promises

- .then() method returns this, which is the same Promise instance. In native Promises, .then() returns a new Promise, enabling the chaining of Promises.
- suggestion

```
then(onFulfilled, onRejected) {
  return new MyPromise((resolve, reject) => {
    // Handle fulfilled state
    if (this.state === MyPromiseState.fulfilled) {
      queueMicrotask(() => {
        try {
          const result = onFulfilled ? onFulfilled(this.fulfilledValue) : this.fulfilledValue;
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });
    }
    // Handle rejected state
    else if (this.state === MyPromiseState.rejected) {
      queueMicrotask(() => {
        if (onRejected) {
          try {
            const result = onRejected(this.rejectedValue);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        } else {
          reject(this.rejectedValue);
        }
      });
    }
    // Handle pending state
    else {
      this.fulfilledCallbacks.push((value) => {
        try {
          const result = onFulfilled ? onFulfilled(value) : value;
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });
      this.rejectedCallbacks.push((reason) => {
        if (onRejected) {
          try {
            const result = onRejected(reason);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        } else {
          reject(reason);
        }
      });
    }
  });
}

```

3. Error Handling

- doesn't correctly propagate errors that might occur in the executor function or in the handlers passed to .then() and .catch().
- suggestion

```
constructor(executor) {
  // ...
  try {
    executor(this.resolve.bind(this), this.reject.bind(this));
  } catch (error) {
    this.reject(error);
  }
}

```

4. Promise A+ Specification

- States and State Transitions: Ensure that once a Promise is fulfilled or rejected, it cannot change state.
- Resolution Procedure: Handle cases where the value resolved is a Promise itself.
- Thenable Detection: Support for interop with other Promise-like objects.

5. Option: use mutationObserver for pub-sub pattern implementation

- https://github.com/stefanpenner/es6-promise/blob/f97e2666e6928745c450752e74213d2438b48b4c/lib/es6-promise/asap.js
