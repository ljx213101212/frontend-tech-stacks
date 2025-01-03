'use client'

import React from "react";

export function usePrevious<T>(value: T): T | undefined {
  const previousRef = React.useRef<T | undefined>(undefined);

  React.useEffect(() => {
    console.log("previous value changed", value);
    previousRef.current = value;
  }, [value]);

  return previousRef.current;;
}
