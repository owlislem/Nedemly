import AttendanceTable from "@/components/table/AttendanceTable";
import React from "react";

const Attendance = () => {
  return (
    <section className="employees-table mt-4 w-full bg-white py-6 px-4 border border-[#BABABA] rounded-2xl ">
      <h1 className="h3-semibold flex items-center gap-4 text-primary-100">
        Today’s Attendance
      </h1>
      <div className="">
        <AttendanceTable />
      </div>
    </section>
  );
};

export default Attendance;
