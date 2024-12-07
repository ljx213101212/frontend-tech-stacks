// @ts-nocheck

/**
Implements a function to convert an array into a tree data structure
 
Input parameter format reference: (unsorted)
const arr = [
   { id: 2, name: "i2", parentId: 1 },
   { id: 4, name: "i4", parentId: 3 },
   { id: 3, name: "i3", parentId: 2 },
   { id: 1, name: "i1" }, // root node has no parentId
];

Output example:
const result = {
  id: 1,
  name: "i1",
  children: {
    id: 2,
    name: "i2",
    parentId: 1,
    children: {
      id: 3,
      name: "i3",
      parentId: 2,
      children: {
        id: 4,
        name: "i4",
        parentId: 3,
      },
    },
  },
};
 */

const arrayToResult = (arr) => {
  const idNodeMap = new Map(
    arr.map((obj) => [
      obj.id,
      {
        ...obj,
        children: [],
      },
    ])
  );

  let root = null;
  arr.forEach((obj) => {
    if (!obj.hasOwnProperty("parentId")) {
      root = idNodeMap.get(obj.id);
    } else {
      const parent = idNodeMap.get(obj.parentId);
      if (parent) {
        parent.children.push(idNodeMap.get(obj.id));
      } else {
        throw `Input arr is bad formatted: no matching parent found for node with id: ${obj.id}`;
      }
    }
  });
  return root;
};

const arr = [
  { id: 2, name: "i2", parentId: 1 },
  { id: 4, name: "i4", parentId: 3 },
  { id: 3, name: "i3", parentId: 2 },
  { id: 1, name: "i1" }, // root node has no parentId
];

console.log(JSON.stringify(arrayToResult(arr)));
