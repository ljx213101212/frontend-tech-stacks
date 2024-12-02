### TODO

### Next.js

Next.js is a powerful React framework that enhances the development experience with server-side rendering and static site generation capabilities.

#### Key Concepts

- **Server Components (Server-Side SSR)**: Render only on the server.
- **Client Components (Client-site CSR)**: Render on the server for initial HTML, then hydrate on the client.
- **Static-Side (SSG)**: Pre-rendered pages in Build time for performance and SEO.
- **Incremental Static Regeneration (ISR)**: (similair to SSG) Updates static content periodically without rebuilding the entire app.
- **Middleware**: Custom request handling at the edge.
- **File-Based Routing**: Define routes using files in the pages/ directory.
- **API Routes**: Build backend APIs directly in the project.
- **SEO**: Most web engine crawlers cannot properly execute JavaScript code, which means client-side rendered content may not be indexed. However, web crawlers can capture the first contentful paint of a page, increasing the likelihood of the page being ranked by search engines.

### Routing

Understanding the routing mechanisms is crucial for building efficient React applications.

- **react-router**
- **next/router**

#### TODO

- [ ] Understand the mechanism of Next Router vs React Router DOM
- [ ] Implement a Minimum Viable Product (MVP) of a router to grasp the root causes of conflicts between different routing solutions

### React/React DOM

#### Key Concepts

- **react** Core React library for building components, managing state, and handling lifecycle.

  - **Virtual DOM**: A lightweight tree-like data structure used by React's **reconciliation algorithm**. It compares the **current Virtual** DOM with **a new version**, determining the most efficient way to update the actual DOM. This process optimizes rendering by updating only the necessary parts of the page.

- **react-dom** DOM : renderer for React, handling rendering and hydration. In NextJs, it was Used for client-side rendering and hydration in SSR.
