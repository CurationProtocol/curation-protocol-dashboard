"use client"

import Image from "next/image"
import { Github, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/curation-protocol-logo.png"
                alt="Curation Protocol"
                width={32}
                height={32}
                className="h-8 w-8"
                priority
              />
              <h3 className="font-bold text-foreground">
                <span className="text-primary">Curation</span> Protocol
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Protocolo descentralizado de curación de contenido en Solana
            </p>
          </div>

          {/* Product */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Producto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-accent">
                  Características
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-accent">
                  Precios
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-accent">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Comunidad</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-accent">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-accent">
                  Foro
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-accent">
                  Documentación
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-accent">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-accent">
                  Términos
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-accent">
                  Seguridad
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Curation Protocol. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Discord"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Linkedin"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
