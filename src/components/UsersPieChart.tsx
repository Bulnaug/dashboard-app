import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts"
import { usersData } from "../services/mockData"

const COLORS = ["#6366f1", "#22c55e", "#f97316"]

const UsersPieChart = () => {
  return (
    <div className="bg-slate-800 p-6 rounded-xl h-[300px]">
      <h3 className="text-lg font-semibold mb-4">Users by Plan</h3>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={usersData}
            dataKey="value"
            nameKey="name"
            innerRadius={60}
            outerRadius={100}
          >
            {usersData.map((_, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default UsersPieChart
