- requestAnimationFrame vs requestIdleCallback

| **Feature**          | **requestAnimationFrame**              | **requestIdleCallback**                      |
| -------------------- | -------------------------------------- | -------------------------------------------- |
| **Primary Use**      | Smooth animations                      | Background, non-critical tasks               |
| **When It Executes** | Before the next repaint                | During browser idle time                     |
| **Task Priority**    | High (linked to rendering)             | Low (executed when idle)                     |
| **Time Management**  | Synchronized with display refresh rate | Provides `deadline` to manage execution time |
| **Example Use Case** | Animating a moving object              | Logging analytics, prefetching data          |
