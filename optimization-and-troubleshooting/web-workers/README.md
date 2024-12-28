### Types of Web Workers
- Dedicated Workers:
    - A single worker dedicated to one script or application. Communicates directly with the main thread.
    - Can put in src/public folder (handled by Webpack as client-side bundle)
- Shared Workers:
    - Can be shared among multiple scripts or windows. Useful for shared resources, like a WebSocket connection.
    - Can put in src/public folder (handled by Webpack as client-side bundle)
- Service Workers:
    - Specialized workers that act as a proxy between the browser and the network. Used for offline functionality, caching, and push notifications.
    - must put in public folder (Browser requires it to located **at or above** the scope it will control, so service-worker.js should put in public root path)

### Debug Web workers 

why console.log doesn't work in Web Workers  -> because they are not running the main UI thread.

- Shared workers
    - chrome://inspect/#workers -> inspect -> now you can see the console.log
- Service Workers
    - chrome://inspect/#service-workers -> inspect




