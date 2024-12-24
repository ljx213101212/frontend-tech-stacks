### Browser Caching

#### HTTP Response Header
1. Cache-Control: Defined caching policies with public, max-age, and imuutable directives
    - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control
2. Expires: Set an absolute expiration time for resources
If the cache is not expriration
  - direct fetch from **disk cache** or **memory cache**
 

3. Last-Modified: Indicated the last modification date of resources for validation.
4. ETags: Utilized unique identifiers to validate resource freshness.

If the cache is not expriration or not modified, the sever returns
 - 304 Not Modified 

#### HTTP Request Header
1. **If-Modified-Since** 
2. **If-None-Match**


### Common Cache-Control Directives

1. public: Indicates that the response may be cached by any cache, including browsers and intermediary caches (like CDNs).
2. private: Specifies that the response is intended for a single user and should not be stored by shared caches (e.g., proxies).
3. no-cache (**don't misunderstand**): Forces caches to submit the request to the origin server for validation before releasing a cached copy.
4. no-store: Instructs caches not to store any part of the request or response.
5. max-age=<seconds>: Specifies the maximum amount of time a resource is considered fresh. After this period, the cache must revalidate the resource.
6. s-maxage=<seconds>: Similar to max-age but specifically for shared caches (e.g., CDNs). Overrides max-age for shared caches.
7. must-revalidate: Indicates that once a resource becomes **stale**, caches must not use it without successful validation with the origin server.
8. proxy-revalidate: Similar to must-revalidate but only applies to shared caches.
9. immutable: Suggests that the resource will not change over time, allowing browsers to avoid revalidation.
10. stale-while-revalidate=<seconds>: Allows caches to serve stale content while asynchronously revalidating it in the background.
11. stale-if-error=<seconds>: Permits serving stale content when an error occurs during validation.

### Validation Mechanism

1. From the Client (Request)

- If-Modified-Since

```http
If-Modified-Since: Mon, 11 Dec 2023 12:34:56 GMT
```

- If-None-Match

```http
If-None-Match: lCbueQCmvX_C2og7NHmhRgmeFEgW4iK07DJC8gOZ8G0
```

2. From the Server:

- Last-Modified

```http
Last-Modified: Mon, 11 Dec 2023 12:34:56 GMT
```

- ETag

```http
Etag: lCbueQCmvX_C2og7NHmhRgmeFEgW4iK07DJC8gOZ8G0
```

### Common Best Practices

1. Leverage Immutable Caching for static Assets

Static assets like images, CSS, and JavaScript files rarely change and are often versioned via filenames.

```http
Cache-Control: public, max-age=31536000, immutable
```

2. Differentiate Between Browser and Shared Caches

Browser caches and shared caches (like CDNs) have different requirements.

```http
Cache-Control: public, max-age=60, s-maxage=300
```

### Reference

https://nextjs.org/blog/our-journey-with-caching
