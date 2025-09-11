import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DocumentTable = () => {
  const data = [
    {
      employee: "Adem Mouaour",
      email: "adem.mouaour@company.com",
      document: "Work Contract",
      date: "18/08/2025",
      status: "Generated",
      avatar: "https://github.com/shadcn.png",
      fallback: "AM",
    },
    {
      employee: "Sara Lounis",
      email: "sara.lounis@company.com",
      document: "Employment Letter",
      date: "15/08/2025",
      status: "Active",
      avatar: "https://github.com/shadcn.png",
      fallback: "SL",
    },
    {
      employee: "Yacine Benali",
      email: "yacine.benali@company.com",
      document: "ID Badge Request",
      date: "12/08/2025",
      status: "Rejected",
      avatar: "https://github.com/shadcn.png",
      fallback: "YB",
    },
    {
      employee: "Amina Khoualdia",
      email: "amina.khoualdia@company.com",
      document: "Training Certificate",
      date: "10/08/2025",
      status: "Generated",
      avatar: "https://github.com/shadcn.png",
      fallback: "AK",
    },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Generated":
        return "bg-gray-200 text-black px-3 py-1 rounded-3xl text-xs font-medium";
      case "Active":
        return "bg-[#227FAA] text-white px-3 py-1 rounded-3xl text-xs font-medium";
      case "Rejected":
        return "bg-[#ED1D1D] text-white px-3 py-1 rounded-3xl text-xs font-medium";
      default:
        return "";
    }
  };

  return (
    <>
      {/* Desktop & Tablet Table */}
      <div className="w-full hidden md:block mt-4 overflow-x-auto">
        <table className="w-full whitespace-nowrap border-collapse min-w-max">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Employee
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Document Name
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Date
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Status
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map((row, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <div className="flex gap-2 items-center">
                    <Avatar>
                      <AvatarImage src={row.avatar} />
                      <AvatarFallback>{row.fallback}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <Link className="font-semibold" href={"/"}>
                        {row.employee}
                      </Link>
                      <p className="text-xs text-gray-500">{row.email}</p>
                    </div>
                  </div>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {row.document}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {row.date}
                </td>
                <td className="p-3">
                  <span className={getStatusStyle(row.status)}>
                    {row.status}
                  </span>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="border-none focus:outline-none">
                      <span className="text-gray-500 hover:text-gray-700">
                        ...
                      </span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white">
                      <DropdownMenuItem>View</DropdownMenuItem>
                      <DropdownMenuItem>Download</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden flex flex-col gap-4 mt-4">
        {data.map((row, idx) => (
          <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={row.avatar} />
                <AvatarFallback>{row.fallback}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col flex-1">
                <Link className="font-semibold" href={"/"}>
                  {row.employee}
                </Link>
                <p className="text-xs text-gray-500">{row.email}</p>
                <p className="text-sm text-gray-700">
                  Document: {row.document}
                </p>
                <p className="text-sm text-gray-700">Date: {row.date}</p>
                <div className="mt-2">
                  <span className={getStatusStyle(row.status)}>
                    {row.status}
                  </span>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger className="ml-auto border-none focus:outline-none">
                  <span className="text-gray-500 hover:text-gray-700">...</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white">
                  <DropdownMenuItem>View</DropdownMenuItem>
                  <DropdownMenuItem>Download</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DocumentTable;
