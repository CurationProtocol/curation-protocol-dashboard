"use client"

import { RadialGauge } from "@/components/radial-gauge"
import { TrendingUp } from "lucide-react"

export function AuthorityMetrics() {
  return (
    <div className="space-y-6">
      {/* Reputation Score with Radial Gauge */}
      <div className="rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm">
        <div className="mb-6">
          <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-2">
            Reputation Score
          </h3>
          <p className="text-xs text-muted-foreground">Nivel de Confianza del Curador</p>
        </div>
        <div className="flex justify-center mb-6">
          <RadialGauge value={92} max={100} />
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-accent font-mono">92/100</div>
          <p className="text-xs text-accent mt-2">Tier: Maestro Curador</p>
        </div>
      </div>

      {/* Accuracy Rate */}
      <div className="rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm">
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
              Accuracy Rate
            </h3>
            <TrendingUp className="h-4 w-4 text-accent" />
          </div>
          <p className="text-xs text-muted-foreground">Porcentaje de Aciertos</p>
        </div>
        <div className="text-4xl font-bold text-accent font-mono">98.4%</div>
        <div className="mt-4 p-3 bg-accent/10 rounded-lg border border-accent/30">
          <p className="text-xs font-mono text-accent">
            Validaciones Correctas: 982 de 997
          </p>
        </div>
      </div>

      {/* Total Staked */}
      <div className="rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm">
        <div className="mb-4">
          <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
            Total Staked
          </h3>
          <p className="text-xs text-muted-foreground">Capital Bloqueado</p>
        </div>
        <div className="text-4xl font-bold text-accent font-mono">42,500</div>
        <p className="text-xs text-accent mt-2 font-mono">SOL</p>
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground font-mono">
            Dir. Wallet: <span className="text-accent">8xPRT...4uKs</span>
          </p>
        </div>
      </div>
    </div>
  )
}
