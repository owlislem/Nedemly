import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";

const LeftSideBar = () => {
  return (
    <div
      className="h-[calc(100vh)] flex flex-col gap-12
  bg-primary-100 z-50 w-[250px] md:w-[300px] p-4 max-sm:hidden"
    >
      <Link href={"/"}>
        <p className=" font-space-grotesk text-white text-[40px] font-bold px-2  ">
          Nedemly
        </p>
      </Link>
      <section className="w-full">
        <NavLinks isMobileNav={false} />
      </section>
    </div>
  );
};

export default LeftSideBar;
