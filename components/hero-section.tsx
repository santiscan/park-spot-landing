import { Button } from "@/components/ui/button"
import { MapPin, Search } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/30 to-background py-20 sm:py-28 lg:py-36">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </span>
            Encuentra estacionamiento en segundos
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Estaciona fácil, gana dinero con tu entrada
          </h1>

          <p className="mb-10 text-lg text-muted-foreground sm:text-xl text-pretty leading-relaxed">
            Conectamos conductores que buscan estacionamiento con propietarios que tienen espacios disponibles. Rápido,
            seguro y conveniente.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto text-base font-semibold">
              <Search className="mr-2 h-5 w-5" />
              Buscar estacionamiento
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base font-semibold bg-transparent">
              <MapPin className="mr-2 h-5 w-5" />
              Ofrecer mi espacio
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <span className="text-sm font-bold text-primary">✓</span>
              </div>
              <span>Pago seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <span className="text-sm font-bold text-primary">✓</span>
              </div>
              <span>Disponibilidad en tiempo real</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
