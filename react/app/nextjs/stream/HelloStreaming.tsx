// components/HelloStreaming.tsx

'use client'
import React from 'react';

export default function HelloStreaming() {
  return (
    <div>
      <h1>Hello, Streaming!</h1>
      <p>This content is streamed via renderToPipeableStream.</p>
    </div>
  );
}
