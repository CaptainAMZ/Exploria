"use client";
import TableTemplate from "@/components/templates/TableTemplate";
import useDataFilter from "@/hooks/Filter/useFilter";
import { getSingleQuery } from "@/utils/Query/GetSingleQuery";
import React, { useEffect, useState } from "react";

const Layout = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchQuery = getSingleQuery("search_term");
  const { filteredData } = useDataFilter(
    data,
    ["name", "address", "phone_number"],
    searchQuery
  );

  useEffect(() => {
    setSearchTerm(searchQuery);
  }, [searchQuery]);

  return (
    <>
      {Object.entries(filteredData).map((item) => (
        <div key={item[1].query} className="my-5 ">
          <h4>{item[0]}</h4>
          <TableTemplate
            pageQuery={`${item[1].query}_page`}
            sortQuery={`${item[1].query}_sort`}
            data={item[1].data}
          />
        </div>
      ))}
    </>
  );
};

export default Layout;
