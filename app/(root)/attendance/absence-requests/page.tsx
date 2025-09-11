import AbsenceTable from "@/components/table/AbsenceTable";
import React from "react";

const page = () => {
  return (
    <section className="employees-table mt-11 w-full bg-white py-6 px-4 border border-[#BABABA] rounded-4xl ">
      <h1 className="h2-semibold flex items-center gap-4 text-primary-100 ">
        Absence Requests
      </h1>
      <div className="min-w-0">
        <AbsenceTable />
      </div>
    </section>
  );
};

export default page;
