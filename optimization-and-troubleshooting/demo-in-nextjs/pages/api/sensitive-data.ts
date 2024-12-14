import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Set Cache-Control header to avoid caching
  res.setHeader("Cache-Control", "no-store");

  // Simulate sensitive data (e.g., user details, tokens, etc.)
  const sensitiveData = {
    secret: "Sensitive Information",
    timestamp: new Date().toISOString(),
  };

  res.status(200).json(sensitiveData);
}
