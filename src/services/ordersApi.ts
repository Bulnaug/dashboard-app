import { supabase } from "./supabaseClient"

const PAGE_SIZE = 10

export const fetchOrders = async (
  page: number,
  search?: string,
  status?: string
) => {
  const from = page * PAGE_SIZE
  const to = from + PAGE_SIZE - 1

  let query = supabase
    .from("orders")
    .select("*")
    .order("date", { ascending: false })
    .range(from, to)

  if (search) {
    query = query.ilike("customer", `%${search}%`)
  }

  if (status && status !== "All") {
    query = query.eq("status", status)
  }

  const { data, error } = await query

  if (error) {
    console.error("Orders fetch error:", error)
    return []
  }

  return data ?? []
}