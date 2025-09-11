"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const AbsenceTable = () => {
  const data = [
    {
      name: "Adem Nouaour",
      type: "Sick Leave",
      startDate: "18/08/2025",
      totalDays: 3,
      status: "Pending",
    },
    {
      name: "Sara Lounis",
      type: "Annual Leave",
      startDate: "12/07/2025",
      totalDays: 10,
      status: "Approved",
    },
    {
      name: "Yacine Benali",
      type: "Steack Leave",
      startDate: "01/09/2025",
      totalDays: 2,
      status: "Rejected",
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
          <button className="bg-[#227FAA] text-white px-3 py-1 rounded-lg text-sm hover:opacity-80 transition-opacity">
            Approve
          </button>
          <button className="bg-[#ED1D1D] text-white px-3 py-1 rounded-lg text-sm hover:opacity-80 transition-opacity">
            Reject
          </button>
        </div>
      );
    }
    return null; // No actions for Approved/Rejected
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
                Start Date
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Total Days
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
                  {row.name}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {row.type}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {row.startDate}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {row.totalDays}
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
                Start Date
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Total Days
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
                <td className="p-3 text-sm text-gray-700">{row.name}</td>
                <td className="p-3 text-sm text-gray-700">{row.type}</td>
                <td className="p-3 text-sm text-gray-700">{row.startDate}</td>
                <td className="p-3 text-sm text-gray-700">{row.totalDays}</td>
                <td className="p-3">
                  <span className={getStatusStyle(row.status)}>
                    {row.status}
                  </span>
                </td>
                <td className="p-3 text-sm text-gray-700">
                  {row.status === "Pending" && (
                    <DropdownMenu>
                      <DropdownMenuTrigger className="border-none focus:outline-none bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-lg text-sm">
                        ...
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-white">
                        <DropdownMenuItem>Approve</DropdownMenuItem>
                        <DropdownMenuItem>Reject</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
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
              <div className="flex flex-col gap-1 flex-1">
                <p className="font-semibold">{row.name}</p>
                <p className="text-sm text-gray-700">Type: {row.type}</p>
                <p className="text-sm text-gray-700">Start: {row.startDate}</p>
                <p className="text-sm text-gray-700">Days: {row.totalDays}</p>
                <div className="mt-2">
                  <span
                    className={`${getStatusStyle(row.status)} inline-block`}
                  >
                    {row.status}
                  </span>
                </div>
              </div>

              {/* Show dropdown only for Pending status */}
              {row.status === "Pending" && (
                <DropdownMenu>
                  <DropdownMenuTrigger className="border-none focus:outline-none">
                    <span className="text-gray-500 hover:text-gray-700">
                      ...
                    </span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white">
                    <DropdownMenuItem>Approve</DropdownMenuItem>
                    <DropdownMenuItem>Reject</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AbsenceTable;
