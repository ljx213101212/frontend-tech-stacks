"use client";

import { useState } from "react";

const CheckBatchingLogicComponent = () => {
  const [number, setNumber] = useState(0);//number is always 0 before the next render

  const handleClick1 = () => { 
    setNumber((prevState) => prevState + 1); //prevState: 0, state(return): 0 + 1 = 1, number: 0
    setNumber(8); //prevState: 1, state: 8, number: 0
    setNumber((prevState) => prevState + 1); // prevState: 8, state(return): 8 + 1, number: 0
    // 此时 number 的值是多少？会重新渲染几次？
    // what is the value of number in current line? 
    // How many times of re-render has been triggered. 
    console.log(number);
    //the answer is number currently is 0. 
    //Batching mechanism will make sure above code trigger re-render only 1 time. 
    setNumber((prevState) => {
        console.log("prevState:", prevState);// prevState: 9
        return prevState;
    })
    //prevState: 9, but next render number will become 9
  };

  const handleClick2 = () => {
    setNumber(number + 1);// prevState: 0, state: 0 + 1, number: 0
    setNumber(8);//prevState: 0, state: 8, number: 0
    setNumber(number + 1); //prevState:0, state: 0 + 1, number 0
    // 此时 number 的值是多少？会重新渲染几次？
    
    //the answer is number currently is 0.
    console.log(number);
    setNumber((prevState) => {
        console.log("prevState:", prevState);// prevState:  1
        return prevState;
    })

  };

  console.log("CheckBatchingLogicComponent rendered");
  return (
    <div className="flex justify-around p-4 bg-gray-100">
      <button
        onClick={() => handleClick1()}
        className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Button 1
      </button>

      <button
        onClick={() => handleClick2()}
        className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
      >
        Button 2
      </button>

      <div>Number:  {number}</div>
    </div>
  );
};

export default CheckBatchingLogicComponent;
