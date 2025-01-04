"use client";

import React, { RefObject } from "react";

const useDebounce = (debouncedInput: string) => {
  const [debouncedValue, setDebouncedValue] = React.useState("");

  React.useEffect(() => {
    const debounce = setTimeout(() => {
      setDebouncedValue(debouncedInput);
    }, 1000);

    return () => {
      clearTimeout(debounce);
    };
  }, [debouncedInput]);

  return debouncedValue;
};

const useTrottle = (trottledInputRef: RefObject<any>) => {
  const [trottledValue, setTrottledValue] = React.useState("");

  React.useEffect(() => {
    const throttle = setInterval(() => {
      setTrottledValue(trottledInputRef?.current?.value ?? "");
    }, 1000);

    return () => {
      clearTimeout(throttle);
    };
  }, []);

  return trottledValue;
};

const HandleWithInput = () => {
  const [debouncedInput, setDebouncedInput] = React.useState("");
  const debouncedOutput = useDebounce(debouncedInput);

  const thottledRef = React.useRef<HTMLInputElement>(null);
  const trottledOutput = useTrottle(thottledRef);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Debounce</h1>
        <input
          type="text"
          value={debouncedInput}
          onChange={(e) => setDebouncedInput(e.target.value)}
          className="border-2 border-black p-2"
        />
        <p className="text-xl font-bold">{debouncedOutput}</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Throttle</h1>
        <input
          ref={thottledRef}
          type="text"
          className="border-2 border-black p-2"
        />
        <p className="text-xl font-bold">{trottledOutput}</p>
      </div>
    </div>
  );
};

export default HandleWithInput;
