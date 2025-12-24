import RevenueLineChart from "../components/RevenueLineChart"
import UsersPieChart from "../components/UsersPieChart"
import OrdersTable from "../components/OrdersTable"

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Dashboard Overview</h2>

      {/* KPI */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-800 p-6 rounded-xl">
          <p className="text-slate-400">Users</p>
          <p className="text-3xl font-bold mt-2">1,245</p>
        </div>
        <div className="bg-slate-800 p-6 rounded-xl">
          <p className="text-slate-400">Revenue</p>
          <p className="text-3xl font-bold mt-2">$32,540</p>
        </div>
        <div className="bg-slate-800 p-6 rounded-xl">
          <p className="text-slate-400">Orders</p>
          <p className="text-3xl font-bold mt-2">320</p>
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
