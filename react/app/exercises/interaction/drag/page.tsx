"use client";

import React, { SyntheticEvent, useState } from "react";

const DraggableList = () => {
  const [items, setItems] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]);
  const [draggedIndex, setDraggedIndex] = useState(-1);
  const [dragOverIndex, setDragOverIndex] = useState(-1); // Track the index being hovered

  // Handle drag start
  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  // Handle drop
  const handleDrop = (index: number) => {
    if (draggedIndex === -1) return;

    const updatedItems = [...items];
    const [draggedItem] = updatedItems.splice(draggedIndex, 1);
    updatedItems.splice(index, 0, draggedItem);

    setItems(updatedItems);
    setDraggedIndex(-1);
    setDragOverIndex(-1); // Reset the drag-over index
  };

  // Handle drag over
  const handleDragOver = (e: SyntheticEvent, index: number) => {
    e.preventDefault(); // Allow dropping
    setDragOverIndex(index); // Set the current index being dragged over
  };

  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li
          key={index}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDrop={() => handleDrop(index)}
          className={`p-4 bg-gray-200 rounded-lg shadow-md cursor-grab transition-all ${
            draggedIndex === index ? "opacity-50" : ""
          } ${
            dragOverIndex === index && draggedIndex !== index
              ? "border-2 border-dashed border-blue-500"
              : ""
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

function DragDemo() {
  return (
    <div className="App p-5 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Draggable List</h1>
        <DraggableList />
      </div>
    </div>
  );
}

export default DragDemo;
