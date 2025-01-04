import React, { Ref, RefObject, useEffect, useState } from "react";

const useCurrentPage = (
  scrollContainerRef: RefObject<any>,
  initialScrollHeightRef: RefObject<number>,
  loadedPageNumber: number
) => {
  const [currentPage, setCurrentPage] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleScroll = () => {
      setCurrentPage(getCurrentPage());
    };
    setCurrentPage(getCurrentPage());

    //update initialScrollHeight
    //need to avoid the case when first render scrollHeight == clientHight
    if (
      initialScrollHeightRef.current === -1 &&
      scrollContainerRef?.current &&
      scrollContainerRef?.current?.scrollHeight !==
        scrollContainerRef?.current?.clientHeight
    ) {
      initialScrollHeightRef.current =
        scrollContainerRef?.current?.scrollHeight;
    }
    scrollContainerRef?.current?.addEventListener("scroll", handleScroll);
    return () => {
      scrollContainerRef?.current?.removeEventListener("scroll", handleScroll);
    };
  }, [scrollContainerRef, initialScrollHeightRef, loadedPageNumber]);

  const getCurrentPage = () => {
    if (!scrollContainerRef?.current || initialScrollHeightRef.current === -1) {
      return 0;
    }
    const currentScrollTop = scrollContainerRef?.current?.scrollTop;
    const scrollTopPerPage =
      initialScrollHeightRef.current -
      scrollContainerRef?.current?.clientHeight;

    const currentPage = Math.floor(currentScrollTop / scrollTopPerPage);

    //handle loadedPageNumber update slower than currentPage case.
    return Math.min(currentPage + 1, loadedPageNumber);
  };

  return currentPage;
};

export default useCurrentPage;
