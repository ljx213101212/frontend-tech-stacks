## General Optimizaion Method

### Optimize Loading Time

- Minifiy/Compress assets (CSS/JavaScript/HTML/image) (静态资源优化)
- CDN （内容分发网络, 访问就近资源）
- Prefetching/Preloading (预加载)
- Async vs Defer (异步加载)
- Lazy Loading (懒加载)

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
- Code-Spliting (代码分割), TreeShaking
- Optimizing Image
- SSR / SSG

### Optimize Page Rending Strategy

- **Memo** and **PureComponent**

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

- **Debounce** / **Throttle**

- add **key** attribute

### Apply Cache / Caching Technique

1. Browser Caching

Reduce server load and speed up page load times for repeat visits.

HTTP Headers:

- Cache-Control: Defines caching policies for browsers.
- Example: Cache-Control: max-age=3600
- Expires: Sets an expiration date and time for cached resources.
- ETag: A unique identifier for resources to validate if they have changed.
- Last-Modified: Indicates when the resource was last updated.

2. Client-Side Caching

Offline-first applications and storing user-specific data.

- Service Workers:
  - Cache assets and APIs for offline access or faster load times.
- Local Storage/Session Storage:
  - Store key-value pairs for persistent or session-based data.
- IndexedDB:
  - Store larger datasets like user preferences or offline content.

3. Code-Level Caching
   Caching logic implemented directly in the application code.

- Memorization
  - React memo , useMemo, useCallback
- Lazy Loading
  - Load and cache data on-demand, then reuse it.

4. CDN(Content Delivery Network) Caching

cache static resources on servers distributed globally to reduce latency and improve load times.

- Edge Caching:
  - Caches resources at edge servers close to users.
- Cache Invalidation:
  - Purge outdated content when deploying updates.
- Geo-Based Caching:
  - Serve different content based on the user’s geographic location.

5. DNS Caching

Reduce latency during URL-to-IP address resolution.

- Browser DNS Cache:
  - Cache DNS lookups in the browser.
- System-Level DNS Cache:
  - Cache DNS results on the operating system.
- ISP DNS Cache:
  - Cache DNS queries at the Internet Service Provider level.

## Monitor Performance

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
