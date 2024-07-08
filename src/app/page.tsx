import Banner from "@/components/Banner";
import DataFetcher from "@/components/DataFetcher";
import Tabs from "@/components/Tabs";

import React from "react";

function page() {
  return (
    <div className="mt-7 overflow-hidden md:mx-auto md:h-full md:w-full md:max-w-[89rem]">
      <Banner />

      <Tabs />
    </div>
  );
}

export default page;
