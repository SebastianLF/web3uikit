import React from 'react';
import { useMemo } from 'react';
import { TUsePaginationProps } from './types';

export const DOTS = '...';

const range = (start: number, end: number) => {
    let length = end - start + 1;
    // To create an array
    return Array.from({ length }, (_, idx) => idx + start);
};

/**
 * This hook will help create the range that is shown by the pagination component
 */
export const usePagination = ({
    currentPage,
    pageSize,
    siblingCount = 1,
    totalCount,
    maxPages = Number.MAX_VALUE,
}: TUsePaginationProps) => {
    const paginationRange = useMemo(() => {
        const totalPageCount = Math.ceil(totalCount / pageSize);

        // Pages count = siblingCount + ((firstPage + lastPage + currentPage + 2*DOTS)===5)
        const totalPageNumbers = siblingCount + 5;

        /**
         * total pages to be shown (data length) is less than page numbers calculated
         * return the range [1..totalPageCount]
         * If this fails then component will show dots,numbers etc
         */
        if (totalPageNumbers >= totalPageCount && totalPageCount <= maxPages) {
            return range(1, totalPageCount);
        }

        // If max pages specified

        if (totalPageCount > maxPages && totalPageNumbers >= maxPages) {
            // total pages more than max so calculate start and end pages
            const maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
            const maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
            if (currentPage <= maxPagesBeforeCurrentPage) {
                // current page near the start
                return range(1, maxPages);
            } else if (
                currentPage + maxPagesAfterCurrentPage >=
                totalPageCount
            ) {
                // current page near the end
                const startPage = totalPageCount - maxPages + 1;
                const endPage = totalPageCount;
                return range(startPage, endPage);
            } else {
                // current page somewhere in the middle
                const startPage = currentPage - maxPagesBeforeCurrentPage;
                const endPage = currentPage + maxPagesAfterCurrentPage;
                return range(startPage, endPage);
            }
        }
        /**
         * calculate left and right sibling index withing range of (1,totalPageCount)
         */
        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(
            currentPage + siblingCount,
            totalPageCount,
        );

        /**
         * if there is only one element after/before sibling then no need to show the dots
         */
        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;

        /**
         * CASE 1: To only show right dots
         */
        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * siblingCount;
            let leftRange = range(1, leftItemCount);

            return [...leftRange, DOTS, totalPageCount];
        }

        /**
         * CASE 2: To only show left dots
         */
        if (shouldShowLeftDots && !shouldShowRightDots) {
            let rightItemCount = 3 + 2 * siblingCount;
            let rightRange = range(
                totalPageCount - rightItemCount + 1,
                totalPageCount,
            );
            return [firstPageIndex, DOTS, ...rightRange];
        }

        /**
         * CASE 3: To show dots on both sides
         */
        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }
    }, [totalCount, pageSize, siblingCount, currentPage]);

    return paginationRange;
};
