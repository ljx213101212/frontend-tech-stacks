### Fix Memory problems

https://developer.chrome.com/docs/devtools/memory-problems/

# How to optimize the first contentful paint (FCP)

1. Resource opmization

   - minimize the bundlle size (code spliting, tree-shaking, PurgeCSS)
   - compress images/ use responsive images

2. Assets loading method optimization
   - Defer non-essential scripts using the defer or async attributes.
   - lazy loading by dynamic import, Intersection Observer API
   - preredering HTML
