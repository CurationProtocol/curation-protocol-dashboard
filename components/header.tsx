"use client"

import { Search, Wallet, Loader2 } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function Header() {
  const [searchValue, setSearchValue] = useState("")
  const [isConnected, setIsConnected] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleConnect = async () => {
    if (isConnected) {
      setIsConnected(false)
      return
    }
    setIsLoading(true)
    // Simulate wallet connection delay
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsConnected(true)
  }

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background/80 px-6 backdrop-blur-md">
      {/* Logo and Title */}
      <div className="flex items-center gap-3">
        <Image
          src="/images/curation-protocol-logo.png"
          alt="Curation Protocol"
          width={40}
          height={40}
          className="h-10 w-10"
        />
        <h1 className="hidden text-xl font-bold text-foreground sm:block">
          <span className="text-primary">Curation</span> Protocol
        </h1>
      </div>

      {/* Search Bar */}
      <div className="hidden flex-1 max-w-xl mx-8 md:flex">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar URL o contenido..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-full rounded-lg border border-border bg-secondary px-10 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      {/* Connect Wallet Button */}
      <button
        onClick={handleConnect}
        disabled={isLoading}
        className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all disabled:cursor-not-allowed ${
          isConnected
            ? "border border-accent bg-accent/10 text-accent"
            : "bg-gradient-to-r from-primary to-[#7B2FD6] text-white hover:opacity-90"
        }`}
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Wallet className="h-4 w-4" />
        )}
        <span className="hidden sm:inline">
          {isLoading ? "Conectando..." : isConnected ? "0x1a2b...3c4d" : "Connect Wallet"}
        </span>
      </button>
    </header>
  )
}
