"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import useLoadPosts from "../useLoadPosts";
import PostTemplate, { LoadingTemplate } from "../post";
import useCurrentPage from "../useCurrentPage";
import useDebounceCall from "../useDebounceCall";
import useThrottleCall from "../useThrottleCall";

const ScrollThrottleAndDebounceDemo = () => {
  const { page: loadedPageNumber, loading, posts, loadPosts } = useLoadPosts(5);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const initialScrollHeight = useRef<number>(-1);
  const currentPage = useCurrentPage(
    scrollContainerRef,
    initialScrollHeight,
    loadedPageNumber
  );
  //const debounceCall = useDebounceCall(loadPosts, 10000);
  const throttleCall = useThrottleCall(loadPosts, 2000);

  const handleScroll = useCallback(() => {
    if (
      scrollContainerRef?.current &&
      scrollContainerRef?.current?.clientHeight +
        scrollContainerRef?.current?.scrollTop >=
        scrollContainerRef?.current?.scrollHeight
    ) {
      loadPosts();
      //debounceCall();
      // throttleCall();
    }
  }, [throttleCall]);

  // Infinite scrolling logic
  useEffect(() => {
    scrollContainerRef?.current?.addEventListener("scroll", handleScroll);
    return () => {
      scrollContainerRef?.current?.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  // Initial load
  useEffect(() => {
    loadPosts();
    //debounceCall();
    // throttleCall();
  }, []);

  return (
    <div>
      <header className="fixed top-0 w-full bg-white border-b border-gray-300 p-3 z-50 text-center text-lg font-bold shadow-md">
        Infinite Throttle and Debounce Scroll Example
      </header>

      <div
        ref={scrollContainerRef}
        onWheel={handleScroll} // handle the case when user keep scrolling and making the scrollbar freeze at the bottom
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

export default ScrollThrottleAndDebounceDemo;
