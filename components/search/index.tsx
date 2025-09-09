"use client";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromUrl } from "@/lib/url";

const Search = ({ route }: { route: string }) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [searchQuery, setSearchQuery] = useState(query);
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: searchQuery,
        });
        router.push(newUrl, { scroll: false });
      } else {
        if (route === pathname) {
          const newUrl = removeKeysFromUrl({
            params: searchParams.toString(),
            keyToRemove: ["query"],
          });
          router.push(newUrl, { scroll: false });
        }
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, router, route, searchParams, pathname]);
  return (
    <div className="bg-white max-w-[680px]   flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 border border-[#BABABA]">
      <Image
        src="/icons/search.svg"
        width="21"
        height="21"
        alt="Search icons"
      />
      <Input
        type="text"
        placeholder="Search Employees..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="paraghraph-regular no-focus placeholder border-none shadow-none "
      />
    </div>
  );
};

export default Search;
