// A Promise represents a value that may be available now,
// or in the future, or never. Internally,
// it has three states: **pending**, **fulfilled**, and **rejected**.
// When a Promise is created, it starts in the pending state.
// It transitions to fulfilled when the operation completes successfully and rejected
// if it encounters an error. .then and .catch handlers are queued in a microtask queue, ensuring they execute after the current event loop.
// 3/12/2024

const MyPromiseState = {
  pending: "pending",
  fulfilled: "fulfilled",
  rejected: "rejected",
};

class EventPubSub {
  constructor() {
    this.event = {};
  }

  subscribe(eventName, callback) {
    if (!(eventName in this.event)) {
      this.event[eventName] = [];
    }
    this.event[eventName].push(callback);
  }

  publish(eventName, param) {
    if (eventName in this.event) {
      this.event[eventName].forEach((callback) => {
        callback(param);
      });
    }
  }
}

class MyPromise {
  constructor(executor) {
    this.executor = executor;
    this.fulfilledValue = null;
    this.rejectedValue = null;
    this.eventPubSub = new EventPubSub();
    this.initEventSubcription();
    this.eventPubSub.publish(MyPromiseState.pending);
    this.executor(this.resolve.bind(this), this.reject.bind(this));
  }

  initEventSubcription() {
    this.eventPubSub.subscribe(
      MyPromiseState.pending,
      this.pendingHandler.bind(this)
    );
    this.eventPubSub.subscribe(
      MyPromiseState.fulfilled,
      this.fulfilledHandler.bind(this)
    );
    this.eventPubSub.subscribe(
      MyPromiseState.rejected,
      this.rejectedHandler.bind(this)
    );
  }

  then(fulfilledFn) {
    if (this.fulfilledValue && !this.rejectedValue) {
      this.fulfilledValue = fulfilledFn(this.fulfilledValue);
    }
    return this;
  }
  catch(rejectedFn) {
    if (this.rejectedValue && !this.fulfilledValue) {
      this.rejectedValue = rejectedFn(this.rejectedValue);
    }
    return this;
  }

  pendingHandler() {
    this.fulfilledHandler = null;
    this.rejectedHandler = null;
  }

  fulfilledHandler(value) {
    this.fulfilledValue = value;
  }

  rejectedHandler(value) {
    this.rejectedValue = value;
  }

  resolve(value) {
    if (this.fulfilledValue === null && this.rejectedValue === null) {
      this.eventPubSub.publish(MyPromiseState.fulfilled, value);
    }
  }

  reject(reason) {
    if (this.fulfilledValue === null && this.rejectedValue === null) {
      this.eventPubSub.publish(MyPromiseState.rejected, reason);
    }
  }
}

new MyPromise((resolve, reject) => {
  //console.log("[MyPromise] - constructor");
  reject("reject value");
  resolve("resolve value");
})
  .then((value) => {
    console.log("then - ", value);
    return "continuous then: " + value;
  })
  .then((value) => {
    console.log("then #2 - ", value);
  })
  .catch((reason) => {
    console.log("catch - ", reason);
  });
