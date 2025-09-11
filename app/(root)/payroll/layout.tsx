"use client";
import StatsCard from "@/components/shared/StatsCard";
import React from "react";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { payrollCards } from "./constants";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();

  return (
    <section className="flex  w-full flex-col justify-between gap-4 sm:flex-col  ">
      <h1 className="h1-bold text-primary-100">Payroll</h1>
      <div className="grid gap-6 max-md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {payrollCards.map((item) => (
          <StatsCard
            key={item.title}
            title={item.title}
            displayControl={false}
            value={"40.000DA"}
            analyticsLabel={item.analyticsLabel}
            typeControl={item.typeControl}
          />
        ))}
      </div>
      <div className="flex flex-col gap-2 ">
        <div className="attendance-links flex gap-4 flex-wrap">
          <Link
            href={ROUTES.CURRENT_PAYROLL}
            className={cn(
              pathname === ROUTES.CURRENT_PAYROLL
                ? "paragraph-semibold"
                : "paragraph-regular",
              "px-2 py-1"
            )}
          >
            Current Payroll{" "}
          </Link>
          <Link
            href={ROUTES.SALARY_CONFIGURATION}
            className={cn(
              pathname === ROUTES.SALARY_CONFIGURATION
                ? "paragraph-semibold"
                : "paragraph-regular",
              "px-2 py-1"
            )}
          >
            Salary Configuration{" "}
          </Link>
          <Link
            href={ROUTES.PAYROLL_HISTORY}
            className={cn(
              pathname === ROUTES.PAYROLL_HISTORY
                ? "paragraph-semibold"
                : "paragraph-regular",
              "px-2 py-1"
            )}
          >
            Payroll History{" "}
          </Link>
          <Link
            href={ROUTES.REPORTS}
            className={cn(
              pathname === ROUTES.REPORTS
                ? "paragraph-semibold"
                : "paragraph-regular",
              "px-2 py-1"
            )}
          >
            Reports{" "}
          </Link>
        </div>
        {children}
      </div>
    </section>
  );
};

export default RootLayout;
