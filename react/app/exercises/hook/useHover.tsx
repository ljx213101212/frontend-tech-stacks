import { Ref, useRef, useState, useCallback } from 'react'
export function useHover<T extends HTMLElement>(): [Ref<T>, boolean] {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);
  const ref = useRef<T>(null);
  const callbackRef = useCallback((node: T | null) => {

    console.log("[callbackRef]", node);
    if (ref.current) {
      ref.current.removeEventListener('mouseenter', handleMouseEnter);
      ref.current.removeEventListener('mouseleave', handleMouseLeave);
    }
    ref.current = node;
    if (ref.current) {
      ref.current.addEventListener('mouseenter', handleMouseEnter);
      ref.current.addEventListener('mouseleave', handleMouseLeave);
    }
  }, [handleMouseEnter, handleMouseLeave]);
  // your code here
  return [callbackRef, isHovered];
}

// React Accepts a Function as a Ref