"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const RequestsTable = () => {
  const data = [
    {
      employee: "Adem Nouaour",
      type: "Overtime Request",
      date: "18/08/2025",
      status: "Pending",
      avatar: "https://github.com/shadcn.png",
      fallback: "AN",
    },
    {
      employee: "Sara Lounis",
      type: "Schedule Change",
      date: "12/07/2025",
      status: "Approved",
      avatar: "https://github.com/shadcn.png",
      fallback: "SL",
    },
    {
      employee: "Yacine Benali",
      type: "Bonus Request",
      date: "01/09/2025",
      status: "Rejected",
      avatar: "https://github.com/shadcn.png",
      fallback: "YB",
    },
    {
      employee: "Amina Khoualdia",
      type: "Training Request",
      date: "25/08/2025",
      status: "Pending",
      avatar: "https://github.com/shadcn.png",
      fallback: "AK",
    },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-gray-200 text-black px-3 py-1 rounded-3xl text-xs font-medium";
      case "Approved":
        return "bg-[#227FAA] text-white px-3 py-1 rounded-3xl text-xs font-medium";
      case "Rejected":
        return "bg-[#ED1D1D] text-white px-3 py-1 rounded-3xl text-xs font-medium";
      default:
        return "";
    }
  };

  // Desktop action buttons
  const getActionButtons = (status: string) => {
    if (status === "Pending") {
      return (
        <div className="flex gap-2">
          <button className="bg-gray-500 text-white px-3 py-1 rounded-lg text-sm hover:opacity-80 transition-opacity">
            View
          </button>
          <button className="bg-[#227FAA] text-white px-3 py-1 rounded-lg text-sm hover:opacity-80 transition-opacity">
            Approve
          </button>
          <button className="bg-[#ED1D1D] text-white px-3 py-1 rounded-lg text-sm hover:opacity-80 transition-opacity">
            Reject
          </button>
        </div>
      );
    }
    return (
      <button className="bg-gray-500 text-white px-3 py-1 rounded-lg text-sm hover:opacity-80 transition-opacity">
        View
      </button>
    );
  };

  return (
    <>
      {/* Desktop & Tablet Table */}
      <div className="hidden lg:block mt-4 overflow-x-auto">
        <table className="w-full whitespace-nowrap border-collapse min-w-max">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Employee
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Type
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
                    <span>{row.employee}</span>
                  </div>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {row.type}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {row.date}
                </td>
                <td className="p-3">
                  <span className={getStatusStyle(row.status)}>
                    {row.status}
                  </span>
                </td>
                <td className="p-3 text-sm text-gray-700">
                  {getActionButtons(row.status)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Medium Screen Table - Show from 768px to 1023px */}
      <div className="hidden md:block lg:hidden mt-4 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Employee
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Type
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
                <td className="p-3 text-sm text-gray-700">
                  <div className="flex gap-2 items-center">
                    <Avatar>
                      <AvatarImage src={row.avatar} />
                      <AvatarFallback>{row.fallback}</AvatarFallback>
                    </Avatar>
                    <span>{row.employee}</span>
                  </div>
                </td>
                <td className="p-3 text-sm text-gray-700">{row.type}</td>
                <td className="p-3 text-sm text-gray-700">{row.date}</td>
                <td className="p-3">
                  <span className={getStatusStyle(row.status)}>
                    {row.status}
                  </span>
                </td>
                <td className="p-3 text-sm text-gray-700">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="border-none focus:outline-none bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-lg text-sm">
                      ...
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white">
                      <DropdownMenuItem>View</DropdownMenuItem>
                      {row.status === "Pending" && (
                        <>
                          <DropdownMenuItem>Approve</DropdownMenuItem>
                          <DropdownMenuItem>Reject</DropdownMenuItem>
                        </>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards - Show until 768px */}
      <div className="md:hidden flex flex-col gap-4 mt-4">
        {data.map((row, idx) => (
          <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div className="flex items-start gap-3 flex-1">
                <Avatar>
                  <AvatarImage src={row.avatar} />
                  <AvatarFallback>{row.fallback}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">{row.employee}</p>
                  <p className="text-sm text-gray-700">Type: {row.type}</p>
                  <p className="text-sm text-gray-700">Date: {row.date}</p>
                  <div className="mt-2">
                    <span
                      className={`${getStatusStyle(row.status)} inline-block`}
                    >
                      {row.status}
                    </span>
                  </div>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger className="border-none focus:outline-none">
                  <span className="text-gray-500 hover:text-gray-700">...</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white">
                  <DropdownMenuItem>View</DropdownMenuItem>
                  {row.status === "Pending" && (
                    <>
                      <DropdownMenuItem>Approve</DropdownMenuItem>
                      <DropdownMenuItem>Reject</DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RequestsTable;
