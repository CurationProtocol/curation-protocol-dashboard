"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { ProposalCard, type Proposal } from "@/components/proposal-card"
import { MyVotes } from "@/components/my-votes"

const mockProposals: Proposal[] = [
  {
    id: "1",
    category: "Blockchain",
    title: "Novedades de Firedancer en Solana: El Nuevo Cliente Validador de Jump Crypto",
    summary:
      "Análisis técnico del cliente validador Firedancer, su arquitectura modular y cómo promete aumentar el throughput de Solana a 1M+ TPS.",
    stake: 2500,
    votesFor: 385,
    votesAgainst: 42,
  },
  {
    id: "2",
    category: "IA",
    title: "Impacto de la IA en DeFi: Agentes Autónomos para Trading y Gestión de Riesgos",
    summary:
      "Cómo los modelos de lenguaje y agentes de IA están revolucionando las estrategias de trading algorítmico y la evaluación de riesgos en protocolos DeFi.",
    stake: 1850,
    votesFor: 220,
    votesAgainst: 95,
  },
  {
    id: "3",
    category: "Web3",
    title: "Análisis del Algoritmo de X (Twitter): Implicaciones para la Descentralización",
    summary:
      "Desglose del algoritmo de recomendación de X y debate sobre alternativas descentralizadas como Bluesky, Farcaster y Lens Protocol.",
    stake: 1200,
    votesFor: 340,
    votesAgainst: 78,
  },
  {
    id: "4",
    category: "DeFi",
    title: "Jupiter Exchange: Dominando el Routing de Liquidez en Solana",
    summary:
      "Estudio del agregador DEX líder en Solana, sus mecanismos de routing inteligente, el token JUP y el impacto en el ecosistema DeFi.",
    stake: 3200,
    votesFor: 456,
    votesAgainst: 67,
  },
  {
    id: "5",
    category: "NFT",
    title: "Tensor vs Magic Eden: La Guerra por el Mercado NFT de Solana",
    summary:
      "Comparativa entre los dos marketplaces NFT dominantes, sus modelos de royalties, herramientas para traders y estrategias de crecimiento.",
    stake: 980,
    votesFor: 145,
    votesAgainst: 112,
  },
  {
    id: "6",
    category: "Blockchain",
    title: "Saga Phone 2 y dApps Store: El Futuro del Crypto Mobile",
    summary:
      "Review del nuevo smartphone de Solana, su tienda de aplicaciones descentralizada y cómo podría cambiar la adopción masiva de Web3.",
    stake: 1750,
    votesFor: 298,
    votesAgainst: 89,
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

          {/* My Votes Section */}
          {activeTab === "votes" && <MyVotes />}

          {/* Placeholder for other tabs */}
          {activeTab !== "explore" && activeTab !== "votes" && (
            <div className="flex h-64 items-center justify-center rounded-xl border border-dashed border-border">
              <p className="text-muted-foreground">
                Sección en desarrollo...
              </p>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </div>
  )
}
