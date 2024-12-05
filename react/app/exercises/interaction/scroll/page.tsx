"use client";
import React, { useState, useEffect } from "react";

const PostContainer = () => {
  const [posts, setPosts] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Simulate fetching posts
  const fetchPosts = (pageNum: number) => {
    const newPosts = Array.from({ length: 20 }, (_, i) => ({
      id: (pageNum - 1) * 20 + i + 1,
      title: `Post Title ${(pageNum - 1) * 20 + i + 1}`,
    }));
    return newPosts;
  };

  // Load posts when the page or component mounts
  const loadPosts = () => {
    if (loading) return;
    setLoading(true);

    setTimeout(() => {
      const newPosts = fetchPosts(page);
      setPosts((prevPosts: any) => [...prevPosts, ...newPosts]);
      setPage((prevPage) => prevPage + 1);
      setLoading(false);
    }, 1000); // Simulate network delay
  };

  // Infinite scrolling logic
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight - 5
      ) {
        loadPosts();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  // Initial load
  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <main className="mt-20 mx-auto px-5 max-w-xl">
      {posts.map((post: any) => (
        <div
          key={post.id}
          className="bg-white my-3 p-4 border border-gray-300 rounded-md shadow-sm"
        >
          <div className="w-full h-48 bg-gray-300 rounded-md"></div>
          <h2 className="mt-3 text-lg font-medium">{post.title}</h2>
        </div>
      ))}
      {loading && (
        <div className="text-center py-5 text-lg text-gray-500">Loading...</div>
      )}
    </main>
  );
};

const ScrollDemo = () => {
  return (
    <div>
      <header className="fixed top-0 w-full bg-white border-b border-gray-300 p-3 z-50 text-center text-lg font-bold shadow-md">
        Infinite Scroll Example
      </header>

      <PostContainer />
    </div>
  );
};

export default ScrollDemo;
