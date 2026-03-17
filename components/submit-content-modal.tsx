"use client"

import { useState } from "react"
import { X, Send, Loader2, Check } from "lucide-react"
import { ContentPreviewCard } from "./content-preview-card"
import { HashingAnimation } from "./hashing-animation"

interface SubmitContentModalProps {
  isOpen: boolean
  onClose: () => void
}

const categories = [
  "Seguridad Smart Contract",
  "Tokenomics",
  "Análisis de Red",
  "Gobernanza",
  "DeFi Protocol",
  "Investigación Web3",
]

export function SubmitContentModal({ isOpen, onClose }: SubmitContentModalProps) {
  const [contentUrl, setContentUrl] = useState("")
  const [category, setCategory] = useState("")
  const [summary, setSummary] = useState("")
  const [stakeAmount, setStakeAmount] = useState("10")
  const [expressRequest, setExpressRequest] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate blockchain submission
    await new Promise((resolve) => setTimeout(resolve, 3000))

    setIsSubmitting(false)
    setIsSuccess(true)

    // Close modal after success
    setTimeout(() => {
      onClose()
      setContentUrl("")
      setCategory("")
      setSummary("")
      setStakeAmount("10")
      setExpressRequest(false)
      setIsSuccess(false)
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-card p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-muted-foreground hover:text-foreground"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground">
            Postular Contenido
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Registra contenido de valor en Curation Protocol y obtén recompensas por curaciones validadas
          </p>
        </div>

        {isSuccess ? (
          <div className="space-y-6 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
              <Check className="h-8 w-8 text-accent" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Postulación Completada
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Tu contenido ha sido registrado on-chain y está disponible para curación
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* URL Input */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                URL del Contenido
              </label>
              <input
                type="url"
                value={contentUrl}
                onChange={(e) => setContentUrl(e.target.value)}
                placeholder="https://x.com/... o https://github.com/..."
                className="w-full rounded-lg border border-input bg-secondary/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                required
              />
            </div>

            {/* Preview Card */}
            {contentUrl && <ContentPreviewCard url={contentUrl} />}

            {/* Category Select */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Categoría
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-lg border border-input bg-secondary/50 px-4 py-3 text-foreground focus:border-primary focus:outline-none"
                required
              >
                <option value="">Selecciona una categoría</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Summary Textarea */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Resumen Ejecutivo
              </label>
              <textarea
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                placeholder="Explica por qué este contenido requiere curación..."
                className="min-h-24 w-full rounded-lg border border-input bg-secondary/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none resize-none"
                required
              />
            </div>

            {/* Stake Amount */}
            <div className="rounded-lg border border-border bg-secondary/30 p-4">
              <label className="block text-sm font-semibold text-foreground mb-3">
                Stake de Postulación
              </label>
              <div className="flex items-end gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <input
                      type="range"
                      min="5"
                      max="100"
                      step="5"
                      value={stakeAmount}
                      onChange={(e) => setStakeAmount(e.target.value)}
                      className="flex-1"
                    />
                    <div className="text-right">
                      <span className="text-lg font-semibold text-accent">
                        {stakeAmount}
                      </span>
                      <span className="ml-1 text-sm text-muted-foreground">SOL</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Debes bloquear una cantidad de SOL para evitar spam. Si el contenido es validado como útil, recuperas tu stake + recompensa.
              </p>
            </div>

            {/* Express Request Toggle */}
            <div className="flex items-center justify-between rounded-lg border border-border bg-secondary/30 p-4">
              <div>
                <label className="block text-sm font-semibold text-foreground">
                  Solicitar Curación Express
                </label>
                <p className="mt-1 text-xs text-muted-foreground">
                  Fee adicional de 2 SOL para prioridad inmediata
                </p>
              </div>
              <button
                type="button"
                onClick={() => setExpressRequest(!expressRequest)}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                  expressRequest ? "bg-accent" : "bg-secondary/50"
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-foreground transition-transform ${
                    expressRequest ? "translate-x-7" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            {/* Submit Button */}
            {!isSubmitting && (
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-[#7B2FD6] py-3 text-sm font-semibold text-white transition-all hover:opacity-90 disabled:opacity-50"
                disabled={!contentUrl || !category || !summary}
              >
                <Send className="h-4 w-4" />
                Enviar a Verificación On-Chain
              </button>
            )}

            {/* Hashing Animation */}
            {isSubmitting && <HashingAnimation />}
          </form>
        )}
      </div>
    </div>
  )
}
