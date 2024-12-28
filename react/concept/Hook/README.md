### React.memo vs PureComponent

| **Feature**        | **React.memo**                          | **PureComponent**                |
|--------------------|------------------------------------------|-----------------------------------|
| **Usage**          | Functional components.                  | Class components.                |
| **Comparison**     | Shallow comparison of props.            | Shallow comparison of props and state. |
| **Customization**  | Supports custom comparison function.    | No custom comparison support.    |
| **Preferred**      | For modern React projects with hooks.   | Rarely used in new projects.     |



### useTrasition vs useDeferredValue

| Feature            | useTransition                                                      | useDeferredValue                                |
|--------------------|--------------------------------------------------------------------|------------------------------------------------|
| **Purpose**        | Prioritizes urgent updates while deferring non-urgent ones.        | Defers a value to allow urgent updates to process first. |
| **Usage**          | For managing asynchronous UI transitions.                         | For deferring the computation of derived values. |
| **Primary Use Case**| Managing state updates in concurrent rendering for transitions like tab switches or route changes. | Delaying a value to prevent expensive recalculations or re-renders. |
| **Returns**         | `[isPending, startTransition]`: A boolean and a function to trigger the transition. | A deferred version of the input value that is updated later. |
| **Concurrency**     | Helps React split high-priority updates (e.g., user input) from low-priority updates (e.g., rendering a heavy UI). | Delays the application of derived state or UI until high-priority work is complete. |

