import { prefetchDNS, preconnect, preload, preinit } from "react-dom";
export default function PreloadClient() {
  // Eagerly load and execute a critical JavaScript file
  preinit("https://unpkg.com/faker@5.5.3/dist/faker.min.js", { as: "script" });
  // Preload a Bootstrap stylesheet for styling the page
  preload(
    "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css",
    { as: "style" }
  );
  prefetchDNS("https://cdnjs.cloudflare.com"); // when you may not actually request anything from this host
  preconnect("https://cdnjs.cloudflare.com"); // when you will request something but aren't sure what


  return (
    <div>
        Open DevTool and check {"<body>"} section
    </div>
  )
}
