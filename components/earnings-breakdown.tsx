"use client"

import { Award, DollarSign, Zap } from "lucide-react"

interface EarningsBreakdownProps {
  onClaimClick: () => void
}

export function EarningsBreakdown({ onClaimClick }: EarningsBreakdownProps) {
  return (
    <div className="rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm space-y-6">
      {/* Header */}
      <div>
        <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-2">
          Yield de Curación
        </h3>
        <p className="text-xs text-muted-foreground">Ganancias Acumuladas On-Chain</p>
      </div>

      {/* Total Earnings */}
      <div className="p-4 rounded-lg border border-accent/30 bg-accent/5">
        <div className="text-4xl font-bold text-accent font-mono">8,420.75</div>
        <p className="text-xs text-accent mt-2 font-mono">SOL | APY: 24.8%</p>
      </div>

      {/* Breakdown */}
      <div className="space-y-4">
        {/* Validation Rewards */}
        <div className="rounded-lg border border-border/50 p-4 space-y-2">
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4 text-accent" />
            <span className="text-sm font-mono text-muted-foreground">Recompensas por Validación</span>
          </div>
          <div className="text-3xl font-bold text-accent font-mono">5,240.50</div>
          <p className="text-xs text-muted-foreground font-mono">
            982 validaciones correctas
          </p>
        </div>

        {/* Early Consensus Bonus */}
        <div className="rounded-lg border border-border/50 p-4 space-y-2">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-accent" />
            <span className="text-sm font-mono text-muted-foreground">Bonos por Consenso Temprano</span>
          </div>
          <div className="text-3xl font-bold text-accent font-mono">3,180.25</div>
          <p className="text-xs text-muted-foreground font-mono">
            Votaciones en los primeros 5 minutos
          </p>
        </div>
      </div>

      {/* Claim Button */}
      <button
        onClick={onClaimClick}
        className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-background font-bold font-mono text-sm transition-all hover:opacity-90 border border-accent/50"
      >
        <DollarSign className="inline h-4 w-4 mr-2" />
        Claim Rewards (Últimos 7 Días)
      </button>
    </div>
  )
}
