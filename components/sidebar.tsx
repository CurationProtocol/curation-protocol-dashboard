"use client"

import { Compass, Vote, Gift, BarChart3, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const navItems = [
  { id: "explore", label: "Explorar Propuestas", icon: Compass },
  { id: "votes", label: "Mis Votos", icon: Vote },
  { id: "rewards", label: "Recompensas", icon: Gift },
  { id: "stats", label: "Estadísticas", icon: BarChart3 },
]

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-20 flex-col items-center border-r border-border bg-sidebar py-6 lg:w-64">
      {/* Logo */}
      <div className="mb-8 flex items-center gap-3 px-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
          <span className="text-lg font-bold text-primary-foreground">CP</span>
        </div>
        <span className="hidden text-lg font-semibold text-foreground lg:block">
          Curation
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col gap-2 px-3 w-full">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:bg-secondary hover:text-foreground",
                activeTab === item.id && "bg-primary/10 text-primary"
              )}
            >
              <Icon className="h-5 w-5 shrink-0" />
              <span className="hidden text-sm font-medium lg:block">
                {item.label}
              </span>
            </button>
          )
        })}
      </nav>

      {/* Post Content Button */}
      <div className="mt-auto w-full px-3">
        <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-4 py-3 text-sm font-semibold text-background transition-all hover:opacity-90 lg:justify-start">
          <Plus className="h-5 w-5" />
          <span className="hidden lg:block">Postular Contenido</span>
        </button>
      </div>
    </aside>
  )
}
