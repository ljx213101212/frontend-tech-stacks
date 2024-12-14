import { headers } from 'next/headers';

export const revalidate = 60;

export async function GET() {
  const data = await fetch('https://api.vercel.app/blog');
  const posts = await data.json();

  const referer = (await headers()).get('referer') || '';

  return Response.json(posts, {
    status: 200,
    headers: {
      Referer: referer,
      "Cache-Control": "public, max-age=120, stale-while-revalidate=66",
    },
  });
}
