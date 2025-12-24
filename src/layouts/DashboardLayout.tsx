import { type ReactNode } from "react"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"

interface Props {
  children: ReactNode
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen bg-slate-900 text-white">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}

export default DashboardLayout
