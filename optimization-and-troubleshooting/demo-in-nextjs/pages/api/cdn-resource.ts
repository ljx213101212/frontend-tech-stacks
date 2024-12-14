import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.12/addons/p5.sound.js";

  try {
    const response = await fetch(url);
    const content = await response.text();

    // Set Cache-Control headers
    res.setHeader(
      "Cache-Control",
      "public, max-age=60, s-maxage=300" // 60s for browser, 300s for shared caches
    );

    res.status(200).send(content);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch resource" });
  }
}
