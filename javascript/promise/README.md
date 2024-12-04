## Promise

A Promise represents a value that may be available now, or in the future, or never. Internally, it has three states: **pending**, **fulfilled**, and **rejected**. When a Promise is created, it starts in the pending state. It transitions to fulfilled when the operation completes successfully and rejected if it encounters an error. .then and .catch handlers are queued in a microtask queue, ensuring they execute after the current event loop.

### Microtask Scheduleing

| **Feature**              | **Early Chrome**                                          | **Modern Chrome**                                         |
| ------------------------ | --------------------------------------------------------- | --------------------------------------------------------- |
| **Microtask Scheduling** | Used `MutationObserver`.                                  | Uses `queueMicrotask`.                                    |
| **Performance**          | Overhead due to DOM manipulation with `MutationObserver`. | Lightweight and efficient with `queueMicrotask`.          |
| **Reason for Change**    | `MutationObserver` was a workaround.                      | `queueMicrotask` is specifically designed for microtasks. |

## [TODO] Implement promise and understand the promise mechanism

## [TODO] Try to understand the connection between the pub-sub pattern and the principles underlying Promises

[Implementation](promise.js)

## Promise Implementation samples

- **MutationObserver**

  - https://github.com/stefanpenner/es6-promise/blob/f97e2666e6928745c450752e74213d2438b48b4c/lib/es6-promise/asap.js

- **queueMicrotask**

  - https://github.com/mitchell-cheng/JavaScript-Coding/blob/main/Async/Promise/A%2BPromise%20with%20finally/a%2BPromiseWithFinally.js

- **ajax**
  - https://github.com/stackp/promisejs/blob/master/promise.js

## Reference

https://www.youtube.com/watch?v=1l4wHWQCCIc&ab_channel=WebDevSimplified
