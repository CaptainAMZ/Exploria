import { getSingleQuery } from "@/utils/Query/GetSingleQuery";
import { useState, useEffect } from "react";

const useSort = (sourceData, query) => {
  const queryValue = getSingleQuery(query);
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    const sortData = () => {
      let sortedArray = [...sourceData];

      if (queryValue == 1) {
        sortedArray.sort(
          (a, b) => new Date(b.create_at) - new Date(a.create_at)
        );
      } else if (queryValue == 2) {
        sortedArray.sort(
          (a, b) => new Date(a.create_at) - new Date(b.create_at)
        );
      }

      setSortedData(sortedArray);
    };

    if (queryValue == 0 || !queryValue) {
      setSortedData(sourceData);
    } else {
      sortData();
    }
  }, [sourceData, queryValue]);

  return {sortedData};
};

export default useSort;
