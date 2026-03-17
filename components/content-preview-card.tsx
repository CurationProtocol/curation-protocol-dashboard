"use client"

import Image from "next/image"

interface ContentPreviewCardProps {
  url: string
}

export function ContentPreviewCard({ url }: ContentPreviewCardProps) {
  // Mock preview data - in production, would extract from URL metadata
  const isTwitter = url.includes("x.com") || url.includes("twitter.com")
  const isGithub = url.includes("github.com")

  const mockData = {
    title: isTwitter
      ? "Thread: "La revolución de Solana en 2026" by @solana"
      : isGithub
        ? "Repository: solana-program-library"
        : "Article: "Understanding DeFi Protocol Design"",
    description: isTwitter
      ? "Thread analizando los últimos desarrollos de Solana y su impacto en el ecosistema Web3"
      : isGithub
        ? "Biblioteca oficial de programas Solana y ejemplos de desarrollo"
        : "Una guía completa sobre los principios fundamentales de diseño de protocolos DeFi",
    image: isTwitter
      ? "https://abs.twimg.com/sticky/default_profile_images/default_profile.png"
      : isGithub
        ? "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        : "https://via.placeholder.com/400x200",
  }

  return (
    <div className="rounded-lg border border-border bg-secondary/50 overflow-hidden">
      <div className="flex gap-4 p-4">
        {/* Thumbnail */}
        <div className="relative h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden bg-secondary">
          <Image
            src={mockData.image}
            alt="Preview"
            fill
            className="object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none"
            }}
          />
        </div>

        {/* Content Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground truncate text-sm">
            {mockData.title}
          </h3>
          <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
            {mockData.description}
          </p>
          <p className="mt-2 text-xs text-primary font-mono truncate">
            {url}
          </p>
        </div>
      </div>
    </div>
  )
}
