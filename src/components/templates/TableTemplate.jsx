"use client";
import React, { useEffect, useState } from "react";
import Sort from "@/components/modules/Sort/Sort";
import Table from "@/components/modules/Table/Table";
import Pagination from "@/components/modules/Pagination/Pagination";
import usePagination from "@/hooks/Paginate/usePaginate";
import { getSingleQuery } from "@/utils/Query/GetSingleQuery";
import useSort from "@/hooks/Sort/useSort";

const TableTemplate = ({ data, pageQuery, sortQuery }) => {
  const [queryValue, setQueryValue] = useState(1);
  const { sortedData } = useSort(data, sortQuery);
  const { currentPageData, pagesCount } = usePagination(
    sortedData,
    queryValue,
    5
  );

  const query = getSingleQuery("page");

  useEffect(() => {
    setQueryValue(query || 1);
  }, [query]);

  return (
    <>
      {currentPageData.length > 0 ? (
        <div className="container p-5 md:px-0 flex flex-col gap-5">
          <div className="flex gap-2 ">
            <Sort query={sortQuery} />
          </div>
          <div>
            <Table data={currentPageData} />
          </div>
          <div>
            <Pagination
              query={pageQuery}
              currentPage={queryValue}
              pagesCount={pagesCount}
            />
          </div>
        </div>
      ) : (
        <span>No Result</span>
      )}
    </>
  );
};

export default TableTemplate;
