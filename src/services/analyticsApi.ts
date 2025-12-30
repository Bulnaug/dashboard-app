import { supabase } from "./supabaseClient"

export interface RevenueByMonth {
  month: string
  revenue: number
}

export const fetchRevenueByMonth = async (): Promise<RevenueByMonth[]> => {
  const { data, error } = await supabase.rpc("revenue_by_month")

  if (error) {
    console.error("Revenue fetch error:", error)
    return []
  }

  return data ?? []
}

export async function fetchOrdersByStatus() {
  const { data, error } = await supabase
    .from("orders_by_status")
    .select("*")

  if (error) throw error
  return data
}


export const getDashboardKPI = async () => {
  const [ordersResult, revenueResult, usersResult] = await Promise.all([
    supabase.from("orders").select("id", { count: "exact", head: true }),
    supabase.from("orders").select("amount"),
    supabase.from("orders").select("id", { count: "exact", head: true }),
  ])

  if (ordersResult.error || revenueResult.error || usersResult.error) {
    throw new Error("Failed to load dashboard KPI")
  }

  const totalRevenue =
    revenueResult.data?.reduce((sum, o) => sum + Number(o.amount), 0) ?? 0

  return {
    orders: ordersResult.count ?? 0,
    revenue: totalRevenue,
    users: usersResult.count ?? 0,
  }
}
