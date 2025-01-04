"use client";

import React, { Component, useEffect, useState } from "react";
import MyMemo from "./MyMemo";

const CheckReactMemoComponent = () => {
  const [count, setCount] = useState<number>(0);
  const [label, setLabel] = useState<string>("memo");

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center space-x-4 p-4 bg-gray-100 rounded shadow-md max-w-sm mx-auto">
        <button
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <div className="text-xl font-bold text-gray-700">{count}</div>
        <button
          className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>

      <MemoHOC />

      <input onChange={(e) => {
         setLabel(e.target.value);        
      }} value={label}></input>
      <MyMemo component={ExpensiveTaskComponent} label={label}/>
    </div>
  );
};

const ExpensiveTaskComponent = (props: { label: string }) => {
  const renderCountRef = React.useRef<number>(0);

  renderCountRef.current++;
  console.log("ExpensiveTaskComponent is rendered");
  return <div>
        <label>{props.label}: </label>
        This is Expensive Task - rendered {renderCountRef.current}
    </div>;
};

const MemoHOC = React.memo(() => <ExpensiveTaskComponent label="Memo"/>);

export default CheckReactMemoComponent;
