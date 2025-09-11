import RequestsTable from "@/components/table/RequestsTable";
import React from "react";

const Requests = () => {
  return (
    <section className="bg-white flex flex-col gap-2 py-4 px-4 border border-[#BABABA] rounded-2xl ">
      <h1 className="h2-bold text-primary-100">Requests</h1>
      <RequestsTable />
    </section>
  );
};

export default Requests;
