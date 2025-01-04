### Life Cycle
1. Component mount
    - constructor
    - getDerivedStateFromProps
    - render
    - componentDidMount
2. Component update
    - getDerivedStateFromProps
    - showComponentUpdate
    - render
    - getSnapShotBeforeUpdate
    - componentDidUpdate
3. Component unmount
    - componentWillUnmount


### Fiber vs Virtual DOM

Both are React internal data structure.
Fiber was introduced from React 16, Virtual DOM was introduced before React 16


| **Feature**           | **Virtual DOM**                         | **Fiber Tree**                                   |
|-----------------------|-----------------------------------------|-------------------------------------------------|
| **Structure**         | Immutable tree.                        | Linked-list-based tree structure.               |
| **Purpose**           | Efficient DOM updates.                 | Efficient, interruptible, and prioritized rendering. |
| **Concurrency**       | No concurrency; synchronous rendering. | Supports concurrent rendering and time-slicing. |
| **Diffing Algorithm** | Full diffing between old and new trees. | Incremental work units with fine-grained updates. |
| **State Handling**    | Stores minimal state in memory.         | Stores state, props, and DOM references in fibers. |
| **Performance**       | Suffers with large trees due to sync work. | Handles large trees better due to async capabilities. |
| **Flexibility**       | Rigid update cycles.                   | Allows pausing, resuming, and re-prioritizing tasks. |


Fiber keywords:  pausing(可中断), resuming, priority scheduling (优先级调度), Incremental work units (增量渲染), Fiber Node, time-slicing (时间片)


### Reconciliation (Fiber)

- (a) Render Phase (Reconciliation)
    - React creates a new Fiber Tree by reconciling the current Fiber Tree with the updated virtual DOM tree.
    - React determines what has changed (new components, updated components, removed components).
    - Time-Slicing - ensure it doesn't block main thread for too long (via via APIs like requestIdleCallback (before React 16) or MessageChannel)
    - No changes are made to the DOM during this phase.
- (b) Commit Phase
    - synchronous
    - Traverse fiber tree and adding, updating, or removing DOM nodes.
    - Triggering lifecycle methods like componentDidMount or componentDidUpdate, useEffect
   

### Time Slicing (时间切片)
[TODO]



### Why Fiber?
Update UI Effectively, Incremental work units,  pausing, resuming, priority scheduling.


