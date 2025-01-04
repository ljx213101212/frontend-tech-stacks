// This is a React problem from BFE.dev
'use client';

import React from "react";
import { useArray as useStaleStateArray } from "./StaleState";
import { useArray } from "./SafeState";
import { flushSync } from "react-dom";

// if you want to try your code on the right panel
// remember to export App() component like below

export default function CheckStaleStateComponent() {
  const {
    value: staleValue,
    push: stalePush,
    removeByIndex: staleRemoveByIndex,
  } = useStaleStateArray([1, 2, 3]);
  const { value, push, removeByIndex } = useArray([1, 2, 3]);

  return (
    <div className="p-6 bg-gray-100 rounded shadow-md max-w-lg mx-auto space-y-4">
      <div>
        <span className="block text-gray-700 font-medium mb-2">
         Normal state updates:
        </span>
        <span className="text-blue-600 text-lg font-semibold">{value}</span>
        <div className="mt-2 flex space-x-4">
          <button
            className="px-4 py-2 bg-green-500 text-white font-medium rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
            onClick={() => push(1)}
          >
            Safe Push 1
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white font-medium rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
            onClick={() => removeByIndex(0)}
          >
            Safe remove first
          </button>
        </div>
      </div>

      <div>
        <span className="block text-gray-700 font-medium mb-2">
            Stale State Update (due to closure)
        </span>
        <span className="text-red-600 text-lg font-semibold">{staleValue}</span>
        <div className="mt-2 flex space-x-4">
          <button
            className="px-4 py-2 bg-red-500 text-white font-medium rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
            onClick={() => stalePush(1)}
          >
            Dangerous Push 1 (wrong)
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white font-medium rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
            onClick={() => staleRemoveByIndex(0)}
          >
            Dangerous remove first
          </button>
        </div>
      </div>
    </div>
  );
}
