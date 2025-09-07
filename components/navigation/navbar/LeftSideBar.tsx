import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";

const LeftSideBar = () => {
  return (
    <section
      className="custom-scrollbar h-screen flex flex-col gap-12 sticky overflow-y-auto border-r top-0
  bg-primary-100 z-50  md:w-[300px] p-4 max-sm:hidden"
    >
      <Link href={"/"}>
        <p className=" font-space-grotesk text-white text-[40px] font-bold px-2  ">
          Nedemly
        </p>
      </Link>
      <section className="w-full ">
        <NavLinks isMobileNav={false} />
      </section>
    </section>
  );
};

export default LeftSideBar;
