### Browser render steps

1. HTML Parsing → DOM Tree.
2. CSS Parsing → CSSOM Tree.
3. DOM + CSSOM → Render Tree.
4. Layout → Element positions and sizes.
5. Painting → Pixel-level details.
6. Compositing → Final rendering on the screen.

### Reflow vs Repaint

| **Feature**          | **Reflow**                                 | **Repaint**                                |
| -------------------- | ------------------------------------------ | ------------------------------------------ |
| **Definition**       | Changes to layout, requiring recalculation | Changes to visual styles, no layout impact |
| **Examples**         | Adding/removing DOM elements, resizing     | Changing background or font color          |
| **Performance Cost** | High                                       | Moderate                                   |
| **Triggers**         | Layout-related styles (e.g., `width`)      | Visual-related styles (e.g., `color`)      |

### when to re-render?
1. Component props/states was mutated.
2. Context value was mutated, components which are using this Content value will be re-rendered.
3. When parent component re-rendered, all children components will be re-rendered, and eventually formed a re-render link.
