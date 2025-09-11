"use client";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PayrollTable from "@/components/table/PayrollTable";

const Payroll = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [selectedMonth, setSelectedMonth] = useState<string>("");

  useEffect(() => {
    const currentMonthIndex = new Date().getMonth(); // 0 = Jan, 11 = Dec
    setSelectedMonth(months[currentMonthIndex]);
  }, []);

  return (
    <section className="bg-white py-4 px-3  border border-[#BABABA] rounded-2xl flex flex-col gap-2 ">
      <div className="flex justify-between items-center gap-2 max-sm:flex-col max-sm:items-start ">
        <h1 className="h2-bold text-primary-100">Current Payroll</h1>
        <Select value={selectedMonth} onValueChange={setSelectedMonth}>
          <SelectTrigger className="w-[180px] no-focus  border border-[#BABABA] rounded-xl ">
            <SelectValue placeholder="Month" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            {months.map((month) => (
              <SelectItem key={month} value={month}>
                {month}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <PayrollTable />
      </div>
    </section>
  );
};

export default Payroll;
