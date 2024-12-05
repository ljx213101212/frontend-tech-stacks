const draggableList = document.getElementById("draggable-list");
let draggedItem = null;

// Add event listeners to all draggable items
draggableList.addEventListener("dragstart", (e) => {
  draggedItem = e.target;
  setTimeout(() => (e.target.style.display = "none"), 0);
});

draggableList.addEventListener("dragend", (e) => {
  setTimeout(() => (e.target.style.display = "block"), 0);
  draggedItem = null;
});

draggableList.addEventListener("dragover", (e) => {
  e.preventDefault(); // Prevent default to allow drop
});

draggableList.addEventListener("dragenter", (e) => {
  if (
    e.target.classList.contains("draggable-item") &&
    e.target !== draggedItem
  ) {
    e.target.classList.add("draggable-over");
  }
});

draggableList.addEventListener("dragleave", (e) => {
  if (e.target.classList.contains("draggable-item")) {
    e.target.classList.remove("draggable-over");
  }
});

draggableList.addEventListener("drop", (e) => {
  e.preventDefault();
  if (
    e.target.classList.contains("draggable-item") &&
    e.target !== draggedItem
  ) {
    const allItems = [...draggableList.children];
    const draggedIndex = allItems.indexOf(draggedItem);
    const targetIndex = allItems.indexOf(e.target);

    if (draggedIndex < targetIndex) {
      e.target.insertAdjacentElement("afterend", draggedItem);
    } else {
      e.target.insertAdjacentElement("beforebegin", draggedItem);
    }

    e.target.classList.remove("draggable-over");
  }
});
