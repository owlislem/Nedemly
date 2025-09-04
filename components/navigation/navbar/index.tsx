import Link from "next/link";
import React from "react";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
  return (
    <nav className="flex-between bg-light-800  w-full fixed z-50 gap-5 p-6 sm:px-12 max-sm:bg-primary-100  ">
      <Link href="/" style={{ textDecoration: "none" }}>
        <p className="h2-bold font-space-grotesk text-black max-sm:text-white  ">
          Nedemly
        </p>
      </Link>
      <div className="Profile-side flex-between gap-5 max-sm:hidden">
        <p>Notifi</p>
        <p>photo</p>
      </div>
      <MobileNavigation />
    </nav>
  );
};

export default Navbar;
