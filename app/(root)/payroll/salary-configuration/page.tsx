import BaseSalaryForm from "@/components/forms/BaseSalaryForm";
import OverTimeSettingsForm from "@/components/forms/OverTimeSettingsForm";
import React from "react";

const page = () => {
  return (
    <section className="flex gap-4 max-md:flex-col">
      <BaseSalaryForm />
      <OverTimeSettingsForm />
    </section>
  );
};

export default page;
