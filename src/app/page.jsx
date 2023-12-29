import React from "react";
import { getLocalData } from "@/utils/Fetch/GetLocalData";
import TableTemplate from "@/components/templates/TableTemplate";import Search from "@/components/modules/Search/Search";
;

const Home = async () => {
  const data = await getLocalData();
  return (
    <>
      <Search link={"search"} />
      <TableTemplate data={data.users} pageQuery={"page"} sortQuery={"sort"} />
    </>
  );
};

export default Home;
