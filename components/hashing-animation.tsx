"use client"

import { useEffect, useState } from "react"

export function HashingAnimation() {
  const [hash, setHash] = useState("")

  useEffect(() => {
    let currentIndex = 0
    const fullHash =
      "0x4a5f8d2b9e1c3f6a7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b"

    const interval = setInterval(() => {
      if (currentIndex <= fullHash.length) {
        setHash(fullHash.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-4">
      {/* Blockchain Icon Animation */}
      <div className="flex justify-center">
        <div className="relative h-16 w-16">
          {/* Outer spinning ring */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-primary opacity-70 animate-spin"></div>
          {/* Middle pulsing ring */}
          <div className="absolute inset-2 rounded-full border-2 border-accent/50 animate-pulse"></div>
          {/* Inner checkmark */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-2xl">⛓️</div>
          </div>
        </div>
      </div>

      {/* Hash Display */}
      <div className="space-y-2">
        <p className="text-center text-sm font-semibold text-foreground">
          Registrando en Blockchain...
        </p>
        <div className="rounded-lg bg-secondary/50 border border-border p-3">
          <p className="font-mono text-xs text-accent break-all">
            {hash}
            {hash.length < 66 && <span className="animate-pulse">|</span>}
          </p>
        </div>
        <p className="text-center text-xs text-muted-foreground">
          Generando hash on-chain de tu postulación
        </p>
      </div>
    </div>
  )
}
