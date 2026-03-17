"use client"

import { CheckCircle, XCircle, Lock, Unlock } from "lucide-react"

interface CurationRecord {
  id: string
  content: string
  verdict: boolean
  poolParticipation: number
  rewardStatus: "locked" | "available"
  date: string
}

const mockCurationHistory: CurationRecord[] = [
  {
    id: "0x1a2b...3c4d",
    content: "Firedancer Security Audit",
    verdict: true,
    poolParticipation: 12.4,
    rewardStatus: "available",
    date: "2024-01-15",
  },
  {
    id: "0x4e5f...6g7h",
    content: "Jupiter DEX Analysis",
    verdict: true,
    poolParticipation: 8.2,
    rewardStatus: "available",
    date: "2024-01-14",
  },
  {
    id: "0x8i9j...0k1l",
    content: "Magic Eden NFT Report",
    verdict: false,
    poolParticipation: 5.8,
    rewardStatus: "locked",
    date: "2024-01-13",
  },
  {
    id: "0x2m3n...4o5p",
    content: "Solana Mobile Deep Dive",
    verdict: true,
    poolParticipation: 15.6,
    rewardStatus: "available",
    date: "2024-01-12",
  },
  {
    id: "0x6q7r...8s9t",
    content: "X Algorithm Deep Analysis",
    verdict: true,
    poolParticipation: 11.2,
    rewardStatus: "available",
    date: "2024-01-11",
  },
]

export function CurationImpactTable() {
  return (
    <div className="rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-2">
          Historial de Impacto
        </h3>
        <p className="text-xs text-muted-foreground">Últimas Curaciones Realizadas</p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm font-mono">
          <thead>
            <tr className="border-b border-border/50">
              <th className="text-left py-3 px-4 text-muted-foreground text-xs font-mono uppercase">
                Contenido Validado
              </th>
              <th className="text-left py-3 px-4 text-muted-foreground text-xs font-mono uppercase">
                Veredicto
              </th>
              <th className="text-left py-3 px-4 text-muted-foreground text-xs font-mono uppercase">
                Pool %
              </th>
              <th className="text-left py-3 px-4 text-muted-foreground text-xs font-mono uppercase">
                Estado
              </th>
              <th className="text-left py-3 px-4 text-muted-foreground text-xs font-mono uppercase">
                Fecha
              </th>
            </tr>
          </thead>
          <tbody>
            {mockCurationHistory.map((record) => (
              <tr key={record.id} className="border-b border-border/30 hover:bg-secondary/30 transition-colors">
                <td className="py-4 px-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-foreground font-bold">{record.content}</span>
                    <span className="text-muted-foreground text-xs">{record.id}</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    {record.verdict ? (
                      <>
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span className="text-accent">Verdadero</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-4 w-4 text-destructive" />
                        <span className="text-destructive">Falso</span>
                      </>
                    )}
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-1.5 bg-border rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent transition-all"
                        style={{ width: `${record.poolParticipation * 3}%` }}
                      />
                    </div>
                    <span className="text-accent font-bold">{record.poolParticipation}%</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    {record.rewardStatus === "available" ? (
                      <>
                        <Unlock className="h-4 w-4 text-accent" />
                        <span className="text-accent">Available</span>
                      </>
                    ) : (
                      <>
                        <Lock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Locked</span>
                      </>
                    )}
                  </div>
                </td>
                <td className="py-4 px-4 text-muted-foreground">{record.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
