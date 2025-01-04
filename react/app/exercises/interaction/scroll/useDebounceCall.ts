import React, { useCallback, useRef } from "react";

const useDebounceCall = (callback: Function, delay = 1000) => {
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  const debounceCall = useCallback(
    (...args: any[]) => {
      console.log(timeoutRef.current);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(
        () => {
          console.log("debounce call executing");
          callback(...args);
        },
        delay
      );
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    },
    [callback, delay]
  );

  return debounceCall;
};

export default useDebounceCall;
