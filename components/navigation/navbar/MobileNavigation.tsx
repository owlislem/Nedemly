import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";

const MobileNavigation = () => {
  return (
    <div className="xl:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            width={36}
            height={36}
            alt="Hamburger Icon"
            className="invert xl:invert-0"
          />
        </SheetTrigger>

        <SheetContent
          side="left"
          className="w-[300px] md:w-[340px] bg-primary-100 xl:hidden border-none "
        >
          <SheetHeader>
            <SheetTitle className="hidden">Navigation</SheetTitle>
            <Link
              href="/"
              style={{ textDecoration: "none" }}
              className="self-center"
            >
              <p className=" font-space-grotesk text-white text-[40px] font-bold ">
                Nedemly
              </p>
            </Link>
            <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
              <SheetClose asChild>
                <section className="h-full flex flex-col gap-6 pt-16">
                  <NavLinks isMobileNav />
                </section>
              </SheetClose>
            </div>
            <div className="flex flex-col gap-3">
              <SheetClose asChild></SheetClose>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavigation;
