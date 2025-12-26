import { useEffect, useState } from "react"
import RevenueLineChart from "../components/RevenueLineChart"
import UsersPieChart from "../components/UsersPieChart"
import OrdersTable from "../components/OrdersTable"
import { getDashboardKPI } from "../services/analyticsApi"

type KPI = {
  users: number
  revenue: number
  orders: number
}

const Dashboard = () => {

  const [kpi, setKpi] = useState<KPI | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getDashboardKPI()
      .then(setKpi)
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Dashboard Overview</h2>

      {/* KPI */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-800 p-6 rounded-xl">
          <p className="text-slate-400">Benutzer</p>
          <p className="text-3xl font-bold mt-2">{loading ? "—" : kpi?.users}</p>
        </div>
        <div className="bg-slate-800 p-6 rounded-xl">
          <p className="text-slate-400">Umsatz</p>
          <p className="text-3xl font-bold mt-2"> {loading ? "—" : `$${kpi?.revenue.toLocaleString()}`}</p>
        </div>
        <div className="bg-slate-800 p-6 rounded-xl">
          <p className="text-slate-400">Bestellungen</p>
          <p className="text-3xl font-bold mt-2">{loading ? "—" : kpi?.orders}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueLineChart />
        <UsersPieChart />
      </div>
      {/* Table */}
      <div>
        <OrdersTable />
      </div>
    </div>
  )
}

export default Dashboard
