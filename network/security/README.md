### Content Security Policy (CSP)
Discuss with DevOps team and add headers to improve secuirty

- CSP
Add CSP to All Web pages service HTML (CSP only applicable to HTML content)
```http
Content-Security-Policy: 
  default-src 'self'; 
  script-src 'self' https://trusted-cdn.com; 
  connect-src 'self' https://auth.myapp.com; 
  object-src 'none'; 
  frame-ancestors 'none';
```
- default-src 'self': By default, all resources must come from the same origin.
- script-src 'self' https://trusted-cdn.com: Only allow scripts from your domain and a trusted CDN.
- connect-src 'self' https://auth.myapp.com: Allow network requests to your own domain and authentication server.
- object-src 'none': Disables potentially dangerous plugins.
- frame-ancestors 'none': Prevents clickjacking attacks by disallowing your app from being embedded in iframes.


### HTTP only / Secure / Same Site

- HTTP only
Prevent JavaScript access to sensitive cookies.
- Secure
To make sure the cookie only pass-through in HTTPS site
- Same Site
    - Lax (default)
        - Suitable for cookies used in **non-sensitive** scenarios, such as session maintenance for logged-in users.
        - **Allows external links** to your site to function without losing context.
    - Strict
        - Best for sensitive cookies, such as those used in banking or authentication, where cross-site usage is unnecessary. (**avoid CSRF**)
    - None
        - Used when **third-party cookies** are necessary, such as for federated login (e.g., OAuth flows) or embedding cross-site iframes that rely on cookies.

```
Set-Cookie: sessionToken=abc123; SameSite=Lax; Secure; HttpOnly
```


### Hybrid LocalStorage and SessionStorage usage

1. SessionStorage for Sensitive Operations
- ensuring that these tokens are cleared automatically when the browser tab is closed.
- store **access_token** which is sensitive data

2. LocalStorage for long-term tokens
- store **refresh_token** , which is limited priviledges.

Access Token Workflow:
```
A user logs in, and the server issues an access token and a refresh token.
The access token is stored in SessionStorage, enabling secure access to APIs during the session.
If the access token expires while the session is still active, the application uses the refresh token from LocalStorage to get a new access token.
```
Refresh Token Workflow:
```
Refresh tokens are stored in LocalStorage with limited privileges:
They can only interact with the authentication server.
They cannot access user data or APIs directly.
If the user remains inactive for an extended period, they may need to log in again, especially if the refresh token is also expired.
```

Enhancements for Security:
- HttpOnly Cookies: Instead of LocalStorage, consider storing refresh tokens in secure, HttpOnly cookies to mitigate XSS entirely.
- CORS and SameSite Policies: Enforce strict cross-origin policies to reduce CSRF risks when using cookies.
- Expiration and Revocation: Always set short lifespans for tokens and provide mechanisms for revocation in case of compromise.

