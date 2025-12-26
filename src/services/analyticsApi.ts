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

export interface UsersByPlan {
  plan: string
  count: number
}

export const fetchUsersByPlan = async (): Promise<UsersByPlan[]> => {
  const { data, error } = await supabase.rpc("users_by_plan")

  if (error) {
    console.error("Users by plan error:", error)
    return []
  }

  return data ?? []
}
