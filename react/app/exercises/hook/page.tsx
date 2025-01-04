"use client";

import React from "react";
import UseRefComponent from "./useRef";
import { UseHookSample } from "./useHookSample";
import { usePrevious } from "./usePrevious";
import { useHover } from "./useHover";
import { useDebounce } from "./useDebounce";

const HookSample = () => {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState("Hello");

  const [renderSimulator, setRenderSimulator] = React.useState(0);
  const [showToggle, setShowToggle] = React.useState(true);
  const prevCount = usePrevious(count); // Track the previous count
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();
  const debouncedValue = useDebounce(count, 2000);

  const simulateReactRender = () => {
    setRenderSimulator((prev: number) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 space-y-6">

      {/* Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={() => {
            setCount((prev: number) => prev + 1);
            simulateReactRender();
          }}
          className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Add Counter
        </button>
      </div>

      {/* Render Simulator */}
      <div className="w-full max-w-lg bg-white p-4 rounded-lg shadow-md">
        <h5 className="text-lg font-semibold mb-2 text-gray-700">
          Render Simulator:
        </h5>
        <div className="text-gray-800"><span>Count:  </span>{renderSimulator}</div>
        <div className="text-gray-800"><span>Debounced Value:  </span>{debouncedValue}</div>
      </div>

      {/* UseRef Component */}
      <div className="w-full max-w-lg">
        <UseRefComponent />
      </div>

      {showToggle && (
        <div className="w-full max-w-lg">
          <UseHookSample />
        </div>
      )}

      <button
        onClick={() => {
          setShowToggle(!showToggle);
        }}
        className="px-4 py-2 bg-green-500 text-white font-medium rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        Toggle Component
      </button>

      <div className="p-6 bg-gray-100 rounded shadow-lg max-w-md mx-auto mt-10 text-center">
        <h1 className="text-2xl font-bold mb-4">usePrevious Hook Example</h1>
        <p className="text-lg">
          Current Count:{" "}
          <span className="font-semibold text-blue-600">{count}</span>
        </p>
        <p className="text-lg">
          Previous Count:{" "}
          <span className="font-semibold text-green-600">
            {prevCount !== undefined ? prevCount : "N/A"}
          </span>
        </p>
        <div className="mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 mr-2"
            onClick={() => setCount((c: number) => c + 1)}
          >
            Increment
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white font-medium rounded hover:bg-red-600"
            onClick={() => setCount((c: number) => c - 1)}
          >
            Decrement
          </button>
        </div>
      </div>
      {showToggle && (
        <div
          ref={hoverRef}
          style={{
            width: 200,
            height: 200,
            backgroundColor: isHovered ? "lightblue" : "lightgray",
            transition: "background-color 0.3s",
          }}
        >
          {isHovered ? "Hovered!" : "Hover over me!"}
        </div>
      )}
    </div>
  );
};

export default HookSample;
