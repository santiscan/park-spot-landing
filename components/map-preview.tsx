import { Card } from "@/components/ui/card"
import { MapPin, Navigation } from "lucide-react"

export function MapPreview() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4 text-balance">
            Encuentra estacionamiento cerca de ti
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Nuestro mapa interactivo te muestra todos los espacios disponibles en tiempo real
          </p>
        </div>

        <Card className="overflow-hidden border-border bg-card mx-auto max-w-5xl">
          <div className="relative aspect-video bg-gradient-to-br from-secondary via-muted to-secondary/50">
            <img
              src="/interactive-map-with-parking-location-pins.jpg"
              alt="Mapa interactivo de estacionamientos"
              className="h-full w-full object-cover"
            />

            {/* Marcadores de ejemplo */}
            <div className="absolute top-1/4 left-1/3 animate-bounce">
              <div className="relative">
                <MapPin className="h-10 w-10 text-primary drop-shadow-lg" fill="currentColor" />
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-card px-3 py-1 text-xs font-semibold text-card-foreground shadow-lg border border-border">
                  $5/hora
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 right-1/3 animate-bounce" style={{ animationDelay: "0.2s" }}>
              <div className="relative">
                <MapPin className="h-10 w-10 text-accent drop-shadow-lg" fill="currentColor" />
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-card px-3 py-1 text-xs font-semibold text-card-foreground shadow-lg border border-border">
                  $4/hora
                </div>
              </div>
            </div>

            <div className="absolute bottom-1/3 left-1/2 animate-bounce" style={{ animationDelay: "0.4s" }}>
              <div className="relative">
                <MapPin className="h-10 w-10 text-primary drop-shadow-lg" fill="currentColor" />
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-card px-3 py-1 text-xs font-semibold text-card-foreground shadow-lg border border-border">
                  $6/hora
                </div>
              </div>
            </div>

            {/* Control de ubicación */}
            <div className="absolute bottom-6 right-6">
              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-card shadow-lg border border-border hover:bg-secondary transition-colors">
                <Navigation className="h-5 w-5 text-foreground" />
              </button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
