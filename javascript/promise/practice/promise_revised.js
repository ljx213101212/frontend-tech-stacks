const MyPromiseState = {
  pending: "pending",
  fulfilled: "fulfilled",
  rejected: "rejected",
};

class MyPromise {
  constructor(executor) {
    this.state = MyPromiseState.pending;
    this.fulfilledValue = null;
    this.rejectedValue = null;
    this.fulfilledCallbacks = [];
    this.rejectedCallbacks = [];

    const resolve = (value) => {
      if (this.state === MyPromiseState.pending) {
        this.state = MyPromiseState.fulfilled;
        this.fulfilledValue = value;
        this.fulfilledCallbacks.forEach((callback) => callback(value));
      }
    };

    const reject = (reason) => {
      if (this.state === MyPromiseState.pending) {
        this.state = MyPromiseState.rejected;
        this.rejectedValue = reason;
        this.rejectedCallbacks.forEach((callback) => callback(reason));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      const fulfilledTask = () => {
        queueMicrotask(() => {
          try {
            const result = onFulfilled
              ? onFulfilled(this.fulfilledValue)
              : this.fulfilledValue;
            resolve(result);
          } catch (error) {
            reject(error);
          }
        });
      };

      const rejectedTask = () => {
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
      };

      if (this.state === MyPromiseState.fulfilled) {
        fulfilledTask();
      } else if (this.state === MyPromiseState.rejected) {
        rejectedTask();
      } else {
        this.fulfilledCallbacks.push(fulfilledTask);
        this.rejectedCallbacks.push(rejectedTask);
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }
}

new MyPromise((resolve, reject) => {
  //reject("reject value");
  resolve("resolve value");
})
  .then((value) => {
    console.log("then - ", value);
    return "continuous then: " + value;
  })
  .then((value) => {
    console.log("then #2 - ", value);
  });
// .catch((reason) => {
//   console.log("catch - ", reason);
// });
