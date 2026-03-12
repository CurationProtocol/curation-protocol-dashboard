"use client"

import { ThumbsUp, ThumbsDown, Clock, Vote } from "lucide-react"

interface VotedProject {
  id: string
  title: string
  category: string
  voteType: "for" | "against"
  votedAt: Date
  stake: number
}

const mockVotedProjects: VotedProject[] = [
  {
    id: "1",
    title: "Novedades de Firedancer en Solana: El Nuevo Cliente Validador de Jump Crypto",
    category: "Blockchain",
    voteType: "for",
    votedAt: new Date("2026-03-12T14:30:00"),
    stake: 2500,
  },
  {
    id: "2",
    title: "Impacto de la IA en DeFi: Agentes Autónomos para Trading y Gestión de Riesgos",
    category: "IA",
    voteType: "for",
    votedAt: new Date("2026-03-11T18:45:00"),
    stake: 1850,
  },
  {
    id: "3",
    title: "Análisis del Algoritmo de X (Twitter): Implicaciones para la Descentralización",
    category: "Web3",
    voteType: "against",
    votedAt: new Date("2026-03-10T09:15:00"),
    stake: 1200,
  },
  {
    id: "4",
    title: "Jupiter Exchange: Dominando el Routing de Liquidez en Solana",
    category: "DeFi",
    voteType: "for",
    votedAt: new Date("2026-03-09T21:00:00"),
    stake: 3200,
  },
  {
    id: "5",
    title: "Tensor vs Magic Eden: La Guerra por el Mercado NFT de Solana",
    category: "NFT",
    voteType: "against",
    votedAt: new Date("2026-03-08T11:30:00"),
    stake: 980,
  },
  {
    id: "6",
    title: "Saga Phone 2 y dApps Store: El Futuro del Crypto Mobile",
    category: "Blockchain",
    voteType: "for",
    votedAt: new Date("2026-03-07T16:20:00"),
    stake: 1750,
  },
]

function formatRelativeTime(date: Date): string {
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  const diffDays = Math.floor(diffHours / 24)

  if (diffHours < 1) return "Hace menos de 1 hora"
  if (diffHours < 24) return `Hace ${diffHours} hora${diffHours > 1 ? "s" : ""}`
  if (diffDays === 1) return "Ayer"
  if (diffDays < 7) return `Hace ${diffDays} días`
  return date.toLocaleDateString("es-ES", { day: "numeric", month: "short" })
}

const categoryColors: Record<string, string> = {
  Blockchain: "bg-primary/20 text-primary",
  IA: "bg-blue-500/20 text-blue-400",
  Web3: "bg-purple-500/20 text-purple-400",
  DeFi: "bg-accent/20 text-accent",
  NFT: "bg-pink-500/20 text-pink-400",
}

export function MyVotes() {
  const totalVotes = mockVotedProjects.length
  const votesFor = mockVotedProjects.filter((p) => p.voteType === "for").length
  const votesAgainst = mockVotedProjects.filter((p) => p.voteType === "against").length

  // Sort by date descending
  const sortedProjects = [...mockVotedProjects].sort(
    (a, b) => b.votedAt.getTime() - a.votedAt.getTime()
  )

  return (
    <div className="space-y-6">
      {/* Vote Counter Card */}
      <div className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <Vote className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Votos Totales</p>
            <p className="text-3xl font-bold text-foreground">{totalVotes}</p>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <ThumbsUp className="h-4 w-4 text-accent" />
            <span className="text-sm text-muted-foreground">Validaciones:</span>
            <span className="font-semibold text-accent">{votesFor}</span>
          </div>
          <div className="flex items-center gap-2">
            <ThumbsDown className="h-4 w-4 text-destructive" />
            <span className="text-sm text-muted-foreground">Rechazos:</span>
            <span className="font-semibold text-destructive">{votesAgainst}</span>
          </div>
        </div>
      </div>

      {/* Recent Votes List */}
      <div className="rounded-xl border border-border bg-card">
        <div className="border-b border-border px-6 py-4">
          <h3 className="font-semibold text-foreground">Historial de Votos</h3>
          <p className="text-sm text-muted-foreground">
            Ordenado por fecha, del más reciente al más antiguo
          </p>
        </div>
        <div className="divide-y divide-border">
          {sortedProjects.map((project) => (
            <div
              key={project.id}
              className="flex items-start gap-4 px-6 py-4 transition-colors hover:bg-secondary/30"
            >
              {/* Vote Type Icon */}
              <div
                className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                  project.voteType === "for"
                    ? "bg-accent/10 text-accent"
                    : "bg-destructive/10 text-destructive"
                }`}
              >
                {project.voteType === "for" ? (
                  <ThumbsUp className="h-4 w-4" />
                ) : (
                  <ThumbsDown className="h-4 w-4" />
                )}
              </div>

              {/* Project Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      categoryColors[project.category] || "bg-secondary text-foreground"
                    }`}
                  >
                    {project.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {project.stake.toLocaleString()} TOKENS staked
                  </span>
                </div>
                <p className="text-sm font-medium text-foreground line-clamp-2">
                  {project.title}
                </p>
              </div>

              {/* Timestamp */}
              <div className="flex shrink-0 items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>{formatRelativeTime(project.votedAt)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
