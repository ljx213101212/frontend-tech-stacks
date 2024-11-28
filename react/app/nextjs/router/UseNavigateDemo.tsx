"use client";
import { useRouter, usePathname } from "next/navigation";
//Please note that "react-router will create confliction with Next.js router"
export default function UseNavigateDemo() {
  const router = useRouter();
  const pathname = usePathname();

  const navigateWithPush = () => {
    router.push(`${pathname}/new-page`); // add new page to the stack, when you hit back button, you will go back to the previous page.
  };

  const navigateWithReplace = () => {
    router.replace(`${pathname}/new-page`); // replace the current page with the new page, when you hit back button, you will go back to the page before previous page.
  };

  return (
    <div>
      <button onClick={navigateWithPush}>Navigate with Push</button>
      <button onClick={navigateWithReplace}>Navigate with Replace</button>
    </div>
  );
}
