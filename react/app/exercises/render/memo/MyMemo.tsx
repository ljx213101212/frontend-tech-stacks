"use client";
import React, { useEffect, useRef, useState } from "react";

const MyMemo: React.FC<MyMemoProps> = ({ component: Component, ...props }) => {
  const prevPropsRef = useRef<Record<string, any>>(props);
  //cache the component itself in state
  const [renderedElement, setRenderedElement] = useState<React.ReactNode>(
    <Component {...props} />
  );

  useEffect(() => {
    const prevProps = prevPropsRef.current;
    const hasChanged = !Object.keys(props).every(
      (key) => props[key] === prevProps[key]
    );

    if (hasChanged) {
      // update the component to trigger the component re-render/
      setRenderedElement(<Component {...props} />);
      prevPropsRef.current = props;
    }
  }, [props, Component]);

  //always return the last rendered element
  return <>{renderedElement}</>;
};

export default MyMemo;
