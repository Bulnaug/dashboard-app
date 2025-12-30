import { useEffect, useState } from "react"
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts"
import { fetchOrdersByStatus } from "../services/analyticsApi"


const COLORS = {
  Completed: "#4ade80",
  Pending: "#facc15",
  Cancelled: "#f87171",
}

type OrdersByStatus = {
  status: "Completed" | "Pending" | "Cancelled"
  count: number
}

const OrdersByStatusPieChart = () => {
  const [data, setData] = useState<OrdersByStatus[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
  fetchOrdersByStatus()
    .then((res) =>
      setData(res)
    )
    .finally(() => setLoading(false))
}, [])


  if (loading) {
    return (
      <div className="bg-slate-800 p-6 rounded-xl h-[500px]">
        Loading users...
      </div>
    )
  }

  return (
    <div className="bg-slate-800 pb-[3.5rem] px-4 pt-6 rounded-xl h-[500px]">
      <h3 className="text-lg font-semibold mb-4">Bestellungen nach Status</h3>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
            <Pie
              data={data}
              dataKey="count"
              nameKey="status"
            >
              {data.map(entry => (
                <Cell
                  key={entry.status}
                  fill={COLORS[entry.status]}
                />
              ))}
            </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default OrdersByStatusPieChart
