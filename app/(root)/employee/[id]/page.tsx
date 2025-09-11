import EmployeeForm from "@/components/forms/EmployeeForm";
import React from "react";

const page = () => {
  return (
    <section className="bg-white border border-[#BABABA] rounded-2xl ">
      <h1 className="h1-bold text-primary-100 px-3 py-4">Employee Details</h1>
      <EmployeeForm />
    </section>
  );
};

export default page;
