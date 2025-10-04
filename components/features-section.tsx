import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Clock, Shield, TrendingUp, Map, Users } from "lucide-react"

export function FeaturesSection() {
  const ownerFeatures = [
    {
      icon: DollarSign,
      title: "Genera ingresos pasivos",
      description: "Monetiza tu espacio de estacionamiento cuando no lo uses. Gana dinero extra cada mes.",
    },
    {
      icon: Clock,
      title: "Tú decides el horario",
      description: "Controla cuándo está disponible tu espacio. Flexibilidad total según tu conveniencia.",
    },
    {
      icon: Shield,
      title: "Pagos seguros garantizados",
      description: "Recibe tus pagos de forma automática y segura. Sin complicaciones ni riesgos.",
    },
  ]

  const driverFeatures = [
    {
      icon: Map,
      title: "Mapa en tiempo real",
      description: "Visualiza todos los espacios disponibles cerca de ti en un mapa interactivo.",
    },
    {
      icon: TrendingUp,
      title: "Precios transparentes",
      description: "Compara precios y elige la mejor opción para tu presupuesto. Sin sorpresas.",
    },
    {
      icon: Users,
      title: "Comunidad confiable",
      description: "Sistema de calificaciones y reseñas para garantizar la mejor experiencia.",
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Para Propietarios */}
        <div id="propietarios" className="mb-20">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4 text-balance">
              Para propietarios
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Convierte tu entrada en una fuente de ingresos. Es simple y rentable.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {ownerFeatures.map((feature, index) => (
              <Card key={index} className="border-border bg-card">
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-card-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Para Conductores */}
        <div id="conductores">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4 text-balance">
              Para conductores
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Olvídate del estrés de buscar estacionamiento. Encuentra tu lugar en segundos.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {driverFeatures.map((feature, index) => (
              <Card key={index} className="border-border bg-card">
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-card-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
