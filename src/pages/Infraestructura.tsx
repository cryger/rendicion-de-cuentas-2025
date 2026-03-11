import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroBanner from "@/assets/hero-banner.png";
import avanceHospital from "@/assets/avance_hospital_2026.jpeg";
import { Building2, HardHat, Hammer, Ruler, Wrench, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../core/footer";

// ── Datos de proyectos — reemplaza con los reales ─────────────────────────────
const PROYECTOS = [
  {
    icon: Building2,
    color: "primary",
    titulo: "Construcción Nueva Torre Hospitalaria",
    descripcion: "Edificación de 4 pisos con camas adicionales, salas de cirugía de alta complejidad y unidad de cuidados intensivos.",
    estado: "En ejecución",
    avance: 20,
  },
  {
    icon: HardHat,
    color: "primary",
    titulo: "Ampliación Urgencias",
    descripcion: "Remodelación y ampliación del área de urgencias para aumentar la capacidad de atención en un 40% y mejorar los tiempos de respuesta.",
    estado: "En ejecución",
    avance: 20,
  },
  {
    icon: Hammer,
    color: "accent",
    titulo: "Renovación Red Eléctrica",
    descripcion: "Modernización completa de la red eléctrica hospitalaria con subestación propia y sistema de respaldo para áreas críticas.",
    estado: "Finalizado",
    avance: 100,
  },
 
  {
    icon: Wrench,
    color: "accent",
    titulo: "Planta de Tratamiento de Agua",
    descripcion: "Instalación de planta de tratamiento de aguas residuales hospitalarias con tecnología de última generación.",
    estado: "Finalizado",
    avance: 100,
  },
  {
    icon: CheckCircle2,
    color: "accent",
    titulo: "Cerramiento y Seguridad",
    descripcion: "Construcción de cerramiento perimetral con sistema de videovigilancia, acceso controlado y garita de seguridad.",
    estado: "Finalizado",
    avance: 100,
  },
  {
    icon: CheckCircle2,
    color: "accent",
    titulo: "Adquisicion de Equipo Biomedico",
    descripcion: "Adquisicion y mejoramiento del mobiliario hospitalario y nuevo equipo Biomedico de alta tecnologia",
    estado: "Finalizado",
    avance: 100,
  },
];

const colorMap: Record<string, string> = {
  primary:     "bg-primary/10",
  destructive: "bg-destructive/10",
  accent:      "bg-accent/10",
};
const iconColorMap: Record<string, string> = {
  primary:     "text-primary",
  destructive: "text-destructive",
  accent:      "text-accent",
};
const barColorMap: Record<string, string> = {
  primary:     "bg-primary",
  destructive: "bg-destructive",
  accent:      "bg-accent",
};
const badgeMap: Record<string, string> = {
  "En ejecución": "bg-blue-100 text-blue-700",
  "Finalizado":   "bg-green-100 text-green-700",
  "Planeación":   "bg-yellow-100 text-yellow-700",
};
// ─────────────────────────────────────────────────────────────────────────────

const Infraestructura = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="w-full overflow-hidden">
        <img
          src={heroBanner}
          alt="Infraestructura Hospitalaria"
          className="w-full h-auto scale-100"
        />
      </section>

      {/* Proyectos destacados */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">

            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-primary">
              Proyectos de Infraestructura
            </h2>

            <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              La ESE Hospital San José del Guaviare adelanta una serie de proyectos de infraestructura orientados a mejorar la capacidad instalada, la calidad de los servicios y el bienestar de pacientes y personal de salud.
            </p>

            {/* Tarjetas de proyectos */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROYECTOS.map((proyecto, i) => {
                const Icon = proyecto.icon;
                return (
                  <Card
                    key={i}
                    className="p-6 hover:shadow-[var(--hover-shadow)] transition-all duration-300 border-border flex flex-col gap-4"
                  >
                    {/* Ícono + título */}
                    <div className="flex items-start gap-4">
                      <div className={`p-3 ${colorMap[proyecto.color]} rounded-xl shrink-0`}>
                        <Icon className={`w-6 h-6 ${iconColorMap[proyecto.color]}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-base mb-1 text-card-foreground leading-tight">
                          {proyecto.titulo}
                        </h3>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${badgeMap[proyecto.estado]}`}>
                          {proyecto.estado}
                        </span>
                      </div>
                    </div>

                    {/* Descripción */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {proyecto.descripcion}
                    </p>

                    {/* Barra de avance */}
                    <div>
                      <div className="flex justify-between text-xs text-muted-foreground mb-1">
                        <span>Avance</span>
                        <span className="font-semibold">{proyecto.avance}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-2 rounded-full ${barColorMap[proyecto.color]} transition-all duration-700`}
                          style={{ width: `${proyecto.avance}%` }}
                        />
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Botón volver */}
            <div className="mt-10 flex justify-center">
              <Link to="/">
                <Button variant="outline">
                  Volver al inicio
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Imagen institucional */}
      <section className="py-16 bg-gradient-to-br from-background via-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl overflow-hidden shadow-[var(--card-shadow)]">
              <img
                src={avanceHospital}
                alt="Avance construcción Hospital San José del Guaviare"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default Infraestructura;