"use server";

import Link from "next/link";

const DemoPage = async () => {
  return (
    <>
      <Link href="/react/router">
        <button>Go to React Router Demo</button>
      </Link>
    </>
  );
};

export default DemoPage;
