"use client";
import Search from "@/components/search";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { SearchParams } from "next/dist/server/request/search-params";
// import { formUrlQuery, removeKeysFromUrl } from "@/lib/url";
// import { useRouter, useSearchParams } from "next/navigation";
import Filter from "@/components/filter";
import Table from "@/components/table";

// interface SearchParams {
//   searchParams: Promise<{ [key: string]: string }>;
// }
const Employee = () => {
  // const {query = "" , filter = " "} = await searchParams ;

  return (
    <>
      <section className="flex w-full flex-col  justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-primary-100">Employees</h1>
        <div className="flex gap-3 max-sm:flex-col">
          <Button
            asChild
            className="bg-white min-h-[46px] px-6 py-4 border border-[#BABABA] rounded-2xl flex-1 "
          >
            <div>
              <Image
                src={"/icons/upload.svg"}
                width={12}
                height={12}
                alt="Upload Icon"
              />
              <p>Upload CSV</p>
            </div>
          </Button>
          <Button
            asChild
            className="bg-primary-100 min-h-[46px] px-6 py-4 border border-[#BABABA] rounded-2xl flex-1  "
          >
            <div>
              <Image
                src={"/icons/add-employee.svg"}
                width={12}
                height={12}
                alt="Upload Icon"
              />
              <p className="text-white">Add Employee</p>
            </div>
          </Button>{" "}
        </div>
      </section>
      <section className="mt-11 flex gap-2 max-md:flex-col">
        <Search route="employee" />
        <div>
          <Filter />
        </div>
      </section>
      <section className="employees-table mt-11 w-full bg-white py-4 px-4 ">
        <h1 className="h3-semibold flex items-center gap-4 ">
          Employee{" "}
          <span className="small-medium text-primary-100 px-4 py-2 bg-[#E0E9EE] rounded-2xl border border-[#E9EAEB]">
            80 employees
          </span>
        </h1>
        <div className="min-w-0">
          <Table />
        </div>
      </section>
    </>
  );
};

export default Employee;
