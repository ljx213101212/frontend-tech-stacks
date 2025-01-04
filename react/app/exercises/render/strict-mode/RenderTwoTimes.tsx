"use client";

import React from "react";
import { useEffect } from "react";

// let externalVariable = 0;

const RenderTwoTimes = () => {

  const [count, setCount] = React.useState<number>(0);

  useEffect(() => {
    console.log(`mount ${count} times`);

    return () => {
      console.log(`unmount ${count} times`);
    };
  }, []);

  // Bad Example 1: Incorrectly modifying state during render
//   if (count === 0) {
//     setCount(1); // Causes side effect during rendering
//   }

  // Bad Example 2: Impurity
//   externalVariable++; // Modifying an external variable (impurity)
//   console.log("Rendered. External Variable:", externalVariable);


  console.log("Rendered with count:", count);
  return (
    <div>
      <p>current component mount {count} times</p>
    </div>
  );
};

export default RenderTwoTimes;
