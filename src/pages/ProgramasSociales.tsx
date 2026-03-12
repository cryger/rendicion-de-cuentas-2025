import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroBanner from "@/assets/hero-banner.png";
import teamPhoto from "@/assets/team-photo.png";
import { Baby, Globe, Heart, Shield, Users, HandHeart } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../core/footer";

// ── Cifras clave ──────────────────────────────────────────────────────────────
const CIFRAS = [
  { valor: "3",      label: "Grupos poblacionales atendidos", icon: Users },
  { valor: "15.000+", label: "Familias beneficiadas",          icon: HandHeart },
  { valor: "100%",   label: "Enfoque diferencial aplicado",   icon: Shield },
  { valor: "II",     label: "Nivel de complejidad",           icon: Heart },
];

// ── Grupos poblacionales ──────────────────────────────────────────────────────
const GRUPOS = [
  {
    icon: Baby,
    color: "primary",
    titulo: "Niños, Niñas y Adolescentes",
    descripcion:
      "Atención integral con enfoque diferencial para la primera infancia, niñez y adolescencia. Incluye programas de crecimiento y desarrollo, vacunación, nutrición y protección de derechos en el marco de la política pública de infancia.",
    enlace: "https://esehospitalguaviare.gov.co/niños-adolecentes/19",
    etiqueta: "Ver información",
  },
  {
    icon: Globe,
    color: "destructive",
    titulo: "Grupos Étnicos",
    descripcion:
      "Servicios de salud con pertinencia cultural para comunidades indígenas y afrodescendientes del departamento del Guaviare. Atención con respeto a los usos, costumbres y cosmovisión de cada comunidad, con información disponible en lengua étnica.",
    enlace: "https://esehospitalguaviare.gov.co/niños-adolecentes/19",
    etiqueta: "Información en lengua étnica",
  },
  {
    icon: Heart,
    color: "accent",
    titulo: "Personas en Situación de Discapacidad",
    descripcion:
      "Programas de rehabilitación, habilitación y atención especializada para personas con discapacidad física, cognitiva, sensorial y psicosocial, garantizando el acceso equitativo a los servicios de salud.",
    enlace: "https://esehospitalguaviare.gov.co/niños-adolecentes/19",
    etiqueta: "Ver información",
  },
  {
    icon: Shield,
    color: "primary",
    titulo: "Adulto Mayor",
    descripcion:
      "Atención preferencial y humanizada para personas mayores de 60 años, con programas de promoción del envejecimiento activo, prevención de enfermedades crónicas y acompañamiento integral a esta población.",
    enlace: "https://esehospitalguaviare.gov.co/niños-adolecentes/19",
    etiqueta: "Ver información",
  },
  {
    icon: HandHeart,
    color: "destructive",
    titulo: "Víctimas del Conflicto Armado",
    descripcion:
      "Atención psicosocial, física y rehabilitación para personas víctimas del conflicto armado en el departamento, en coordinación con la Unidad para las Víctimas y el sistema de salud territorial.",
    enlace: "https://esehospitalguaviare.gov.co/niños-adolecentes/19",
    etiqueta: "Ver información",
  },
  {
    icon: Users,
    color: "accent",
    titulo: "Población Migrante",
    descripcion:
      "Garantía de acceso a servicios de salud para población migrante y en situación de movilidad humana, en cumplimiento de la normativa nacional de atención en urgencias y servicios básicos.",
    enlace: "https://esehospitalguaviare.gov.co/niños-adolecentes/19",
    etiqueta: "Ver información",
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
const btnColorMap: Record<string, string> = {
  primary:     "bg-primary hover:bg-primary/90",
  destructive: "bg-destructive hover:bg-destructive/90",
  accent:      "bg-accent hover:bg-accent/90",
};
// ─────────────────────────────────────────────────────────────────────────────

const ProgramasSociales = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero */}
      <section className="w-full overflow-hidden">
        <img
          src={heroBanner}
          alt="Programas Sociales"
          className="w-full h-auto scale-100"
        />
      </section>

      {/* Intro + Cifras */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">

            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-primary">
              Programas Sociales 2025
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              La ESE Hospital San José del Guaviare implementa políticas e intervenciones sectoriales y transectoriales
              que buscan el reconocimiento de las diferencias sociales, aplicando medidas en favor de los grupos
              en situación de mayor vulnerabilidad para lograr la equidad en salud en el marco de los derechos
              de sujetos y colectivos.
            </p>

            {/* Cifras clave */}
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
                    <p className="text-3xl font-bold text-primary mb-1">{cifra.valor}</p>
                    <p className="text-sm text-muted-foreground leading-tight">{cifra.label}</p>
                  </Card>
                );
              })}
            </div>

            {/* Grupos poblacionales */}
            <h3 className="text-2xl font-bold text-primary mb-2 text-center">
              Atención a Población Vulnerable
            </h3>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Acciones transversales enmarcadas en el enfoque diferencial para garantizar el derecho a la salud de cada grupo poblacional.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {GRUPOS.map((grupo, i) => {
                const Icon = grupo.icon;
                return (
                  <Card
                    key={i}
                    className="p-6 hover:shadow-[var(--hover-shadow)] transition-all duration-300 border-border flex flex-col gap-4"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 ${colorMap[grupo.color]} rounded-xl shrink-0`}>
                        <Icon className={`w-6 h-6 ${iconColorMap[grupo.color]}`} />
                      </div>
                      <h4 className="font-semibold text-base text-card-foreground leading-tight">
                        {grupo.titulo}
                      </h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {grupo.descripcion}
                    </p>
                    <Button
                      size="sm"
                      className={`w-full text-white ${btnColorMap[grupo.color]}`}
                      asChild
                    >
                      <a href={grupo.enlace} target="_blank" rel="noopener noreferrer">
                        {grupo.etiqueta} →
                      </a>
                    </Button>
                  </Card>
                );
              })}
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

export default ProgramasSociales;