- Reflow vs Repaint

| **Feature**          | **Reflow**                                 | **Repaint**                                |
| -------------------- | ------------------------------------------ | ------------------------------------------ |
| **Definition**       | Changes to layout, requiring recalculation | Changes to visual styles, no layout impact |
| **Examples**         | Adding/removing DOM elements, resizing     | Changing background or font color          |
| **Performance Cost** | High                                       | Moderate                                   |
| **Triggers**         | Layout-related styles (e.g., `width`)      | Visual-related styles (e.g., `color`)      |


- useTransition vs useDeferredValue
