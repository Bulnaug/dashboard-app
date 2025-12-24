import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { revenueData } from "../services/mockData"

const RevenueLineChart = () => {
  return (
    <div className="bg-slate-800 p-6 rounded-xl h-[300px]">
      <h3 className="text-lg font-semibold mb-4">Revenue Growth</h3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={revenueData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="month" stroke="#cbd5f5" />
          <YAxis stroke="#cbd5f5" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#6366f1"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RevenueLineChart
