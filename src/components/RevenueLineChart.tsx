import { useEffect, useState } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { fetchRevenueByMonth, type RevenueByMonth } from "../services/analyticsApi"

const RevenueLineChart = () => {
  const [data, setData] = useState<RevenueByMonth[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchRevenueByMonth()
      .then(setData)
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="bg-slate-800 p-6 rounded-xl h-[300px]">
        Loading revenue...
      </div>
    )
  }

  return (
    <div className="bg-slate-800 p-6 rounded-xl h-[300px]">
      <h3 className="text-lg font-semibold mb-4">Umsatzwachstum</h3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
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
