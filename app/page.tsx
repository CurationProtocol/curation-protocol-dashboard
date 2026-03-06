"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { ProposalCard, type Proposal } from "@/components/proposal-card"

const mockProposals: Proposal[] = [
  {
    id: "1",
    category: "Blockchain",
    title: "Ethereum 2.0 Staking Rewards Analysis: A Deep Dive into Validator Economics",
    summary:
      "Comprehensive analysis of staking rewards, validator requirements, and the economic implications of Ethereum's transition to Proof of Stake.",
    stake: 500,
    votesFor: 245,
    votesAgainst: 55,
  },
  {
    id: "2",
    category: "IA",
    title: "GPT-5 and the Future of Autonomous AI Agents in Web3",
    summary:
      "Exploring how advanced language models are being integrated into decentralized applications to create self-governing autonomous agents.",
    stake: 1250,
    votesFor: 180,
    votesAgainst: 120,
  },
  {
    id: "3",
    category: "Web3",
    title: "Decentralized Identity Standards: A Comparison of DID Methods",
    summary:
      "An overview of various Decentralized Identifier (DID) methods and their implications for privacy, security, and interoperability.",
    stake: 750,
    votesFor: 320,
    votesAgainst: 80,
  },
  {
    id: "4",
    category: "DeFi",
    title: "Liquidity Mining Strategies for Sustainable Yield Generation",
    summary:
      "Best practices for participating in liquidity pools while managing impermanent loss and maximizing long-term returns.",
    stake: 2000,
    votesFor: 410,
    votesAgainst: 190,
  },
  {
    id: "5",
    category: "NFT",
    title: "The Rise of Dynamic NFTs: Beyond Static Digital Art",
    summary:
      "How NFTs are evolving to include programmable, interactive, and responsive elements that change based on external conditions.",
    stake: 800,
    votesFor: 95,
    votesAgainst: 205,
  },
  {
    id: "6",
    category: "Blockchain",
    title: "Cross-Chain Bridges: Security Challenges and Solutions",
    summary:
      "Analyzing the vulnerabilities of cross-chain bridges and emerging solutions to ensure secure asset transfers between networks.",
    stake: 1500,
    votesFor: 275,
    votesAgainst: 125,
  },
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("explore")
  const [proposals, setProposals] = useState<Proposal[]>(mockProposals)

  const handleValidate = (id: string) => {
    setProposals((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, votesFor: p.votesFor + 1 } : p
      )
    )
  }

  const handleReject = (id: string) => {
    setProposals((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, votesAgainst: p.votesAgainst + 1 } : p
      )
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="pl-20 lg:pl-64">
        <Header />

        <main className="p-6">
          {/* Page Title */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground">
              {activeTab === "explore" && "Explorar Propuestas"}
              {activeTab === "votes" && "Mis Votos"}
              {activeTab === "rewards" && "Recompensas"}
              {activeTab === "stats" && "Estadísticas"}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {activeTab === "explore" &&
                "Descubre y valida contenido de calidad de la comunidad"}
              {activeTab === "votes" && "Historial de tus votos y participación"}
              {activeTab === "rewards" &&
                "Tokens ganados por tu curaduría"}
              {activeTab === "stats" &&
                "Métricas y análisis de la plataforma"}
            </p>
          </div>

          {/* Stats Overview */}
          {activeTab === "explore" && (
            <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-border bg-card p-4">
                <p className="text-sm text-muted-foreground">
                  Propuestas Activas
                </p>
                <p className="mt-1 text-2xl font-bold text-foreground">
                  {proposals.length}
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <p className="text-sm text-muted-foreground">Total Staked</p>
                <p className="mt-1 text-2xl font-bold text-accent">
                  {proposals
                    .reduce((acc, p) => acc + p.stake, 0)
                    .toLocaleString()}{" "}
                  <span className="text-sm font-normal text-muted-foreground">
                    TOKENS
                  </span>
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <p className="text-sm text-muted-foreground">Votos Totales</p>
                <p className="mt-1 text-2xl font-bold text-primary">
                  {proposals
                    .reduce((acc, p) => acc + p.votesFor + p.votesAgainst, 0)
                    .toLocaleString()}
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <p className="text-sm text-muted-foreground">Tasa de Aprobación</p>
                <p className="mt-1 text-2xl font-bold text-foreground">
                  {(
                    (proposals.reduce((acc, p) => acc + p.votesFor, 0) /
                      proposals.reduce(
                        (acc, p) => acc + p.votesFor + p.votesAgainst,
                        0
                      )) *
                    100
                  ).toFixed(1)}
                  %
                </p>
              </div>
            </div>
          )}

          {/* Proposals Grid */}
          {activeTab === "explore" && (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {proposals.map((proposal) => (
                <ProposalCard
                  key={proposal.id}
                  proposal={proposal}
                  onValidate={handleValidate}
                  onReject={handleReject}
                />
              ))}
            </div>
          )}

          {/* Placeholder for other tabs */}
          {activeTab !== "explore" && (
            <div className="flex h-64 items-center justify-center rounded-xl border border-dashed border-border">
              <p className="text-muted-foreground">
                Sección en desarrollo...
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
