import React from "react";

const PayrollTable = () => {
  const payrollData = [
    {
      name: "Adem Nouaour",
      position: "UI/UX Designer",
      baseSalary: "60,000 DA",
      overtime: "3,000 DA",
      bonuses: "5,000 DA",
      deductions: "0 DA",
      netPay: "68,000 DA",
      status: "Pending",
    },
    {
      name: "Sara Belkacem",
      position: "Frontend Developer",
      baseSalary: "75,000 DA",
      overtime: "2,000 DA",
      bonuses: "10,000 DA",
      deductions: "5,000 DA",
      netPay: "82,000 DA",
      status: "Processed",
    },
    {
      name: "Yacine Amroui",
      position: "Backend Developer",
      baseSalary: "80,000 DA",
      overtime: "4,000 DA",
      bonuses: "8,000 DA",
      deductions: "3,000 DA",
      netPay: "89,000 DA",
      status: "Pending",
    },
  ];

  const getStatusStyle = (status: string) => {
    return status === "Processed"
      ? "bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium"
      : "bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-medium";
  };

  return (
    <>
      <div className="hidden lg:block mt-4 overflow-x-auto">
        <table className="w-full whitespace-nowrap border-collapse ">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3  text-sm font-semibold tracking-wide text-left">
                Employee
              </th>
              <th className="p-3   text-sm font-semibold tracking-wide text-left">
                Position
              </th>
              <th className="p-3   text-sm font-semibold tracking-wide text-left">
                Base Salary
              </th>
              <th className="p-3   text-sm font-semibold tracking-wide text-left">
                Overtime
              </th>
              <th className="p-3  text-sm font-semibold tracking-wide text-left">
                Bonuses
              </th>
              <th className="p-3  text-sm font-semibold tracking-wide text-left">
                Deductions
              </th>
              <th className="p-3  text-sm font-semibold tracking-wide text-left">
                Net Pay
              </th>
              <th className="p-3  text-sm font-semibold tracking-wide text-left">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {payrollData.map((emp, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      {emp.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    {emp.name}
                  </div>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {emp.position}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {emp.baseSalary}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {emp.overtime}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {emp.bonuses}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {emp.deductions}
                </td>
                <td className="p-3 text-sm font-semibold text-gray-900 whitespace-nowrap">
                  {emp.netPay}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <span className={getStatusStyle(emp.status)}>
                    {emp.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="lg:hidden flex flex-col gap-4 mt-4">
        {payrollData.map((emp, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded-lg shadow-sm border border-[#BABABA]"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                {emp.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{emp.name}</p>
                <p className="text-sm text-gray-600">{emp.position}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-gray-500">Base Salary:</span>
                <p className="font-medium">{emp.baseSalary}</p>
              </div>
              <div>
                <span className="text-gray-500">Overtime:</span>
                <p className="font-medium">{emp.overtime}</p>
              </div>
              <div>
                <span className="text-gray-500">Bonuses:</span>
                <p className="font-medium">{emp.bonuses}</p>
              </div>
              <div>
                <span className="text-gray-500">Deductions:</span>
                <p className="font-medium">{emp.deductions}</p>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-gray-500 text-sm">Net Pay:</span>
                  <p className="font-semibold text-lg text-gray-900">
                    {emp.netPay}
                  </p>
                </div>
                <span className={getStatusStyle(emp.status)}>{emp.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PayrollTable;
