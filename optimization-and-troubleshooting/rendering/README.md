### Browser render steps

1. HTML Parsing → DOM Tree.
2. CSS Parsing → CSSOM Tree.
3. DOM + CSSOM → Render Tree.
4. Layout → Element positions and sizes. (**Reflow**) - runing on UI main thread
5. Painting → Pixel-level details. (**Repaint**) - runing on UI main thread
6. Compositing → Final rendering on the screen. (**Composition** -  runing individual thread)

(because reflow and repaint are tighyly coupled with DOM and CSSOM, they cannot easily offload to seperate threads)

### DOM 
The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. 

### CSSOM
a tree structure that represents the styles applied to a webpage

- document.CSSStyleSheet
 - CSSStyleSheet
  - CSSStyleRule
    - CSSStyleDeclaration


### Reflow vs Repaint

| **Feature**          | **Reflow**                                 | **Repaint**                                |
| -------------------- | ------------------------------------------ | ------------------------------------------ |
| **Definition**       | Changes to layout, requiring recalculation | Changes to visual styles, no layout impact |
| **Examples**         | Adding/removing DOM elements, resizing     | Changing background or font color          |
| **Performance Cost** | High                                       | Moderate                                   |
| **Triggers**         | Layout-related styles (e.g., `width`)      | Visual-related styles (e.g., `color`)      |

#### how to reduce reflow
- Minimize frequent DOM manipulations by using **document fragments** or **batch operations**
- **Avoid** applying styles one by one; instead, use **classList** or pre-defined CSS rules to apply changes in bulk.
- **Avoid** Frequent Reads and Writes of **Layout Properties**
- Use transform and opacity for Animations
- Leverage **will-change** for Pre-Optimization


### when to re-render?
1. Component props/states was mutated.
2. Context value was mutated, components which are using this Content value will be re-rendered.
3. When parent component re-rendered, all children components will be re-rendered, and eventually formed a re-render link.


### will-change
1. elevate this element into **compositing** layer
2. **don't overuse** and it may consume lots of resources.


### <link> vs <script>
- link
  - load css
  - **block rendering** until css is applied
  - Use **preload** or **media="print"** for non-blocking loading.

- script
  - load javascript
  - **block HTML parsing** until script is executed
  - Use **async** or **defer** to avoid blocking.