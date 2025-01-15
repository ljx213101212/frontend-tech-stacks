"use client";

import { ReactElement, useRef, useState } from "react";
import "./style.css";

const DragSwap = () => {
  const sourceRef = useRef<HTMLElement>(null);
  const targetRef = useRef<HTMLElement>(null);
  const [draggedItemId, setDraggedItemId] = useState("");
  const [dragOverItemId, setDragOverItemId] = useState("");
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("handleDragStart", e);
    const target = e.target as HTMLButtonElement;
    e.dataTransfer.effectAllowed = target.dataset
      .effect as DataTransfer["effectAllowed"];
    setDraggedItemId(target.id);
    sourceRef.current = target;
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    //console.log("handleDragOver", e);
    e.preventDefault();
    const target = e.target as HTMLButtonElement;
    setDragOverItemId(target.id);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("handleDrop", e);
    const target = e.target as HTMLButtonElement;
    targetRef.current = target as HTMLElement;

    swapElement(sourceRef.current!, targetRef.current!);
    setDraggedItemId("");
    setDragOverItemId("");
  };

  const swapElement = (element1: HTMLElement, element2: HTMLElement) => {
    const pos1 =  {
        left: element1.style.left,
        top: element1.style.top
    }

    const pos2 = {
        left: element2.style.left,
        top: element2.style.top
    }

   element1.style.top = pos2.top;
   element1.style.left = pos2.left;

   element2.style.top = pos1.top;
   element2.style.left = pos1.left;

   console.log(element1.style, element2.style)
  };

  return (
    <div>
      <div data-drop="move">
        <div
          id="1"
          draggable
          data-effect="move"
          data-drop="move"
          className={`absolute w-[100px] h-[100px] flex justify-center items-center border border-sky-500 ${
            dragOverItemId === "1" && draggedItemId !== "1"
              ? "drag-swap-over"
              : ""
          }`}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          Item1
        </div>
      </div>

      <div data-drop="move">
        <div
          id="2"
          draggable
          data-effect="move"
          className={`absolute w-[100px] h-[100px] flex justify-center items-center border border-sky-500 ${
            dragOverItemId === "2" && draggedItemId !== "2"
              ? "drag-swap-over"
              : ""
          }`}
          style={{left: "200px", top: "200px"}}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          Item2
        </div>
      </div>
    </div>
  );
};

export default DragSwap;
