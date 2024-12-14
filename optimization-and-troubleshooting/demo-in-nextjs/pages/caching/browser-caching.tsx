import Head from "next/head";
import Image, { ImageLoaderProps } from "next/image";
import styles from "@/styles/browser-caching.module.css";
import useFetch from "@/hooks/useFetch";
import { useState } from "react";

const customLoader = ({ src }: ImageLoaderProps) => {
  return `${src}`;
};

//https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.12/addons/p5.sound.js
const BrowserCaching = () => {
  const [fileContent] = useFetch({ url: "/assets/public-caching.txt" });
  const [cdnContent] = useFetch({
    url: "https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.12/addons/p5.sound.js",
  });
  const [sensitiveContent] = useFetch({
    url: "/api/sensitive-data",
  });
  const [staleWhileRevalidateData] = useFetch({
    url: "/api/stale-while-revalidate-data",
  });

  const [counter, setCounter] = useState(0);

  return (
    <div className={styles.container}>
      <Head>
        <title>Browser Caching Demo</title>
        <meta
          name="description"
          content="A demo for browser caching with Next.js"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Browser Caching Demo</h1>
        <p className={styles.description}>
          This page demonstrates HTTP caching headers like Cache-Control,
          Expires, ETag, and Last-Modified.
        </p>

        <div>
          <h4>Image Sample (cup-black.avif)</h4>
          <Image
            loader={customLoader} //To apply my own Cache-Control
            src="/assets/cup-black.avif"
            alt="Example Image"
            width={100}
            height={100}
          />
        </div>
        <div className={styles.fileContent}>
          <h4>Static File Sample (public-caching.txt):</h4>
          <pre>{fileContent}</pre>
        </div>
        <div className={styles.fileContent}>
          <h4>CDN file Sample (p5.sound.js):</h4>
          <pre>{cdnContent}</pre>
        </div>
        <div className={styles.fileContent}>
          <h4>Sensitive Data Sample (sensitive-data):</h4>
          <pre>{sensitiveContent}</pre>
        </div>
        <div className={styles.fileContent}>
          <h4>Stale while revalidate Data Sample (sensitive-data):</h4>
          <pre>{staleWhileRevalidateData}</pre>
        </div>
      </main>

      <button onClick={() => setCounter((prev) => prev + 1)}>
        Trigger Re-Render {counter}
      </button>
    </div>
  );
};

export default BrowserCaching;
