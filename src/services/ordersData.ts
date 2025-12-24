export interface Order {
  id: number
  customer: string
  status: "Completed" | "Pending" | "Cancelled"
  amount: number
  date: string
}

export const ordersData: Order[] = [
  { id: 1, customer: "John Doe", status: "Completed", amount: 320, date: "2025-01-12" },
  { id: 2, customer: "Jane Smith", status: "Pending", amount: 180, date: "2025-01-14" },
  { id: 3, customer: "Alex Brown", status: "Cancelled", amount: 90, date: "2025-01-15" },
  { id: 4, customer: "Emily Clark", status: "Completed", amount: 540, date: "2025-01-18" },
  { id: 5, customer: "Michael Lee", status: "Completed", amount: 210, date: "2025-01-20" },
]
