import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Table = () => {
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
                Position
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Department
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Responsable
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr className="bg-white">
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                <div className="flex gap-2 items-center">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <Link className="font-semibold" href={"/"}>
                      Belkherchouche Soundes
                    </Link>
                    <p className="text-xs text-gray-500">
                      soundes.belkherchouche@gmail.com
                    </p>
                  </div>
                </div>
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                UI/UX Designer
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                Product
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                Amroaui Yacine
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                <DropdownMenu>
                  <DropdownMenuTrigger className="border-none focus:outline-none">
                    <span className="text-gray-500 hover:text-gray-700">
                      ...
                    </span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white">
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                <div className="flex gap-2 items-center">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <Link className="font-semibold" href={"/"}>
                      Belkherchouche Soundes
                    </Link>
                    <p className="text-xs text-gray-500">
                      soundes.belkherchouche@gmail.com
                    </p>
                  </div>
                </div>
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                UI/UX Designer
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                Product
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                Amroaui Yacine
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                <DropdownMenu>
                  <DropdownMenuTrigger className="border-none focus:outline-none">
                    <span className="text-gray-500 hover:text-gray-700">
                      ...
                    </span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white">
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                <div className="flex gap-2 items-center">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <Link className="font-semibold" href={"/"}>
                      Belkherchouche Soundes
                    </Link>
                    <p className="text-xs text-gray-500">
                      soundes.belkherchouche@gmail.com
                    </p>
                  </div>
                </div>
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                UI/UX Designer
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                Product
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                Amroaui Yacine
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                <DropdownMenu>
                  <DropdownMenuTrigger className="border-none focus:outline-none">
                    <span className="text-gray-500 hover:text-gray-700">
                      ...
                    </span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white">
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden flex flex-col gap-4 mt-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <Link className="font-semibold" href={"/"}>
                Belkherchouche Soundes
              </Link>
              <p className="text-xs text-gray-500">
                soundes.belkherchouche@gmail.com
              </p>
              <p className="text-sm text-gray-700">UI/UX Designer</p>
              <p className="text-sm text-gray-700">Product</p>
              <p className="text-sm text-gray-700">
                Responsable: Amroaui Yacine
              </p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger className="ml-auto border-none focus:outline-none">
                <span className="text-gray-500 hover:text-gray-700">...</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
