import React from "react";
import { getLocalData } from "@/utils/Fetch/GetLocalData";
import Search from "@/components/modules/Search/Search";
import dynamic from "next/dynamic";

const TableTemplate = dynamic(() => import("@/components/templates/TableTemplate"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

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
