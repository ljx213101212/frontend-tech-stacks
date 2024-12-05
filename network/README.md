## TCP (Transmission Control Protocol)

TCP is a connection-oriented protocol that provides reliable, ordered, and error-checked delivery of data between applications running on hosts communicating over an IP network.

Key features:

- Connection-oriented
- Reliable data transfer
- Flow control
- Congestion control

[Head-of-line blocking](https://www.youtube.com/watch?v=yM5t5jTv4uo&ab_channel=Petabridge) is a performance-limiting phenomenon that occurs when a line of packets is held up by the first packet in the line.

## UDP (User Datagram Protocol)

UDP is a connectionless protocol that provides a simple, unreliable message-passing between applications running on hosts communicating over an IP network.

Key features:

- Connectionless
- Unreliable data transfer (no guarantees of delivery, order, or error)
- No flow control or No congestion control
- Lower latency than TCP (faster than TCP)

## HTTP (Hypertext Transfer Protocol)

HTTP is an application-layer protocol for transmitting hypermedia documents, such as HTML.

### HTTP/1.0

- Introduced in 1996
- One request-response pair per TCP connection
- Connection closed after each request-response cycle

### HTTP/1.1

- Introduced in 1997
- Persistent connections (keep-alive): multiple request-response pairs over a single TCP connection
- Pipelining: allows sending multiple requests without waiting for responses
- Host header: enables virtual hosting
- Chunked transfer encoding
- Cache control mechanisms

```
+-----------+
|   HTTP    |
+-----------+
|    TCP    |
+-----------+
|    IP     |
+-----------+
|    MAC    |
+-----------+

```

### HTTP/2

Introduced in 2015 to address performance limitations of HTTP/1.1.

- Multiplexing: multiple requests and responses can be sent over a single TCP connection
- Header Compression: uses HPACK to compress headers
- Server Push: server can push resources to the client without the client explicitly requesting them
- Binary Protocol: translates messages into binary format for faster parsing and transmission
- Stream prioritization: allows clients to indicate which resources are more important

```
+-----------+
|   HTTP    |
+-----------+
| HPACK (Header Compression) |
+-----------+
|  Stream (Multiplexing)     |
+-----------+
|  TLS 1.2+ (Encrypted)      |
+-----------+
|    TCP    |
+-----------+
|    IP     |
+-----------+
|    MAC    |
+-----------+

```

### HTTP/3

Latest major version of HTTP, built on top of QUIC protocol instead of TCP.

[Cloudflare HTTP/3 explanation](https://www.cloudflare.com/en-gb/learning/performance/what-is-http3/)

- QUIC (Quick UDP Internet Connections)
  - Combines the cryptographic and transport handshakes (more secure)
  - 0-RTT (faster connection establishment)
  - Protection against HTTP/2 "Rapid Reset" distributed denial-of-service (DDoS) attacks
  - Uses UDP instead of TCP (Removes head-of-line blocking at the transport layer)
- Improved performance on poor network conditions
- Better mobile performance (handles network changes gracefully, such as switch between 4G ,5G and WIFI)

```
+-----------+
|   HTTP    |
+-----------+
| QPACK (Header Compression) |
+-----------+
| Stream (Multiplexing)      |
+-----------+
| QUIC (TLS 1.3 integrated)  |
+-----------+
|    UDP    |
+-----------+
|    IP     |
+-----------+
|    MAC    |
+-----------+

```

## HTTPS (HTTP Secure)

secure version of HTTP, encrypting all. (HTTP/2, HTTP/3 are HTTPs by default)

Key features:

- Encryption: Uses SSL/TLS to encrypt all.
- Authentication: Verifies the identity of the server
- Integrity: Detects any tampering with the transmitted data

Benefits:

- Protects sensitive information
- Improves SEO rankings

Implementation:

- Requires an SSL/TLS certificate
- Uses port 443 by default (instead of 80 for HTTP)
- Negotiates a secure connection using a TLS handshake

```
+-----------+
|   HTTP    |
+-----------+
|  SSL/TLS  |
+-----------+
|    TCP    |
+-----------+
|    IP     |
+-----------+
|    MAC    |
+-----------+

```

## XSS vs CSRF

- **XSS**: Exploits user input to inject and execute malicious JavaScript code in the browser.

  - How to avoid?
    - In HTTP Request Header
      - Add "HTTP only": Prevent JavaScript access to sensitive cookies.
      - Add "Secure": To make sure the cookie only pass-through in HTTPS site
    - Input Validation and Sanitization

- **CSRF**: Exploits a user's authenticated session to perform unauthorized actions, typically triggered via a malicious link or interaction.
  - Generate Anti-CSRF token and hidden in UI(client side), use this token for sensitive API
  - Add "Content Security Policy (CSP)" and "Same Site" cookie to avoid cookie to be sent to malicious server by Users interfaction at client site.
  - Server site to check Referrer/Origin from HTTP Request header
