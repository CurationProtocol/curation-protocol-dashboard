"use client"

import { CheckCircle, XCircle, Coins } from "lucide-react"

export interface Proposal {
  id: string
  category: string
  title: string
  summary: string
  stake: number
  votesFor: number
  votesAgainst: number
}

interface ProposalCardProps {
  proposal: Proposal
  onValidate: (id: string) => void
  onReject: (id: string) => void
}

const categoryColors: Record<string, string> = {
  Blockchain: "bg-primary/20 text-primary",
  IA: "bg-accent/20 text-accent",
  Web3: "bg-blue-500/20 text-blue-400",
  DeFi: "bg-yellow-500/20 text-yellow-400",
  NFT: "bg-pink-500/20 text-pink-400",
}

export function ProposalCard({ proposal, onValidate, onReject }: ProposalCardProps) {
  const totalVotes = proposal.votesFor + proposal.votesAgainst
  const forPercentage = totalVotes > 0 ? (proposal.votesFor / totalVotes) * 100 : 50
  const againstPercentage = totalVotes > 0 ? (proposal.votesAgainst / totalVotes) * 100 : 50

  return (
    <div className="group relative flex flex-col gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
      {/* Category Badge */}
      <div className="flex items-center justify-between">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            categoryColors[proposal.category] || "bg-muted text-muted-foreground"
          }`}
        >
          {proposal.category}
        </span>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Coins className="h-4 w-4 text-accent" />
          <span className="font-mono font-semibold text-accent">
            {proposal.stake.toLocaleString()} TOKENS
          </span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold leading-tight text-foreground line-clamp-2">
        {proposal.title}
      </h3>

      {/* Summary */}
      <p className="text-sm text-muted-foreground line-clamp-2">{proposal.summary}</p>

      {/* Voting Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Validar {forPercentage.toFixed(0)}%
          </span>
          <span className="flex items-center gap-1">
            Rechazar {againstPercentage.toFixed(0)}%
            <span className="h-2 w-2 rounded-full bg-destructive" />
          </span>
        </div>
        <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-accent to-accent/70 transition-all"
            style={{ width: `${forPercentage}%` }}
          />
          <div
            className="absolute right-0 top-0 h-full bg-gradient-to-l from-destructive to-destructive/70 transition-all"
            style={{ width: `${againstPercentage}%` }}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-2">
        <button
          onClick={() => onValidate(proposal.id)}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-accent bg-accent/10 px-4 py-2.5 text-sm font-semibold text-accent transition-all hover:bg-accent hover:text-background"
        >
          <CheckCircle className="h-4 w-4" />
          Validar
        </button>
        <button
          onClick={() => onReject(proposal.id)}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-destructive bg-destructive/10 px-4 py-2.5 text-sm font-semibold text-destructive transition-all hover:bg-destructive hover:text-white"
        >
          <XCircle className="h-4 w-4" />
          Rechazar
        </button>
      </div>
    </div>
  )
}
