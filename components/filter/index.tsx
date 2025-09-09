"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formUrlQuery, removeKeysFromUrl } from "@/lib/url";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useState } from "react";

const Filter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [active, setActive] = useState("All");

  const handleSelect = (filter: string) => {
    let newUrl;

    if (filter === "All") {
      // Remove filter from URL
      newUrl = removeKeysFromUrl({
        params: searchParams.toString(),
        keyToRemove: ["filter"],
      });
    } else {
      // Update URL with filter
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "filter",
        value: filter, // no toLowerCase mismatch
      });
    }

    setActive(filter);
    router.push(newUrl, { scroll: false });
  };

  return (
    <Select value={active} onValueChange={handleSelect}>
      <SelectTrigger className="w-[180px] max-md:w-full paraghraph-regular text-[#6C757D] no-focus placeholder shadow-none bg-white min-h-[56px] rounded-[10px] border border-[#BABABA]">
        <SelectValue placeholder="All Departments" />
      </SelectTrigger>
      <SelectContent className="bg-white border border-[#BABABA] rounded-[10px]">
        <SelectItem value="All">All Departments</SelectItem>
        <SelectItem value="Dep-1">Dep 1</SelectItem>
        <SelectItem value="Dep-2">Dep 2</SelectItem>
        <SelectItem value="Dep-3">Dep 3</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default Filter;
