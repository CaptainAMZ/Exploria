import { useMemo } from "react";

const useDataFilter = (data, filterProperties, filterValue) => {
  const filteredData = useMemo(() => {
    const filtered = {};

    filterProperties.forEach((property) => {
      filtered[property] = {
        query: `${property}`,
        data: data.filter((item) =>
          item[property].toLowerCase().includes(filterValue?.toLowerCase())
        ),
      };
    });

    return filtered;
  }, [data, filterProperties, filterValue]);

  return { filteredData };
};

export default useDataFilter;
