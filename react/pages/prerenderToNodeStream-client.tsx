import React, { useEffect, useState } from 'react';

export default function StreamClientSide() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('/api/prerenderToNodeStream')
      .then((res) => res.text())
      .then((html) => setHtmlContent(html))
      .catch((err) => console.error(err));
  }, []);

  //DOMPurify
  //ReactHtmlParser
  return (
    <div>
      <h2>PrerenderToNodeStream Content Below:</h2>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}
