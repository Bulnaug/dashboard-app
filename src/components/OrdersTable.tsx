import { useEffect, useState } from "react"
import { type Order } from "../services/ordersData"
import { fetchOrders } from "../services/ordersApi"

const statusStyles = {
  Completed: "text-green-400",
  Pending: "text-yellow-400",
  Cancelled: "text-red-400",
}

const OrdersTable = () => {
  const [orders, setOrders] = useState<Order[]>([])
  const [filter, setFilter] = useState<"All" | Order["status"]>("All")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchOrders()
      .then(setOrders)
      .finally(() => setLoading(false))
  }, [])

  const filteredOrders =
    filter === "All"
      ? orders
      : orders.filter(order => order.status === filter)

  if (loading) {
    return (
      <div className="bg-slate-800 p-6 rounded-xl">
        Loading orders...
      </div>
    )
  }

  return (
    <div className="bg-slate-800 p-6 rounded-xl">
      <div className="flex justify-between mb-4">
        <h3 className="text-lg font-semibold">Aktuelle Bestellungen</h3>

        <select
          value={filter}
          onChange={e => setFilter(e.target.value as any)}
          className="bg-slate-700 px-3 py-1 rounded"
        >
          <option value="All">Alle</option>
          <option value="Completed">Abgeschlossen</option>
          <option value="Pending">Anhängig</option>
          <option value="Cancelled">Storniert</option>
        </select>
      </div>

      <table className="w-full text-sm">
        <tbody>
          {filteredOrders.map(order => (
            <tr key={order.id} className="border-b border-slate-700">
              <td>{order.customer}</td>
              <td className={statusStyles[order.status]}>
                {order.status}
              </td>
              <td className="text-right">${order.amount}</td>
              <td className="text-right text-slate-400">
                {order.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OrdersTable
