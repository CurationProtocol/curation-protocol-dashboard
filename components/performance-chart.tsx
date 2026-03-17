"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const performanceData = [
  { month: "Oct", reputation: 75, rewards: 2800 },
  { month: "Nov", reputation: 82, rewards: 4200 },
  { month: "Dec", reputation: 88, rewards: 6100 },
  { month: "Ene", reputation: 92, rewards: 8420 },
]

export function PerformanceChart() {
  return (
    <div className="rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-2">
          Gráfico de Rendimiento
        </h3>
        <p className="text-xs text-muted-foreground">Reputación vs Recompensas (Últimos 3 Meses)</p>
      </div>

      {/* Chart */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
            <XAxis 
              dataKey="month" 
              stroke="var(--muted-foreground)"
              style={{ fontSize: "12px", fontFamily: "monospace" }}
            />
            <YAxis 
              stroke="var(--muted-foreground)"
              style={{ fontSize: "12px", fontFamily: "monospace" }}
              yAxisId="left"
            />
            <YAxis 
              stroke="var(--muted-foreground)"
              style={{ fontSize: "12px", fontFamily: "monospace" }}
              yAxisId="right"
              orientation="right"
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                fontFamily: "monospace",
                fontSize: "12px",
              }}
              formatter={(value) => [value, ""]}
              labelStyle={{ color: "var(--accent)" }}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="reputation"
              stroke="var(--primary)"
              strokeWidth={3}
              dot={{ fill: "var(--primary)", r: 5 }}
              activeDot={{ r: 7 }}
              name="Reputación"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="rewards"
              stroke="var(--accent)"
              strokeWidth={3}
              dot={{ fill: "var(--accent)", r: 5 }}
              activeDot={{ r: 7 }}
              name="Recompensas (SOL)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="mt-6 grid grid-cols-2 gap-4 pt-6 border-t border-border">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary" />
          <span className="text-xs font-mono text-muted-foreground">Reputación (Puntos)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-accent" />
          <span className="text-xs font-mono text-muted-foreground">Recompensas (SOL)</span>
        </div>
      </div>
    </div>
  )
}
