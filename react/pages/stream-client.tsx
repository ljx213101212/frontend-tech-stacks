// pages/stream-client-side.tsx
import React, { useEffect, useState } from 'react';

export default function StreamClientSide() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('/api/stream')
      .then((res) => res.text())
      .then((html) => setHtmlContent(html))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Client-Side Streamed Content Below:</h2>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}
