import { useState, useEffect } from "react";

const usePagination = (dataSource, urlQuery, elementsPerPage) => {
  const [pagesCount, setPagesCount] = useState(0);
  const [currentPageData, setCurrentPageData] = useState([]);

  useEffect(() => {
    const calculatePagesCount = () => {
      const totalElements = dataSource.length;
      const count = Math.ceil(totalElements / elementsPerPage);
      setPagesCount(count);
    };

    const updateCurrentPageData = () => {
      const page = Number(urlQuery) || 1;
      const startIndex = (page - 1) * elementsPerPage;
      const endIndex = startIndex + elementsPerPage;
      const data = dataSource.slice(startIndex, endIndex);
      setCurrentPageData(data);
    };

    calculatePagesCount();
    updateCurrentPageData();
  }, [dataSource, urlQuery, elementsPerPage]);

  return { pagesCount, currentPageData };
};

export default usePagination;
