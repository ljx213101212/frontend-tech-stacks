### Common Scenarios of Memory Leaks

- Common Scenarios of Memory Leaks
- Undeclared global variables.
- Closures holding unnecessary references.
- Event listeners not removed.
- Detached DOM nodes with lingering references.
- Uncleared timers or callback functions.
- Circular references in data structures.


### How to prevent Memory Leaks

Avoid Undeclared Global Variables:
- Always declare variables using let, const, or var.
Clean Up References:
- Remove unused references, such as closure variables or object properties.
Remove Event Listeners:
- Use removeEventListener to detach unused event listeners.
Manage Timers and Callbacks:
- Use clearInterval and clearTimeout appropriately.
Use Weak References:
- Use WeakMap and WeakSet, as they allow objects to be garbage-collected when no other references exist.
Use Tools for Detection:
- Use browser developer tools (e.g., Chrome's Memory panel) to analyze and detect memory leaks.
