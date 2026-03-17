"use client"

import { AuthorityMetrics } from "@/components/authority-metrics"
import { PerformanceChart } from "@/components/performance-chart"
import { CurationImpactTable } from "@/components/curation-impact-table"

export function StatisticsDashboard() {
  return (
    <div className="space-y-6 pb-10">
      {/* Authority Metrics Panel */}
      <AuthorityMetrics />

      {/* Performance Chart */}
      <PerformanceChart />

      {/* Curation Impact Table */}
      <CurationImpactTable />
    </div>
  )
}
