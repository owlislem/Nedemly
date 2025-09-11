"use client";
import StatsCard from "@/components/shared/StatsCard";
import React from "react";
import { documentsCards } from "./constants";
import DocumentTable from "@/components/table/DocumentTable";

const page = () => {
  return (
    <section className="flex  w-full flex-col justify-between gap-4 sm:flex-col  ">
      <h1 className="h1-bold text-primary-100">Documents</h1>
      <div className="grid gap-6 max-md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {documentsCards.map((item) => (
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
        <DocumentTable />
      </div>
    </section>
  );
};

export default page;
