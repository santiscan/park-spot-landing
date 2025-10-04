import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

export function Header() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <MapPin className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">ParkSpot</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#como-funciona"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Cómo funciona
            </a>
            <a
              href="#propietarios"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Para propietarios
            </a>
            <a
              href="#conductores"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Para conductores
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" className="text-sm font-medium">
              Iniciar sesión
            </Button>
            <Button className="text-sm font-medium">Registrarse</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
