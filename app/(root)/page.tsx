"use client";
import StatsCard from "@/components/shared/StatsCard";
import React from "react";
import { dashboardCards } from "./constants";
import ContractChart from "@/components/charts/ContractChart";

const page = () => {
  const userInfo = { name: "Adem" };

  return (
    <section className="flex  w-full flex-col justify-between gap-4 sm:flex-col  ">
      <h1 className="h1-bold"> Hello {userInfo.name} !</h1>
      <h1 className="h1-bold text-primary-100">Dashbord</h1>
      <div className="grid gap-6 max-md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {dashboardCards.map((item) => (
          <StatsCard
            key={item.title}
            title={item.title}
            displayControl
            value={183}
            analyticsLabel={item.analyticsLabel}
            typeControl={item.typeControl}
          />
        ))}
      </div>
      <div className="flex gap-4 max-lg:flex-col">
        <div className="Stats py-6 px-6  bg-white  flex flex-col gap-4 flex-2  border border-[#BABABA] rounded-4xl">
          <h1 className="h3-bold">Repartition By Contract Type</h1>
          <ContractChart />
        </div>
        <div className="Stats py-6 px-6 bg-white  flex flex-col gap-4 flex-1 border border-[#BABABA] rounded-4xl">
          <h1 className="h3-bold">Recent Activities</h1>
          ActivePartie
        </div>
      </div>
    </section>
  );
};

export default page;
