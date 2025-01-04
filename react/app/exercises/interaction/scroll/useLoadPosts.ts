import React, { useState } from "react";

const useLoadPosts = (postsPerPage: number = 20) => {
  const [page, setPage] = useState<number>(0);
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState<boolean>();

  // Simulate fetching posts
  const fetchPosts = (pageNum: number) => {
    const newPosts = Array.from({ length: postsPerPage }, (_, i) => ({
      id: pageNum * postsPerPage + i + 1,
      title: `Post Title ${pageNum * postsPerPage + i + 1}`,
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

  return {
    page,
    posts,
    loading,
    loadPosts,
  };
};

export default useLoadPosts;