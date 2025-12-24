import { useLocation } from "react-router-dom"

const Header = () => {
  const location = useLocation()

  const titleMap: Record<string, string> = {
    "/": "Overview",
    "/analytics": "Analytics",
  }

  return (
    <header className="h-16 bg-slate-800 flex items-center justify-between px-6 border-b border-slate-700">
      <h1 className="text-lg font-semibold">
        {titleMap[location.pathname] ?? "Dashboard"}
      </h1>

      <div className="flex items-center gap-4">
        <span className="text-slate-400 text-sm">Admin</span>
        <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center font-bold">
          A
        </div>
      </div>
    </header>
  )
}

export default Header
