"use client";
import StatsCard from "@/components/shared/StatsCard";
import React from "react";
import { attendanceCards } from "./constants";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();

  return (
    <section className="flex  w-full flex-col justify-between gap-4 sm:flex-col  ">
      <h1 className="h1-bold text-primary-100">ATTENDANCE</h1>
      <div className="grid gap-6 max-md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {attendanceCards.map((item) => (
          <StatsCard
            key={item.title}
            title={item.title}
            displayControl
            value={183}
            analyticsLabel={item.analyticsLabel}
            typeControl={item.typeControl}
          />
        ))}
      </div>
      <div className="flex flex-col gap-2 ">
        <div className="attendance-links flex gap-4 flex-wrap">
          <Link
            href={ROUTES.DAILY_ATTENDANCE}
            className={cn(
              pathname === ROUTES.DAILY_ATTENDANCE
                ? "paragraph-semibold"
                : "paragraph-regular",
              "px-2 py-1"
            )}
          >
            Daily Attendance
          </Link>
          <Link
            href={ROUTES.CALENDAR_VIEW}
            className={cn(
              pathname === ROUTES.CALENDAR_VIEW
                ? "paragraph-semibold"
                : "paragraph-regular",
              "px-2 py-1"
            )}
          >
            Calendar View{" "}
          </Link>
          <Link
            href={ROUTES.ABSENCE_REQUESTS}
            className={cn(
              pathname === ROUTES.ABSENCE_REQUESTS
                ? "paragraph-semibold"
                : "paragraph-regular",
              "px-2 py-1"
            )}
          >
            Absence Requests{" "}
          </Link>
          <Link
            href={ROUTES.OVERTIME_TRACKING}
            className={cn(
              pathname === ROUTES.OVERTIME_TRACKING
                ? "paragraph-semibold"
                : "paragraph-regular",
              "px-2 py-1"
            )}
          >
            Overtime Tracking{" "}
          </Link>
        </div>
        {children}
      </div>
    </section>
  );
};

export default RootLayout;
