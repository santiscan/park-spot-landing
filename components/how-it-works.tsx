import { Card, CardContent } from "@/components/ui/card"
import { MapPin, CreditCard, CheckCircle, Smartphone } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Smartphone,
      title: "Abre la app",
      description: "Busca estacionamientos disponibles cerca de tu ubicación en el mapa interactivo",
    },
    {
      icon: MapPin,
      title: "Elige tu espacio",
      description: "Selecciona el estacionamiento que mejor se adapte a tus necesidades y horario",
    },
    {
      icon: CreditCard,
      title: "Reserva y paga",
      description: "Realiza el pago de forma segura directamente desde la aplicación",
    },
    {
      icon: CheckCircle,
      title: "Estaciona tranquilo",
      description: "Llega al lugar, estaciona y disfruta de tu tiempo sin preocupaciones",
    },
  ]

  return (
    <section id="como-funciona" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4 text-balance">
            Cómo funciona
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Encontrar estacionamiento nunca fue tan fácil. Solo cuatro pasos simples.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={index} className="relative border-border bg-card hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6 px-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="absolute top-6 right-6 flex h-8 w-8 items-center justify-center rounded-full bg-accent/20 text-sm font-bold text-accent">
                  {index + 1}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
