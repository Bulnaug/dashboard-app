import { useEffect, useState, useRef } from "react"
import { fetchOrders } from "../services/ordersApi"

type OrderStatus = "Completed" | "Pending" | "Cancelled"

type Order = {
  id: number
  customer: string
  amount: number
   status: OrderStatus
  date: number
}


const statusStyles = {
  Completed: "text-green-400",
  Pending: "text-yellow-400",
  Cancelled: "text-red-400",
}

const OrdersTable = () => {
  const [orders, setOrders] = useState<Order[]>([])
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")

  const loaderRef = useRef<HTMLDivElement | null>(null)

  const requestIdRef = useRef(0)

  const loadOrders = async () => {
    if (loading || !hasMore) return

    setLoading(true)

    const requestId = ++requestIdRef.current

    const data = await fetchOrders(page, search, statusFilter)

    if (requestId !== requestIdRef.current) return

    if (data.length === 0) {
      setHasMore(false)
    } else {
      setOrders(prev =>
        page === 0 ? data : [...prev, ...data]
      )
      setPage(prev => prev + 1)
    }

    setLoading(false)
  }


  // initial load
  useEffect(() => {
    loadOrders()
  }, [])


  // infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadOrders()
        }
      },
      { threshold: 1 }
    )

    if (loaderRef.current) {
      observer.observe(loaderRef.current)
    }

    return () => observer.disconnect()
  }, [loading, hasMore])

  useEffect(() => {
    requestIdRef.current++
    setOrders([])
    setPage(0)
    setHasMore(true)
    
    loadOrders()
  }, [search, statusFilter])


  return (
    <div className="bg-slate-800 rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4">Bestellungen</h3>

        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            placeholder="Kunde suchen..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-slate-700 px-4 py-2 rounded-lg outline-none"
          />

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-slate-700 px-4 py-2 rounded-lg"
          >
            <option>All</option>
            <option>Completed</option>
            <option>Pending</option>
            <option>Cancelled</option>
          </select>
        </div>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-slate-400 border-b border-slate-700">
            <th className="py-2">Kunde</th>
            <th className="py-2">Betrag</th>
            <th className="py-2">Status</th>
            <th className="py-2">Datum</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className="border-b border-slate-700 hover:bg-slate-700/40"
            >
              <td className="py-2">{order.customer}</td>
              <td className="py-2">{order.amount} $</td>
              <td className={statusStyles[order.status]}>{order.status}</td>
              <td className="py-2">
                {new Date(order.date).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* sentinel */}
      <div
        ref={loaderRef}
        className="h-12 flex items-center justify-center text-slate-400"
      >
        {loading && "Loading..."}
        {!hasMore && "No more orders"}
      </div>
    </div>
  )
}

export default OrdersTable
