
import React from 'react';

export default function HelloSSR() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/styles.css"></link>
        <title>SSR</title>
      </head>
      <body>
          Hello SSR
      </body>
    </html>
  );
}
