"use client"; // 👈 tell Next.js this runs only on the client

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", attendance: 120 },
  { month: "Feb", attendance: 98 },
  { month: "Mar", attendance: 140 },
  { month: "Apr", attendance: 110 },
  { month: "May", attendance: 160 },
  { month: "Jun", attendance: 130 },
  { month: "Jul", attendance: 170 },
  { month: "Aug", attendance: 150 },
  { month: "Sep", attendance: 180 },
  { month: "Oct", attendance: 200 },
  { month: "Nov", attendance: 170 },
  { month: "Dec", attendance: 210 },
];

const AttendanceChart = () => {
  return (
    <div className="w-full h-[400px] mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="attendanceGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4CBCEF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="attendance"
            stroke="#4CBCEF"
            fillOpacity={1}
            fill="url(#attendanceGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
