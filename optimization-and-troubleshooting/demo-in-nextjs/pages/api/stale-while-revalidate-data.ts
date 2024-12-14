import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Set Cache-Control header with stale-while-revalidate
  res.setHeader(
    "Cache-Control",
    "public, max-age=6, stale-while-revalidate=30"
  );

  // Simulate data fetching
  const data = {
    message: "Hello, this is stale-while-revalidate data!",
    timestamp: new Date().toISOString(),
  };

  res.status(200).json(data);
}
