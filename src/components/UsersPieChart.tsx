import { useEffect, useState } from "react"
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts"
import { fetchUsersByPlan, type UsersByPlan } from "../services/analyticsApi"


const COLORS = ["#6366f1", "#22c55e", "#f97316"]

const UsersPieChart = () => {
  const [data, setData] = useState<
    { plan: string; count: number }[]
  >([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
  fetchUsersByPlan()
    .then((res) =>
      setData(
        res.map((item) => ({
          plan: item.plan,
          count: item.count,
        }))
      )
    )
    .finally(() => setLoading(false))
}, [])


  if (loading) {
    return (
      <div className="bg-slate-800 p-6 rounded-xl h-[300px]">
        Loading users...
      </div>
    )
  }

  return (
    <div className="bg-slate-800 p-6 rounded-xl h-[300px]">
      <h3 className="text-lg font-semibold mb-4">Benutzer nach Plan</h3>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="count"
            nameKey="plan"
            outerRadius={100}
            label
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default UsersPieChart
