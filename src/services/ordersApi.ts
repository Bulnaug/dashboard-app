import { supabase } from "./supabaseClient"

const PAGE_SIZE = 10

export const fetchOrders = async (page: number) => {
  const from = page * PAGE_SIZE
  const to = from + PAGE_SIZE - 1

  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .order("date", { ascending: false })
    .range(from, to)

  if (error) {
    console.error("Orders fetch error:", error)
    return []
  }

  return data ?? []
}
