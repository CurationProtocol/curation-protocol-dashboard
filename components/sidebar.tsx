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

      {/* Solana Network Status Widget */}
      <div className="w-full px-3 mb-4">
        <div className="rounded-lg border border-border bg-secondary/50 p-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </span>
            <span className="hidden text-xs font-medium text-accent lg:block">Solana Network</span>
            <span className="lg:hidden text-xs font-medium text-accent">SOL</span>
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="hidden text-xs text-muted-foreground lg:block">TPS</span>
              <span className="text-xs font-semibold text-foreground lg:ml-0 mx-auto lg:mx-0">2,400</span>
            </div>
            <div className="hidden lg:flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Finality</span>
              <span className="text-xs font-semibold text-foreground">400ms</span>
            </div>
          </div>
        </div>
      </div>

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
