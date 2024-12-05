## General Optimizaion Method

### Optimize Loading Time

- Minifiy/Compress assets (CSS/JavaScript/HTML/image) (静态资源优化)
- CDN （内容分发网络, 访问就近资源）
- Prefetching/Preloading/Async vs Defer/Lazy Loading (懒加载)

```html
<link rel="preload" href="main.css" as="style" />
<link rel="prefetch" href="next-page.html" />
<script src="script.js" async></script>
<img src="image.jpg" loading="lazy" alt="Lazy-loaded image" />
```

```javascript
import("./heavyComponent").then((module) => {
  const HeavyComponent = module.default;
});
```

- Caching (本地缓存)
  - Cache-Control
  - Service Workers
- Code-Spliting (代码分割)

### Optimize Rending Performance

- Memo

```javascript
const MemoizedComponent = React.memo(MyComponent);

const expensiveValue = useMemo(() => computeExpensiveValue(data), [data]);

const ItemList = React.memo(({ items }) => {
  console.log("ItemList rendered"); // Logs only when items prop changes
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
});
```

- Pure Function

```javascript
import React, { PureComponent } from "react";

class ItemList extends PureComponent {
  render() {
    console.log("ItemList rendered"); // Logs only when items prop changes
    return (
      <ul>
        {this.props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
}
```

- Debounce / Throttle

## Monitor and Improve Performance

- Lighthouse
  - First Contentful Paint (FCP)
    - first navigated to the page to when any part of the page's content is rendered on the screen.
  - Time to Interactive (TTI)
    - the time until a page is fully interactive
- Browser DevTools

  - Performance Tab
  - Network Tab

- Real User Monitoring (RUM)
  - New Relic
  - Datadog
  - Google Analytic
