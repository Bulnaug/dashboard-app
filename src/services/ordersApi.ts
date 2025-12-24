import { supabase } from "./supabaseClient"
import { type Order } from "./ordersData"

export const fetchOrders = async (): Promise<Order[]> => {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .order("date", { ascending: false })

  if (error) {
    console.error(error)
    throw error
  }

  return data as Order[]
}
