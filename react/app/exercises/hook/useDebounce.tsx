"use client";
import React from "react";
export function useDebounce<T>(value: T, delay: number): T {
  // your code here
  const [debounceValue, setDebounceValue] = React.useState<T>(value);
  const timeoutRef = React.useRef(setTimeout(() => {}));

  React.useEffect(() => {
    console.log("[useDebounce]: ", value);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      console.log("timeout updated");
      setDebounceValue(value);
    }, delay);
    return () => {
        clearTimeout(timeoutRef.current);
    }
  }, [value]);

  console.log("[useDebounce] - render: ", debounceValue);
  return debounceValue;
}
