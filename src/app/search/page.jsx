import { getLocalData } from "@/utils/Fetch/GetLocalData";
import React from "react";
import Layout from "./_components/layout/Layout";
import Search from "@/components/modules/Search/Search";

const SearchPage = async () => {
  const data = await getLocalData();
  return (
    <>
      <Search link={"search"} />
      <Layout data={data.users} />
    </>
  );
};

export default SearchPage;
