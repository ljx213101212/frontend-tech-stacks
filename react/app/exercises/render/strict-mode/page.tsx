"use client";

import React from "react";
import { useEffect } from "react";
import RenderTwoTimes from "./RenderTwoTimes";

const CheckStrictModeRenderTwoTimes = () => {
  const [isShow, setIsShow] = React.useState<boolean>(false);
  return (
    <>
      {isShow ? (
        // <React.StrictMode>
        //   <RenderTwoTimes />
        // </React.StrictMode>
         <RenderTwoTimes />
      ) : (
        <></>
      )}

      <button
        onClick={() => {
          setIsShow(!isShow);
        }}
      >
        Toggle Component
      </button>
    </>
  );
};

export default CheckStrictModeRenderTwoTimes;
