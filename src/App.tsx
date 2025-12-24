import { BrowserRouter, Routes, Route } from "react-router-dom"
import DashboardLayout from "./layouts/DashboardLayout"
import Dashboard from "./pages/Dashboard"
import Analytics from "./pages/Analytics"

function App() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  )
}

export default App
