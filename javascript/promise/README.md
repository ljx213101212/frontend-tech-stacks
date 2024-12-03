## Promise Mechanism

A Promise represents a value that may be available now, or in the future, or never. Internally, it has three states: **pending**, **fulfilled**, and **rejected**. When a Promise is created, it starts in the pending state. It transitions to fulfilled when the operation completes successfully and rejected if it encounters an error. .then and .catch handlers are queued in a microtask queue, ensuring they execute after the current event loop.

## [TODO] Implement promise and understand the promise mechanism

## [TODO] Try to understand the connection between the pub-sub pattern and the principles underlying Promises

[Implementation](promise.js)
