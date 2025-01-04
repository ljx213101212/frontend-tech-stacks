### Micro-Frontend Core principles
1. Decentralized Development
   - split single huge app into small frontend applications
   - team can focus on specific module for development and deployment.
2. Shared UI Components
   - can use different frameworks or libraries 
      - Shadow DOM: Encapsulates the CSS and DOM structure of a module, preventing it from affecting other parts of the application.
      - iFrames: Provides complete isolation for each module but comes with trade-offs like limited interactivity and performance overhead.
      - CSS Namespacing: Prefixing or scoping CSS rules to avoid conflicts.
   - seamless integration

### Module Federation

problem solved 
1. Dynamic Code Sharing
   - decoupling components into indiviual UI service
   - Reduced bundle size
   - Avoid version conflicts
2. Team Independence
   - Each team can focus on smaller scope of code base 
   - Improve development speed




### Reference
- CRA
   - https://github.com/module-federation/module-federation-examples/blob/master/cra/host/src/App.js

- vite
   - https://github.com/originjs/vite-plugin-federation/tree/main/packages/examples/react-vite