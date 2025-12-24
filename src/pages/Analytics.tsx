import RevenueLineChart from "../components/RevenueLineChart"
import UsersPieChart from "../components/UsersPieChart"

const Analytics = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Analytics</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueLineChart />
        <UsersPieChart />
      </div>

      <div className="bg-slate-800 p-6 rounded-xl">
        <p className="text-slate-400">
          This page shows extended analytics and trends based on user activity.
        </p>
      </div>
    </div>
  )
}

export default Analytics
