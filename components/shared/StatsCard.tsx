import Image from "next/image";
import React from "react";

const StatsCard = ({
  title,
  value,
  displayControl,
  analyticsLabel,
  typeControl,
}: {
  title: string;
  value: number | string;
  analyticsLabel: string;
  displayControl?: boolean;
  typeControl?: string;
}) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentMonth = new Date().getMonth();
  const monthName = months[currentMonth];
  return (
    <div className="bg-white  md:flex-1 px-6 py-4 max-sm:px-4 max-sm:py-2 gap-3 flex flex-col border border-[#BABABA] rounded-4xl">
      <p className="base-meduim text-light-400">{title}</p>

      <div className="Stats-control self-center flex flex-col items-center gap-2 ">
        <div className="flex gap-2 ">
          {displayControl && (
            <>
              {typeControl === "Month" ? (
                <p className="base-bold">{monthName}</p>
              ) : (
                <p className="base-bold">Today</p>
              )}
              <Image
                src={"/icons/bottom-arrow.svg"}
                height={8}
                width={8}
                alt="Arrow"
              />{" "}
            </>
          )}
        </div>
        <p className="h1-bold">{value}</p>
        <p className="base-meduim text-light-400">
          <span className="text-[#2AC24B]"> +1 </span>
          {analyticsLabel}
        </p>
      </div>
    </div>
  );
};

export default StatsCard;
