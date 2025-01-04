"use client";
import React from "react";


const PostTemplate: React.FC<PostProps> = ({ id, title = "" }) => {
  return (
    <div
      key={id}
      className="bg-white my-3 p-4 border border-gray-300 rounded-md shadow-sm"
    >
      <div className="w-full h-48 bg-gray-300 rounded-md"></div>
      <h2 className="mt-3 text-lg font-medium">{title}</h2>
    </div>
  );
};

export const LoadingTemplate = () => <div className="text-center py-5 text-lg text-gray-500">Loading...</div>

export default PostTemplate;
