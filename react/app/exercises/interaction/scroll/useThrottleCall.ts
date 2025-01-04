import React, { useCallback, useRef } from "react";

const useThrottleCall = (callback: Function, delay = 1000) => {
  const shouldCall = useRef<boolean>(true);

  const throttleCall = useCallback(
    (...args: any[]) => {
      let timeout = null;
      if (shouldCall.current) {
        console.log("throttleCall");
        callback(...args);
        shouldCall.current = false;
        timeout = setTimeout(() => {
          shouldCall.current = true;
        }, delay);
      }
      return () => {
        if (timeout) {
          clearTimeout(timeout);
        }
      };
    },
    [callback, delay]
  );

  return throttleCall;
};

export default useThrottleCall;
