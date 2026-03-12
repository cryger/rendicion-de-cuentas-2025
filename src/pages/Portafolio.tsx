import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroBanner from "@/assets/hero-banner.png";
import teamPhoto from "@/assets/team-photo.png";
import { Brain, Mic, Activity, Moon, Scan } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../core/footer";

// ── Nuevos servicios ──────────────────────────────────────────────────────────
const NUEVOS_SERVICIOS = [
  {
    icon: Brain,
    color: "primary",
    nombre: "Neurólisis",
    descripcion:
      "Procedimiento terapéutico orientado a la interrupción selectiva de la conducción nerviosa para el manejo del dolor crónico, espasticidad y otras condiciones neurológicas. Realizado por especialistas con técnicas de mínima invasión.",
    beneficio: "Manejo del dolor crónico y espasticidad",
  },
  {
    icon: Mic,
    color: "destructive",
    nombre: "Fonoaudiología",
    descripcion:
      "Servicio de evaluación, diagnóstico e intervención de trastornos de la comunicación, el lenguaje, el habla, la voz y la deglución en pacientes de todas las edades, con enfoque en rehabilitación funcional.",
    beneficio: "Rehabilitación del lenguaje y deglución",
  },
  {
    icon: Activity,
    color: "accent",
    nombre: "Telemetría",
    descripcion:
      "Monitoreo cardíaco continuo y ambulatorio mediante dispositivos de telemetría que permiten la vigilancia en tiempo real del ritmo cardíaco, facilitando la detección oportuna de arritmias y otras alteraciones.",
    beneficio: "Monitoreo cardíaco continuo en tiempo real",
  },
  {
    icon: Moon,
    color: "primary",
    nombre: "Polisomnografía",
    descripcion:
      "Estudio integral del sueño que registra simultáneamente múltiples parámetros fisiológicos durante la noche para el diagnóstico de trastornos del sueño como apnea, insomnio, narcolepsia y síndrome de piernas inquietas.",
    beneficio: "Diagnóstico de trastornos del sueño",
  },
  {
    icon: Scan,
    color: "destructive",
    nombre: "Ecografías Extramural",
    descripcion:
      "Servicio de ecografía llevado directamente a comunidades rurales y de difícil acceso del departamento del Guaviare, garantizando el acceso a imágenes diagnósticas de calidad sin necesidad de desplazarse a la ciudad.",
    beneficio: "Diagnóstico por imagen en zonas rurales",
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
const badgeColorMap: Record<string, string> = {
  primary:     "bg-blue-100 text-blue-700",
  destructive: "bg-red-100 text-red-700",
  accent:      "bg-green-100 text-green-700",
};
// ─────────────────────────────────────────────────────────────────────────────

const Portafolio = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero */}
      <section className="w-full overflow-hidden">
        <img
          src={heroBanner}
          alt="Portafolio de Servicios"
          className="w-full h-auto scale-100"
        />
      </section>

      {/* Contenido principal */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">

            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-primary">
              Portafolio de Servicios 2025
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
              La ESE Hospital San José del Guaviare amplía su oferta de servicios de salud para responder
              a las necesidades de la comunidad del departamento, incorporando nuevas especialidades y
              tecnologías diagnósticas que fortalecen la atención de II nivel de complejidad.
            </p>

            {/* Banner nuevos servicios */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-12 text-center">
              <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-wide uppercase">
                Nuevos en 2025
              </span>
              <h3 className="text-xl font-bold text-primary mb-2">
                5 nuevos servicios disponibles para la comunidad
              </h3>
              <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
                Neurólisis · Fonoaudiología · Telemetría · Polisomnografía · Ecografías Extramural
              </p>
            </div>

            {/* Tarjetas de servicios */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {NUEVOS_SERVICIOS.map((servicio, i) => {
                const Icon = servicio.icon;
                return (
                  <Card
                    key={i}
                    className="p-6 hover:shadow-[var(--hover-shadow)] transition-all duration-300 border-border flex flex-col gap-4"
                  >
                    {/* Ícono + badge nuevo */}
                    <div className="flex items-start justify-between gap-2">
                      <div className={`p-3 ${colorMap[servicio.color]} rounded-xl shrink-0`}>
                        <Icon className={`w-6 h-6 ${iconColorMap[servicio.color]}`} />
                      </div>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${badgeColorMap[servicio.color]}`}>
                        Nuevo
                      </span>
                    </div>

                    {/* Nombre */}
                    <h4 className="font-bold text-lg text-card-foreground leading-tight">
                      {servicio.nombre}
                    </h4>

                    {/* Descripción */}
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {servicio.descripcion}
                    </p>

                    {/* Beneficio */}
                    <div className={`rounded-lg px-4 py-2 ${colorMap[servicio.color]}`}>
                      <p className={`text-xs font-semibold ${iconColorMap[servicio.color]}`}>
                        ✓ {servicio.beneficio}
                      </p>
                    </div>
                  </Card>
                );
              })}

              {/* Tarjeta CTA — solicitar cita */}
              <Card className="p-6 border-2 border-dashed border-primary/30 flex flex-col items-center justify-center gap-4 text-center hover:shadow-[var(--hover-shadow)] transition-all duration-300">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Activity className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-card-foreground mb-1">
                    ¿Necesitas uno de estos servicios?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Solicita tu cita a través de nuestros canales de atención.
                  </p>
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-white w-full" asChild>
                  <a href="https://wa.link/33hxqz" target="_blank" rel="noopener noreferrer">
                    Solicitar cita →
                  </a>
                </Button>
              </Card>
            </div>

            {/* Botón volver */}
            <div className="mt-10 flex justify-center">
              <Link to="/">
                <Button variant="outline">Volver al inicio</Button>
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
                src={teamPhoto}
                alt="Equipo Hospital San José del Guaviare"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
};

export default Portafolio;