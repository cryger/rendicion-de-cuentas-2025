import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroBanner from "@/assets/hero-banner.png";
import teamPhoto from "@/assets/team-photo.png";
import { Ambulance, MapPin, Clock, ShieldCheck, Users, FileText, HeartPulse, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../core/footer";

// ── Cifras clave ──────────────────────────────────────────────────────────────
const CIFRAS = [
  { valor: "2",      label: "Municipios articulados",         icon: MapPin },
  { valor: "< 30'",  label: "Tiempo de respuesta estimado",   icon: Clock },
  { valor: "24/7",   label: "Disponibilidad del servicio",    icon: ShieldCheck },
  { valor: "100%",   label: "Cobertura vía nacional",         icon: Ambulance },
];

// ── Puntos de atención ────────────────────────────────────────────────────────
const PUNTOS = [
  {
    icon: MapPin,
    color: "primary",
    titulo: "San José del Guaviare",
    entidad: "ESE Hospital San José del Guaviare",
    descripcion: "Hospital de II nivel de complejidad, centro de referencia y coordinación del convenio. Responsable de la activación del protocolo de atención en vías nacionales.",
    direccion: "Calle 12 Carrera 20, Barrio La Esperanza",
    telefono: "+57 318 568 9597",
  },
  {
    icon: MapPin,
    color: "destructive",
    titulo: "Granada — Meta",
    entidad: "Entidad de Salud Granada",
    descripcion: "Punto de recepción y atención inmediata para pacientes provenientes de la vía nacional intermedia, con capacidad de estabilización y remisión según complejidad.",
    direccion: "Granada, Meta",
    telefono: "Por definir",
  },
];

// ── Cobertura de la vía ───────────────────────────────────────────────────────
const TRAMOS = [
  {
    icon: MapPin,
    color: "primary",
    tramo: "San José del Guaviare → El Retorno",
    km: "~48 km",
    descripcion: "Primer tramo de la vía nacional. Cobertura garantizada por el equipo de respuesta de la ESE Hospital San José del Guaviare.",
  },
  {
    icon: Ambulance,
    color: "destructive",
    tramo: "El Retorno → Calamar",
    km: "~52 km",
    descripcion: "Tramo intermedio de mayor accidentalidad. Punto de encuentro entre las unidades de respuesta de ambos municipios.",
  },
  {
    icon: MapPin,
    color: "accent",
    tramo: "Calamar → Granada",
    km: "~180 km",
    descripcion: "Tramo final hacia el departamento del Meta. Cobertura coordinada con la entidad de salud de Granada.",
  },
];

// ── Componentes del convenio ──────────────────────────────────────────────────
const COMPONENTES = [
  {
    icon: HeartPulse,
    color: "primary",
    titulo: "Atención Prehospitalaria",
    descripcion: "Activación inmediata de unidades de atención prehospitalaria ante accidentes de tránsito y emergencias médicas en la vía nacional, con personal capacitado en soporte vital básico y avanzado.",
  },
  {
    icon: Ambulance,
    color: "destructive",
    titulo: "Traslado Asistido",
    descripcion: "Protocolo de traslado asistido entre los dos municipios para pacientes que requieran atención de mayor complejidad, garantizando la continuidad del cuidado durante el transporte.",
  },
  {
    icon: ShieldCheck,
    color: "accent",
    titulo: "Estabilización y Remisión",
    descripcion: "Procedimientos de estabilización hemodinámica en sitio y definición del destino de remisión según el nivel de complejidad requerido por el paciente.",
  },
  {
    icon: Users,
    color: "primary",
    titulo: "Coordinación Interinstitucional",
    descripcion: "Mesa de coordinación permanente entre las dos entidades para la revisión de protocolos, capacitación conjunta del personal y seguimiento a los indicadores del convenio.",
  },
  {
    icon: FileText,
    color: "destructive",
    titulo: "Registro y Seguimiento",
    descripcion: "Sistema unificado de registro de eventos atendidos en vía, con trazabilidad del paciente desde el sitio del accidente hasta su alta hospitalaria.",
  },
  {
    icon: Phone,
    color: "accent",
    titulo: "Línea de Activación",
    descripcion: "Canal de comunicación directa entre los equipos de respuesta de ambos municipios para la activación del protocolo y el intercambio de información clínica en tiempo real.",
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

const ConvenioGranada = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero */}
      <section className="w-full overflow-hidden">
        <img
          src={heroBanner}
          alt="Convenio Granada"
          className="w-full h-auto scale-100"
        />
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">

            {/* Título */}
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-primary">
              Convenio de Atención en Vías Nacionales
            </h2>
            <h3 className="text-xl font-semibold text-center text-muted-foreground mb-4">
              San José del Guaviare — Granada, Meta
            </h3>
            <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Acuerdo interinstitucional para garantizar la atención inmediata de pacientes en emergencia
              en las vías nacionales intermedias entre los municipios de San José del Guaviare y Granada,
              fortaleciendo la respuesta prehospitalaria y reduciendo la mortalidad en accidentes de tránsito
              y emergencias médicas en esta ruta.
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
                    <p className="text-2xl font-bold text-primary mb-1">{cifra.valor}</p>
                    <p className="text-sm text-muted-foreground leading-tight">{cifra.label}</p>
                  </Card>
                );
              })}
            </div>

            {/* Entidades del convenio */}
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">
              Entidades Participantes
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {PUNTOS.map((punto, i) => {
                const Icon = punto.icon;
                return (
                  <Card key={i} className="p-6 border-border hover:shadow-[var(--hover-shadow)] transition-all duration-300 flex flex-col gap-3">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 ${colorMap[punto.color]} rounded-xl shrink-0`}>
                        <Icon className={`w-6 h-6 ${iconColorMap[punto.color]}`} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-card-foreground">{punto.titulo}</h4>
                        <p className={`text-sm font-semibold ${iconColorMap[punto.color]}`}>{punto.entidad}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{punto.descripcion}</p>
                    <div className="border-t border-border pt-3 space-y-1">
                      <p className="text-xs text-muted-foreground flex items-center gap-2">
                        <MapPin className="w-3 h-3" /> {punto.direccion}
                      </p>
                      <p className="text-xs text-muted-foreground flex items-center gap-2">
                        <Phone className="w-3 h-3" /> {punto.telefono}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Cobertura vial */}
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">
              Cobertura de la Vía Nacional
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {TRAMOS.map((tramo, i) => {
                const Icon = tramo.icon;
                return (
                  <Card key={i} className="p-6 border-border hover:shadow-[var(--hover-shadow)] transition-all duration-300 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 ${colorMap[tramo.color]} rounded-xl`}>
                        <Icon className={`w-5 h-5 ${iconColorMap[tramo.color]}`} />
                      </div>
                      <span className={`text-sm font-bold ${iconColorMap[tramo.color]}`}>{tramo.km}</span>
                    </div>
                    <h4 className="font-semibold text-sm text-card-foreground leading-tight">{tramo.tramo}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{tramo.descripcion}</p>
                  </Card>
                );
              })}
            </div>

            {/* Componentes del convenio */}
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">
              Componentes del Convenio
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {COMPONENTES.map((comp, i) => {
                const Icon = comp.icon;
                return (
                  <Card key={i} className="p-6 border-border hover:shadow-[var(--hover-shadow)] transition-all duration-300 flex flex-col gap-3">
                    <div className={`p-3 ${colorMap[comp.color]} rounded-xl w-fit`}>
                      <Icon className={`w-6 h-6 ${iconColorMap[comp.color]}`} />
                    </div>
                    <h4 className="font-bold text-base text-card-foreground">{comp.titulo}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{comp.descripcion}</p>
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

      

      <Footer />

    </div>
  );
};

export default ConvenioGranada;