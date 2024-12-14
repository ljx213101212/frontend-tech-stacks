## Page Router vs App Router

| **Feature**            | **Pages Router**                          | **App Router**                          |
|-------------------------|-------------------------------------------|-----------------------------------------|
| **Directory**          | `pages/`                                  | `app/`                                  |
| **React Components**   | CSR, SSR                                  | React Server Components (RSC)          |
| **Data Fetching**      | `getStaticProps`, `getServerSideProps`     | Built-in async fetch APIs               |
| **Layouts**            | Custom `_app.js` or wrappers              | Nested `layout.js` files                |
| **SEO**                | `_document.js`                            | Built-in `metadata` API                 |
| **Use Case**           | Legacy apps                               | Modern apps with advanced needs         |
