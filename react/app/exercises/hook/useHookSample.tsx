"use client";
import React from "react";
export function UseHookSample() {
  //state will only reset when the component is unmount.
  const [data, setData] = React.useState<number>(0);
  React.useEffect(() => {
    console.log("[useEffect]: Run whenever dependencies are changed or Component mount");
    return () => {
      console.log(
        "[cleanup function]: The cleanup function runs not only during unmount, but before every re-render with changed dependencies."
      );
    };
  }, [data]);
  return (
    <div className="p-6 bg-gray-100 rounded shadow-lg max-w-md mx-auto mt-10">
      <p className="text-lg font-semibold text-gray-700">
        your app: <span className="text-blue-500">{data}</span>
      </p>
      <button
        onClick={() => setData(data + 1)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Change State
      </button>
    </div>
  );
}
