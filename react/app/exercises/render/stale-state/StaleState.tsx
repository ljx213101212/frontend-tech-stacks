"use client";

import React from "react";
import { useState, useCallback, useMemo } from "react";
type UseArrayActions<T> = {
  push: (item: T) => void;
  removeByIndex: (index: number) => void;
};

export function useArray<T>(
  initialValue: T[]
): { value: T[] } & UseArrayActions<T> {
  const [value, setValue] = useState<T[]>(initialValue);
  const push = useCallback((item: T) => {
    setValue([...value, item]); //Not recommended
    console.warn("value in useCallback is a stale state (in closure)", value);
  }, [value]);//should add value into deps

  const removeByIndex = useCallback((index: number) => {
    const copy = value.slice();
    copy.splice(index, 1);
    setValue([...copy]); //Not recommended
    console.warn("value in useCallback is a stale state (in closure)", value);
  }, [value]);//should add value into deps

  console.log("[StaleState]: ", value);
  return useMemo(
    () => ({ value, push, removeByIndex }),
    [value, push, removeByIndex]
  );
}
