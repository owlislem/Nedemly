"use client";
import { SheetClose } from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = ({ isMobileNav = false }: { isMobileNav?: boolean }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-6">
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        const LinkComp = (
          <Link
            href={item.route}
            key={item.label}
            className={cn(
              "flex items-center justify-start gap-4 p-4 font-inter text-white",
              isActive && "bg-primary-500" // Apply background only when active
            )}
            style={{
              borderRadius: isActive ? "8px" : "0px", // Only active links get radius
            }}
          >
            <Image src={item.imgURL} alt={item.label} width={25} height={25} />
            <p
              className={cn(
                isActive ? "base-bold" : "base-medium",
                !isMobileNav && "max-lg:hidden",
                "text-white"
              )}
            >
              {item.label}
            </p>
          </Link>
        );
        return isMobileNav ? (
          <SheetClose asChild key={item.route}>
            {LinkComp}
          </SheetClose>
        ) : (
          <React.Fragment key={item.route}>{LinkComp}</React.Fragment>
        );
      })}
    </div>
  );
};

export default NavLinks;
