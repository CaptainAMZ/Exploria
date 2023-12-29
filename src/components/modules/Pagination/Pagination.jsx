import { useQueryParams } from "@/hooks/Query/useQuery";
import { getSingleQuery } from "@/utils/Query/GetSingleQuery";
import { useSearchParams } from "next/navigation";
import React from "react";

const Pagination = ({ pagesCount, currentPage, query }) => {
  const { updateQueryParam } = useQueryParams();
  const searchParams = useSearchParams();

  const nextPageHandler = () => {
    const queryValue = getSingleQuery(query);
    if (!queryValue && pagesCount != 1) updateQueryParam(query, 2);
    else if (queryValue < pagesCount) updateQueryParam(query, +queryValue + 1);
  };

  const prevPageHandler = () => {
    const queryValue = getSingleQuery(query);
    if (queryValue > 1) updateQueryParam(query, +queryValue - 1);
  };

  return (
    <div className="flex flex-col items-center">
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {currentPage}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {pagesCount}
        </span>{" "}
        Entries
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          onClick={prevPageHandler}
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Prev
        </button>
        <button
          onClick={nextPageHandler}
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
