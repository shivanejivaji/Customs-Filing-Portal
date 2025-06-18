import type { Filing, Customer, DashboardStats, User } from "../types"

export const mockUser: User = {
  id: "1",
  name: "Sarah Johnson",
  email: "sarah.johnson@customsbroker.com",
  company: "Johnson Customs Services",
  avatar: "/placeholder.svg?height=40&width=40",
}

export const mockStats: DashboardStats = {
  pendingFilings: 3,
  awaitingApproval: 4,
  completedToday: 12,
  totalCustomers: 28,
}

export const mockFilings: Filing[] = [
  {
    id: "F001",
    customerName: "ABC Electronics Inc.",
    trackingNumber: "TRK-2024-001",
    status: "pending",
    submittedDate: "2024-01-15",
    estimatedCompletion: "2024-01-18",
    value: 25000,
    description: "Electronic components from China",
  },
  {
    id: "F002",
    customerName: "Global Textiles Ltd.",
    trackingNumber: "TRK-2024-002",
    status: "approved",
    submittedDate: "2024-01-14",
    estimatedCompletion: "2024-01-17",
    value: 18500,
    description: "Cotton fabrics from India",
  },
  {
    id: "F003",
    customerName: "Tech Solutions Corp.",
    trackingNumber: "TRK-2024-003",
    status: "in-review",
    submittedDate: "2024-01-13",
    estimatedCompletion: "2024-01-16",
    value: 42000,
    description: "Computer hardware from Taiwan",
  },
  {
    id: "F004",
    customerName: "Fashion Forward LLC",
    trackingNumber: "TRK-2024-004",
    status: "rejected",
    submittedDate: "2024-01-12",
    estimatedCompletion: "2024-01-15",
    value: 15000,
    description: "Clothing items from Vietnam",
  },
  {
    id: "F005",
    customerName: "Industrial Parts Co.",
    trackingNumber: "TRK-2024-005",
    status: "approved",
    submittedDate: "2024-01-11",
    estimatedCompletion: "2024-01-14",
    value: 35000,
    description: "Machinery parts from Germany",
  },
]

export const mockCustomers: Customer[] = [
  {
    id: "C001",
    name: "John Smith",
    company: "ABC Electronics Inc.",
    email: "john@abcelectronics.com",
    phone: "+1 (555) 123-4567",
    totalFilings: 15,
    lastActivity: "2024-01-15",
  },
  {
    id: "C002",
    name: "Maria Garcia",
    company: "Global Textiles Ltd.",
    email: "maria@globaltextiles.com",
    phone: "+1 (555) 234-5678",
    totalFilings: 8,
    lastActivity: "2024-01-14",
  },
  {
    id: "C003",
    name: "David Chen",
    company: "Tech Solutions Corp.",
    email: "david@techsolutions.com",
    phone: "+1 (555) 345-6789",
    totalFilings: 22,
    lastActivity: "2024-01-13",
  },
]
