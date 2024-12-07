"use client";

import React from "react";
import { createUseState } from "./useMyState";

const { useState } = createUseState();
const HookSample = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Hello");

  const [renderSimulator, setRenderSimulator] = React.useState(0);

  const simulateReactRender = () => {
    setRenderSimulator((prev: number) => prev + 1);
  };

  return (
    <div>
      <h4>
        Counter: <span>{count}</span>
      </h4>
      <h4>
        Text: <span>{text}</span>
      </h4>

      <button
        onClick={() => {
          setCount((prev: number) => prev + 1);
          simulateReactRender();
        }}
      >
        Add Counter
      </button>
      <button
        onClick={() => {
          setText("World");
          simulateReactRender();
        }}
      >
        Update Text
      </button>

      <div>{renderSimulator}</div>
    </div>
  );
};

export default HookSample;
