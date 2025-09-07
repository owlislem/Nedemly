import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "CDD", value: 90, color: "#ED1D1D" }, // أحمر
  { name: "CDI", value: 170, color: "#2BC24B" }, // أخضر
  { name: "Undefined", value: 35, color: "#F5FF38" }, // أصفر
];

export default function ContractChart() {
  return (
    <div className="self-center w-[500px] max-md:w-[400px] max-sm:w-[320px] h-[400px] ">
      {" "}
      {/* حاوية مرنة */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
