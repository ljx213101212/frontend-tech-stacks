### React 16
- 16.3
    - Fiber 
- 16.8
    - Hook


### React 17
https://juejin.cn/post/7212529038875443259

### React 18

- new Hooks
    - useTransition
    - useDeferredValue


### React 19
https://juejin.cn/post/7450836153258442788

- new Hooks
    - useOptimistic
       -  optimistically update the UI.
    - useActionState
        - allows you to update state based on the result of a form action.
    - useFormStatus
        - must be called from a component that is rendered inside a <form>.
- new API
    - use
        - read the value of a resource like a **Promise** or **context**
        - can invoke in if condition 
            - use is not a stateful, it does NOT maintain internal state or lifecycle logic
            - use works with promises(e.g for data fetching) and React's Suspense mechanism
    - prerender / prerenderToNodeStream

- Support
    - Support for preloading resources 
    - Support for Custom Elements 


    


### Reference
https://react.dev/blog
https://legacy.reactjs.org/blog/all.html/