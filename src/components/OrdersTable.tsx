import { useState } from "react"
import { type Order, ordersData } from "../services/ordersData"

const statusStyles = {
  Completed: "text-green-400",
  Pending: "text-yellow-400",
  Cancelled: "text-red-400",
}

const OrdersTable = () => {
  const [filter, setFilter] = useState<"All" | Order["status"]>("All")

  const filteredOrders =
    filter === "All"
      ? ordersData
      : ordersData.filter(order => order.status === filter)

  return (
    <div className="bg-slate-800 p-6 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Recent Orders</h3>

        <select
          value={filter}
          onChange={e => setFilter(e.target.value as any)}
          className="bg-slate-700 text-white px-3 py-1 rounded-md"
        >
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-slate-400 border-b border-slate-700">
              <th className="text-left py-2">Customer</th>
              <th className="text-left py-2">Status</th>
              <th className="text-right py-2">Amount</th>
              <th className="text-right py-2">Date</th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.map(order => (
              <tr key={order.id} className="border-b border-slate-700 last:border-0">
                <td className="py-2">{order.customer}</td>
                <td className={`py-2 ${statusStyles[order.status]}`}>
                  {order.status}
                </td>
                <td className="py-2 text-right">${order.amount}</td>
                <td className="py-2 text-right text-slate-400">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OrdersTable
