"use client"

import { useState } from "react"
import { AuthorityMetrics } from "@/components/authority-metrics"
import { EarningsBreakdown } from "@/components/earnings-breakdown"
import { CurationImpactTable } from "@/components/curation-impact-table"
import { PerformanceChart } from "@/components/performance-chart"
import { Clock, TrendingUp } from "lucide-react"

export function RewardsDashboard() {
  const [showRecentRewards, setShowRecentRewards] = useState(false)

  return (
    <div className="space-y-6">
      {/* Epoch Badge */}
      <div className="flex items-center gap-2 w-fit">
        <div className="rounded-full bg-accent/20 px-4 py-2 flex items-center gap-2 border border-accent/50">
          <Clock className="h-4 w-4 text-accent" />
          <span className="text-sm font-mono font-bold text-accent">
            Next Reward Epoch: 04h 22m 10s
          </span>
        </div>
      </div>

      {/* Authority Metrics Section */}
      <div className="grid gap-6 lg:grid-cols-3">
        <AuthorityMetrics />
      </div>

      {/* Earnings Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        <EarningsBreakdown onClaimClick={() => setShowRecentRewards(!showRecentRewards)} />
        
        {/* Recent 7 Days Summary */}
        {showRecentRewards && (
          <div className="rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm">
            <h3 className="text-lg font-bold text-accent mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Últimos 7 Días
            </h3>
            <div className="space-y-3 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Validaciones:</span>
                <span className="text-accent font-bold">24</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Aciertos:</span>
                <span className="text-accent font-bold">24/24 (100%)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Recompensas Ganadas:</span>
                <span className="text-accent font-bold">1,240.50 SOL</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-border">
                <span className="text-muted-foreground">Promedio Diario:</span>
                <span className="text-accent font-bold">177.21 SOL</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Performance Chart */}
      <PerformanceChart />

      {/* Curation Impact History */}
      <CurationImpactTable />
    </div>
  )
}
