import Link from "next/link";
import React from "react";
import MobileNavigation from "./MobileNavigation";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex-between bg-primary-100  w-full fixed z-50 gap-5 p-6 sm:px-12 xl:bg-white  ">
      <Link href="/" style={{ textDecoration: "none" }}>
        <p className="h2-bold font-space-grotesk text-primary-100 max-xl:text-white  ">
          Nedemly
        </p>
      </Link>
      <div className="Profile-side flex-between gap-5 max-md:hidden text-black max-xl:text-white">
        <Image
          src={"/icons/notification.svg"}
          width={25}
          height={25}
          alt="Notification Icon"
          className="filter grayscale brightness-0 invert xl:filter-none xl:grayscale-0 xl:brightness-100 xl:invert-0"
        />
        <Avatar className="rounded-4xl">
          <AvatarImage
            src="https://github.com/shadcn.png"
            width={40}
            height={40}
            className="rounded-4xl"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <MobileNavigation />
    </nav>
  );
};

export default Navbar;
