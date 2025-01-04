### Redux

1. State Management - global singleton state -> **store**
2. Invoke by **Action** and **Dispatch**
3. Middleware 
    - async sideEffect operation(such as network http request)
4. Unidirectional data flow -> **action** -> **middleware** -> **reducer** -> **store** -> **view**
    - action: a function included param and pass into reducer
    - reducer: a function included **state**, action and eventually do an immutable update to store state object
    - store: store state object updated and react detected
    - view: react uses fiber tree and reconcilation algorithm(render,commit) to update DOM.


### CombineReducer

- Note: Please don't get confused by project uses CombineReducer, it may return the specific children state in CombineReducers,  but eventually the children state will be combined into root and uses an immutable update to create a new store state object.  (the core is still global store immutable update)

combineReducers takes a mapping of slice reducers (e.g., todos) and combines them into a single root reducer.
 

### Common Middleware
1. redux-thunk
    - simple asynchronous operation
2. redux-logger
    - record log to facilidate state management debugging
        - prev state
        - action
        - next state
3. redux-saga
    - manages complex asynchronous workflows in Redux
    - using generator functions
    - predicatble and testable side effects(such as http request) 

### redux-thunk vs redux-saga
when to choose redux-saga
1. Complex asynchronous logic (interdependent API calls or task cancellation)
 - Example: Trigger a chain of dependent API calls where the result of one determines the next, or cancel a long-running request when a new action is dispatched.

2. Background Tasks
 - long-lived background processes like webSocket handling or data polling

3. Testability
 - redux-saga provide testable side effect logic
 




### Reference
https://github.com/piotrwitek/react-redux-typescript-guide/blob/master/playground/src/features/todos/reducer.ts