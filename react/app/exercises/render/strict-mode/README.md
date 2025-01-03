### Why need to render two times?
- To detect side effects during rendering.
- To verify that components are pure (i.e., they do not modify state or cause unintended side effects during rendering).
- To check the correctness of lifecycle methods (e.g., useEffect cleanup).

#### Summary

React Strict Mode renders the component twice during development by performing the following sequence:

1. Mount -> Unmount:
This simulates a complete mount and unmount lifecycle. It allows React to:
Detect any side effects caused by improper lifecycle methods or useEffect logic.
Verify that resources (e.g., subscriptions, event listeners) are properly cleaned up during unmount.

2. Mount (Real Render):
After the simulated lifecycle, React performs the actual mount. This is the render that persists and will be used during the app's normal operation.

