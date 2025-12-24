import { NavLink } from "react-router-dom"

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `block ${
    isActive ? "text-white font-semibold" : "text-slate-400"
  } hover:text-white`

const Sidebar = () => {
  return (
    <aside className="w-64 bg-slate-800 p-6 hidden md:block">
      <h2 className="text-xl font-bold mb-8">📊 Dashboard</h2>

      <nav className="space-y-4">
        <NavLink to="/" className={linkClass}>
          Overview
        </NavLink>
        <NavLink to="/analytics" className={linkClass}>
          Analytics
        </NavLink>
      </nav>
    </aside>
  )
}

export default Sidebar
