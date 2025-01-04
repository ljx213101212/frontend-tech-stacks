"use client";

import React, { useState, useEffect, useRef } from "react";
import PostTemplate, { LoadingTemplate } from "../post";
import useLoadPosts from "../useLoadPosts";

const ScrollNormalDemo = () => {
  const { page: loadedPageNumber, loading, posts, loadPosts } = useLoadPosts(5);
  const [currentPage, setCurrentPage] = useState<number | undefined>(undefined);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const initialScrollHeight = useRef<number>(-1);
  // Infinite scrolling logic
  useEffect(() => {
    const handleScroll = () => {
      setCurrentPage(getCurrentPage());
      if (
        scrollContainerRef?.current &&
        scrollContainerRef?.current?.clientHeight +
          scrollContainerRef?.current?.scrollTop >=
          scrollContainerRef?.current?.scrollHeight
      ) {
        loadPosts();
      }
    };

    //update initialScrollHeight
    //need to avoid the case when first render scrollHeight == clientHight
    if (
      initialScrollHeight.current === -1 &&
      scrollContainerRef?.current &&
      scrollContainerRef?.current?.scrollHeight !==
        scrollContainerRef?.current?.clientHeight
    ) {
      initialScrollHeight.current = scrollContainerRef?.current?.scrollHeight;
    }

    setCurrentPage(getCurrentPage());
    console.log("useEffect callback");
    scrollContainerRef?.current?.addEventListener("scroll", handleScroll);
    return () => {
      console.log("useEffect return");
      scrollContainerRef?.current?.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  // Initial load
  useEffect(() => {
    loadPosts();
  }, []);

  const getCurrentPage = () => {
    if (!scrollContainerRef?.current || initialScrollHeight?.current === -1) {
      return 0;
    }
    const currentScrollTop = scrollContainerRef?.current?.scrollTop;
    const scrollTopPerPage =
      initialScrollHeight.current - scrollContainerRef?.current?.clientHeight;

    const currentPage = Math.floor(currentScrollTop / scrollTopPerPage);

    //handle loadedPageNumber update slower than currentPage case.
    return Math.min(currentPage + 1, loadedPageNumber);
  };

  return (
    <div>
      <header className="fixed top-0 w-full bg-white border-b border-gray-300 p-3 z-50 text-center text-lg font-bold shadow-md">
        Infinite Scroll Example
      </header>

      <div
        ref={scrollContainerRef}
        className="mt-16 h-[calc(100vh-theme(spacing.16))] overflow-y-auto"
      >
        <main className="mx-auto px-5 max-w-xl">
          <div className="fixed right-16 top-1/2 bg-amber-100 rounded-lg p-4 text-xl">
            Page: {currentPage ?? "-"} / {loadedPageNumber}
          </div>
          {posts.map((post: PostProps) => (
            <PostTemplate key={post.id} id={post.id} title={post.title} />
          ))}
          {loading && <LoadingTemplate />}
        </main>
      </div>
    </div>
  );
};

export default ScrollNormalDemo;
