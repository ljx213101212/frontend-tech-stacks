// pages/api/stream.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import HelloStreaming from '@/app/nextjs/stream/HelloStreaming';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Make sure we’re returning HTML
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  // The server-rendered React element
  const element = <HelloStreaming />;

  // Initiate streaming
  const stream = renderToPipeableStream(element, {
    // Called as soon as the server has something to render
    onShellReady() {
      // Write the HTTP response status
      res.statusCode = 200;
      // Pipe the stream to the response
      stream.pipe(res);
    },
    onShellError(err) {
      // Handle streaming errors before anything is written
      console.error('Shell Error:', err);
      res.status(500).send('Something went wrong!');
    },
    onError(err) {
      // Called on errors that happen during rendering
      console.error('Streaming Error:', err);
    },
  });
}
