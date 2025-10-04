import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-accent to-primary px-8 py-16 sm:px-16 sm:py-24">
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl mb-6 text-balance">
              ¿Listo para empezar?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 text-pretty leading-relaxed">
              Únete a nuestra comunidad y descubre una nueva forma de estacionar o generar ingresos con tu espacio.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto text-base font-semibold">
                Descargar la app
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base font-semibold bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
              >
                Más información
              </Button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl"></div>
        </div>
      </div>
    </section>
  )
}
