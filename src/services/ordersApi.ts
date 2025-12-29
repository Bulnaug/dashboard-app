import { supabase } from "./supabaseClient"

export async function fetchOrders(
  page: number,
  status?: string
) {
  const from = page * 20
  const to = from + 19

  let query = supabase
    .from("orders")
    .select("*")
    .order("date", { ascending: false })
    .range(from, to)

  
  if (status !== "All") {
    query = query.eq("status", status)
  }

  const { data, error } = await query

  if (error) throw error
  return data
}