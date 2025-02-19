### Phases of an Event in JavaScript (When Clicking a Button)

https://developer.mozilla.org/en-US/docs/Web/API/Event/eventPhase

1. Capturing Phase (window → document → html → body → parent → current)
2. Target Phase (current)
3. Bubling Phase (current → parent → body → html → document → window)

## Key Methods

| Method                                      | Effect                                                               |
| ------------------------------------------- | -------------------------------------------------------------------- |
| `event.stopPropagation()`                   | Stops bubbling, but other event handlers on the element still run    |
| `event.stopImmediatePropagation()`          | Stops bubbling and prevents other event handlers on the same element |
| `addEventListener("event", callback, true)` | Enables event capturing instead of bubbling                          |

### target vs currentTarget
