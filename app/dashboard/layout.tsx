"use client"

import { Menu } from "@/src/components"


type LayoutProps = {
  children: React.ReactNode,
  user: React.ReactNode,
  products: React.ReactNode
}

export default function LayoutDashboard({ children }: LayoutProps) {
  return (
    <div className="grid grid-cols-12 overflow-y-auto">
      <Menu />
      <div className="col-span-9 h-screen overflow-auto">
        {children}
      </div>
    </div>
  )
}