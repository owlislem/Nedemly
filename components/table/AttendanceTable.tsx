import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const AttendanceTable = () => {
  return (
    <>
      {/* Desktop & Tablet Table */}
      <div className="hidden md:block mt-4 overflow-x-auto">
        <table className="w-full whitespace-nowrap border-collapse min-w-max">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Employee
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Check In
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Check Out
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Total Hours
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr className="bg-white">
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                Adem Nouaour
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                09:00
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                16:00
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">7</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                <DropdownMenu>
                  <DropdownMenuTrigger className="border-none focus:outline-none">
                    <span className="text-gray-500 hover:text-gray-700">
                      ...
                    </span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white">
                    <DropdownMenuItem>View</DropdownMenuItem>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                Sara Belkacem
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                08:30
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                15:30
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">7</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                <DropdownMenu>
                  <DropdownMenuTrigger className="border-none focus:outline-none">
                    <span className="text-gray-500 hover:text-gray-700">
                      ...
                    </span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white">
                    <DropdownMenuItem>View</DropdownMenuItem>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                Yacine Amroui
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                10:00
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                18:00
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">8</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                <DropdownMenu>
                  <DropdownMenuTrigger className="border-none focus:outline-none">
                    <span className="text-gray-500 hover:text-gray-700">
                      ...
                    </span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white">
                    <DropdownMenuItem>View</DropdownMenuItem>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden flex flex-col gap-4 mt-4">
        {[
          {
            name: "Adem Nouaour",
            checkIn: "09:00",
            checkOut: "16:00",
            hours: 7,
          },
          {
            name: "Sara Belkacem",
            checkIn: "08:30",
            checkOut: "15:30",
            hours: 7,
          },
          {
            name: "Yacine Amroui",
            checkIn: "10:00",
            checkOut: "18:00",
            hours: 8,
          },
        ].map((emp, idx) => (
          <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex flex-col gap-1">
              <p className="font-semibold">{emp.name}</p>
              <p className="text-sm text-gray-700">
                Check In: {emp.checkIn} | Check Out: {emp.checkOut}
              </p>
              <p className="text-sm text-gray-700">Total Hours: {emp.hours}</p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger className="ml-auto mt-2 border-none focus:outline-none">
                <span className="text-gray-500 hover:text-gray-700">...</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuItem>View</DropdownMenuItem>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ))}
      </div>
    </>
  );
};

export default AttendanceTable;
