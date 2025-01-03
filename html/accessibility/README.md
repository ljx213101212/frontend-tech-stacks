## Key Concepts

1. Semantic tags <header>, <nav>.
2. ARIA to enhance the accessibility of dynamic and interactive content.
3. Keyboard navigation (tabindex)

## Constrast Ratio

## Common ARIA Attributes

attributes enhance the accessibility of web content, especially for users relying on assistive technologies (e.g., screen readers).

```javascript
<div role="button" tabindex="0">
  Click me
</div>
<div aria-hidden="true">Hidden content</div>
<li role="option" aria-selected="true">Option 1</li>
<button aria-label="Submit form">✔</button>
<input aria-describedby="error-message"><span id="error-message">Invalid email address</span>
<div aria-live="polite">Message sent successfully.</div>
<button aria-haspopup="true" aria-expanded="false">Options</button>
...
```

## Reference

- Basic

  - https://www.w3.org/WAI/fundamentals/

- Full Accessibility
  - https://www.w3.org/WAI/standards-guidelines/
