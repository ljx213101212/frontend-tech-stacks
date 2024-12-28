import React from 'react';

export default function Home({ message }: { message: string }) {
  return (
    <div>
      <h1>Welcome to Next.js Pre-rendering</h1>
      <p>{message}</p>
    </div>
  );
}

// Runs at build time to fetch data for prerendering
export async function getStaticProps() {
  return {
    props: {
      message: 'This page is statically generated at build time!'
    },
  };
}
