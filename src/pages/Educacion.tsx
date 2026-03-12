import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroBanner from "@/assets/hero-banner.png";
import teamPhoto from "@/assets/team-photo.png";
import { GraduationCap, Users, BookOpen, Award, FileText, Download } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../core/footer";

// ── Cifras clave — reemplaza con los datos reales ─────────────────────────────
const CIFRAS = [
  { valor: "320",  label: "Funcionarios capacitados",   icon: Users },
  { valor: "18",   label: "Programas ejecutados",        icon: BookOpen },
  { valor: "1.240", label: "Horas de formación",         icon: GraduationCap },
  { valor: "94%",  label: "Cobertura del personal",      icon: Award },
];

// ── Programas de capacitación — reemplaza con los reales ──────────────────────
const PROGRAMAS = [
  {
    icon: GraduationCap,
    color: "primary",
    titulo: "Inducción y Reinducción Institucional",
    descripcion: "Programa de bienvenida y actualización para funcionarios nuevos y vinculados, con énfasis en misión, visión, valores y procesos institucionales.",
    participantes: 85,
    horas: 16,
  },
  {
    icon: BookOpen,
    color: "destructive",
    titulo: "Soporte Vital Básico y Avanzado",
    descripcion: "Entrenamiento práctico en reanimación cardiopulmonar, manejo de vía aérea y atención de emergencias para personal asistencial.",
    participantes: 120,
    horas: 24,
  },
  {
    icon: Users,
    color: "accent",
    titulo: "Humanización en la Atención",
    descripcion: "Formación en comunicación asertiva, empatía y trato digno hacia el paciente y su familia, orientada a mejorar la experiencia de atención.",
    participantes: 200,
    horas: 8,
  },
  {
    icon: Award,
    color: "primary",
    titulo: "Seguridad del Paciente",
    descripcion: "Capacitación en protocolos de identificación, prevención de caídas, administración segura de medicamentos y reporte de eventos adversos.",
    participantes: 150,
    horas: 12,
  },
  {
    icon: GraduationCap,
    color: "destructive",
    titulo: "Sistemas de Información en Salud",
    descripcion: "Entrenamiento en el uso del software de historia clínica electrónica, facturación y reportes al sistema de información nacional.",
    participantes: 95,
    horas: 20,
  },
  {
    icon: BookOpen,
    color: "accent",
    titulo: "Gestión del Riesgo y Bioseguridad",
    descripcion: "Formación en manejo de residuos hospitalarios, uso de elementos de protección personal y prevención de accidentes laborales.",
    participantes: 180,
    horas: 10,
  },
];

// ── Documentos descargables — reemplaza con los reales ────────────────────────
const DOCUMENTOS = [
  {
    titulo: "Plan de Capacitación 2025",
    descripcion: "Documento oficial con el plan anual de formación y desarrollo del talento humano.",
    url: "#",
  },
  {
    titulo: "Informe de Ejecución Educativa",
    descripcion: "Resultados y avances del programa educativo institucional durante la vigencia 2025.",
    url: "#",
  },
  {
    titulo: "Cronograma de Capacitaciones",
    descripcion: "Calendario detallado de actividades formativas programadas para el año.",
    url: "#",
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
// ─────────────────────────────────────────────────────────────────────────────

const Educacion = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="w-full overflow-hidden">
        <img
          src={heroBanner}
          alt="Educación y Capacitación"
          className="w-full h-auto scale-100"
        />
      </section>

      {/* Intro + Cifras clave */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">

            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-primary">
              Educación y Capacitación 2025
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              La ESE Hospital San José del Guaviare fortalece permanentemente las competencias de su talento humano a través de programas de formación, actualización y desarrollo profesional, garantizando una atención en salud de calidad.
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

            {/* Programas de capacitación */}
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">
              Programas de Capacitación
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {PROGRAMAS.map((programa, i) => {
                const Icon = programa.icon;
                return (
                  <Card
                    key={i}
                    className="p-6 hover:shadow-[var(--hover-shadow)] transition-all duration-300 border-border flex flex-col gap-3"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 ${colorMap[programa.color]} rounded-xl shrink-0`}>
                        <Icon className={`w-6 h-6 ${iconColorMap[programa.color]}`} />
                      </div>
                      <h4 className="font-semibold text-base text-card-foreground leading-tight">
                        {programa.titulo}
                      </h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {programa.descripcion}
                    </p>
                    {/* Stats */}
                    <div className="flex gap-4 pt-1 border-t border-border mt-auto">
                      <div className="text-center">
                        <p className="text-lg font-bold text-primary">{programa.participantes}</p>
                        <p className="text-xs text-muted-foreground">Participantes</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-primary">{programa.horas}h</p>
                        <p className="text-xs text-muted-foreground">Duración</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Documentos descargables */}
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">
              Documentos
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {DOCUMENTOS.map((doc, i) => (
                <Card key={i} className="p-6 hover:shadow-[var(--hover-shadow)] transition-all duration-300 border-border">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-base text-card-foreground mb-1">
                        {doc.titulo}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {doc.descripcion}
                      </p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    asChild
                  >
                    <a href={doc.url} download target="_blank" rel="noopener noreferrer">
                      <Download className="w-4 h-4 mr-2" />
                      Descargar
                    </a>
                  </Button>
                </Card>
              ))}
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

      <Footer />

    </div>
  );
};

export default Educacion;