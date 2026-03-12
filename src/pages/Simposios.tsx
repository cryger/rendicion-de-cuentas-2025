import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroBanner from "@/assets/hero-banner.png";
import teamPhoto from "@/assets/team-photo.png";
import { Calendar, Users, MapPin, BookOpen, Mic, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../core/footer";

// ── Cifras clave ──────────────────────────────────────────────────────────────
const CIFRAS = [
  { valor: "4",     label: "Simposios realizados",      icon: BookOpen },
  { valor: "1.200+", label: "Asistentes totales",        icon: Users },
  { valor: "18",    label: "Conferencistas nacionales",  icon: Mic },
  { valor: "2025",  label: "Vigencia",                   icon: Calendar },
];

// ── Simposios Nacionales ──────────────────────────────────────────────────────
const SIMPOSIOS_NACIONALES = [
  {
    titulo: "I Simposio Nacional de Salud Pública y Territorio",
    fecha: "15 y 16 de marzo de 2025",
    lugar: "Auditorio ESE Hospital San José del Guaviare",
    asistentes: 320,
    descripcion:
      "Espacio académico de alto nivel que reunió a expertos nacionales en salud pública para analizar los retos del sistema de salud en territorios con alta ruralidad, comunidades étnicas y zonas de posconflicto.",
    temas: ["Salud en territorios rurales", "Enfoque diferencial étnico", "Posconflicto y salud mental"],
    estado: "Realizado",
  },
  {
    titulo: "II Simposio Nacional de Medicina Interna y Urgencias",
    fecha: "22 y 23 de agosto de 2025",
    lugar: "Centro de Convenciones San José del Guaviare",
    asistentes: 280,
    descripcion:
      "Encuentro científico orientado a la actualización del personal médico y de enfermería en el manejo de patologías de alta complejidad en urgencias y hospitalización, con énfasis en medicina interna.",
    temas: ["Manejo del paciente crítico", "Sepsis y shock", "Actualización en farmacología"],
    estado: "Realizado",
  },
];

// ── Simposios por la Vida ─────────────────────────────────────────────────────
const SIMPOSIOS_VIDA = [
  {
    titulo: "I Simposio por la Vida: Salud Mental y Bienestar",
    fecha: "10 de mayo de 2025",
    lugar: "Auditorio ESE Hospital San José del Guaviare",
    asistentes: +50,
    descripcion:
      "Jornada de sensibilización y formación sobre salud mental, prevención del suicidio y promoción del bienestar emocional dirigida a la comunidad en general, familias y personal de salud del departamento.",
    temas: ["Prevención del suicidio", "Salud mental comunitaria", "Primeros auxilios psicológicos"],
    estado: "Realizado",
  },
  {
    titulo: "II Simposio por la Vida: Maternidad Segura",
    fecha: "18 de octubre de 2025",
    lugar: "Auditorio ESE Hospital San José del Guaviare",
    asistentes: +90,
    descripcion:
      "Encuentro dirigido a gestantes, familias y personal de salud para fortalecer los conocimientos sobre control prenatal, parto humanizado, lactancia materna y cuidado del recién nacido en el departamento.",
    temas: ["Control prenatal", "Parto humanizado", "Lactancia materna y cuidado neonatal"],
    estado: "Realizado",
  },
];

const badgeMap: Record<string, string> = {
  "Realizado":  "bg-green-100 text-green-700",
  "Programado": "bg-blue-100 text-blue-700",
  "En curso":   "bg-yellow-100 text-yellow-700",
};
// ─────────────────────────────────────────────────────────────────────────────

function SimposioCard({ simposio }: { simposio: typeof SIMPOSIOS_NACIONALES[0] }) {
  return (
    <Card className="p-6 hover:shadow-[var(--hover-shadow)] transition-all duration-300 border-border flex flex-col gap-4">

      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <h4 className="font-bold text-base text-card-foreground leading-tight flex-1">
          {simposio.titulo}
        </h4>
        <span className={`text-xs font-semibold px-2 py-1 rounded-full shrink-0 ${badgeMap[simposio.estado]}`}>
          {simposio.estado}
        </span>
      </div>

      {/* Meta */}
      <div className="space-y-1">
        <p className="text-xs text-muted-foreground flex items-center gap-2">
          <Calendar className="w-3 h-3 shrink-0" /> {simposio.fecha}
        </p>
        <p className="text-xs text-muted-foreground flex items-center gap-2">
          <MapPin className="w-3 h-3 shrink-0" /> {simposio.lugar}
        </p>
        <p className="text-xs text-muted-foreground flex items-center gap-2">
          <Users className="w-3 h-3 shrink-0" /> {simposio.asistentes} asistentes
        </p>
      </div>

      {/* Descripción */}
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
        {simposio.descripcion}
      </p>

      {/* Temas */}
      <div className="flex flex-wrap gap-2">
        {simposio.temas.map((tema, i) => (
          <span key={i} className="text-xs bg-primary/10 text-primary font-medium px-2 py-1 rounded-full">
            {tema}
          </span>
        ))}
      </div>

    </Card>
  );
}

const Simposios = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero */}
      <section className="w-full overflow-hidden">
        <img
          src={heroBanner}
          alt="Simposios Nacionales y por la Vida"
          className="w-full h-auto scale-100"
        />
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">

            {/* Título */}
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-primary">
              Simposios 2025
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              La ESE Hospital San José del Guaviare lideró espacios académicos y comunitarios de alto nivel
              para la actualización del personal de salud y la promoción de la salud en la comunidad del
              departamento, a través de sus simposios nacionales y simposios por la vida.
            </p>

            {/* Cifras */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {CIFRAS.map((cifra, i) => {
                const Icon = cifra.icon;
                return (
                  <Card key={i} className="p-6 text-center border-border hover:shadow-[var(--hover-shadow)] transition-all duration-300">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <p className="text-2xl font-bold text-primary mb-1">{cifra.valor}</p>
                    <p className="text-sm text-muted-foreground leading-tight">{cifra.label}</p>
                  </Card>
                );
              })}
            </div>

            {/* Simposios Nacionales */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Simposios Nacionales</h3>
            </div>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Encuentros científicos de carácter nacional que reúnen expertos, académicos y profesionales
              de la salud para la actualización y el intercambio de conocimientos en áreas clínicas y de salud pública.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {SIMPOSIOS_NACIONALES.map((simposio, i) => (
                <SimposioCard key={i} simposio={simposio} />
              ))}
            </div>

            {/* Simposios por la Vida */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-destructive/10 rounded-lg">
                <Users className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Simposio por la Vida</h3>
            </div>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Jornadas comunitarias orientadas a la promoción de la salud, la prevención de la enfermedad
              y el bienestar de la comunidad guaviarense, con enfoque en poblaciones vulnerables y temáticas
              de alto impacto social.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {SIMPOSIOS_VIDA.map((simposio, i) => (
                <SimposioCard key={i} simposio={simposio} />
              ))}
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

      

      <Footer />

    </div>
  );
};

export default Simposios;