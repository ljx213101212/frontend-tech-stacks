import React from 'react';
import HelloSSR from "@/app/nextjs/ssr/SSR";
import type { NextApiRequest, NextApiResponse } from "next";
import { prerender, prerenderToNodeStream } from "react-dom/static";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const element = <HelloSSR />;

  const { prelude } = await prerenderToNodeStream(element, {
    bootstrapScripts: ["/main.js"],
  });

  response.setHeader('Content-Type', 'text/html');
  prelude.pipe(response);
}
