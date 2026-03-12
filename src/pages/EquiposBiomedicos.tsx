import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroBanner from "@/assets/hero-banner.png";
import adquisicionEquipos from "@/assets/adquisicion_equipos_biomedicos.jpeg";
import { Activity, Stethoscope, Microscope, Radio, Heart, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../core/footer";

// ── Equipos adquiridos — reemplaza con los reales ─────────────────────────────
const EQUIPOS = [
  {
    icon: Heart,
    color: "primary",
    servicio: "Urgencias",
    nombre: "Monitor Multiparamétrico",
    cantidad: 4,
    descripcion: "Monitoreo continuo de signos vitales: ECG, SpO2, presión arterial no invasiva, temperatura y frecuencia respiratoria.",
    marca: "Mindray",
    valor: "$48.000.000",
  },
  {
    icon: Activity,
    color: "destructive",
    servicio: "UCI",
    nombre: "Ventilador Mecánico",
    cantidad: 2,
    descripcion: "Ventilación invasiva y no invasiva con modos controlados, asistidos y espontáneos para pacientes críticos.",
    marca: "Hamilton Medical",
    valor: "$120.000.000",
  },
  {
    icon: Microscope,
    color: "accent",
    servicio: "Laboratorio",
    nombre: "Analizador Hematológico",
    cantidad: 1,
    descripcion: "Análisis automatizado de hemograma completo con diferencial de 5 partes y hasta 80 muestras por hora.",
    marca: "Sysmex",
    valor: "$85.000.000",
  },
  {
    icon: Radio,
    color: "primary",
    servicio: "Imágenes Diagnósticas",
    nombre: "Ecógrafo Portátil",
    cantidad: 2,
    descripcion: "Ultrasonido diagnóstico con sondas convexas y lineales para abdomen, obstetricia y partes blandas.",
    marca: "GE Healthcare",
    valor: "$95.000.000",
  },
  {
    icon: Zap,
    color: "destructive",
    servicio: "Cirugía",
    nombre: "Electrobisturí",
    cantidad: 3,
    descripcion: "Unidad electroquirúrgica de alta frecuencia con modos de corte y coagulación para procedimientos quirúrgicos.",
    marca: "Covidien",
    valor: "$32.000.000",
  },
  {
    icon: Stethoscope,
    color: "accent",
    servicio: "Consulta Externa",
    nombre: "Colposcopio Digital",
    cantidad: 1,
    descripcion: "Sistema de colposcopía con cámara de alta resolución y software para documentación ginecológica.",
    marca: "Leisegang",
    valor: "$28.000.000",
  },
  {
    icon: Activity,
    color: "primary",
    servicio: "Urgencias",
    nombre: "Desfibrilador Bifásico",
    cantidad: 2,
    descripcion: "Desfibrilación, cardioversión sincronizada y marcapasos externo con monitor ECG integrado.",
    marca: "Zoll",
    valor: "$55.000.000",
  },
  {
    icon: Microscope,
    color: "destructive",
    servicio: "Laboratorio",
    nombre: "Analizador de Química Sanguínea",
    cantidad: 1,
    descripcion: "Determinación automatizada de perfil bioquímico completo con capacidad de 400 pruebas por hora.",
    marca: "Roche",
    valor: "$110.000.000",
  },
  {
    icon: Heart,
    color: "accent",
    servicio: "Hospitalización",
    nombre: "Cama Hospitalaria Eléctrica",
    cantidad: 10,
    descripcion: "Cama multifuncional con ajuste eléctrico de posición, barandas abatibles y frenos de seguridad.",
    marca: "Paramount Bed",
    valor: "$180.000.000",
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

const EquiposBiomedicos = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero */}
      <section className="w-full overflow-hidden">
        <img
          src={heroBanner}
          alt="Adquisición de Equipos Biomédicos"
          className="w-full h-auto scale-100"
        />
      </section>

      {/* Contenido principal */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">

            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-primary">
              Adquisición de Equipos Biomédicos 2025
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              La ESE Hospital San José del Guaviare adelantó la adquisición y modernización de equipos
              biomédicos en sus diferentes servicios, fortaleciendo la capacidad diagnóstica y terapéutica
              para brindar una atención en salud de mayor calidad a la comunidad del Guaviare.
            </p>

            {/* Resumen rápido */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              <Card className="p-6 text-center border-border">
                <p className="text-3xl font-bold text-primary mb-1">{EQUIPOS.length}</p>
                <p className="text-sm text-muted-foreground">Tipos de equipos</p>
              </Card>
              <Card className="p-6 text-center border-border">
                <p className="text-3xl font-bold text-primary mb-1">
                  {EQUIPOS.reduce((acc, e) => acc + e.cantidad, 0)}
                </p>
                <p className="text-sm text-muted-foreground">Unidades adquiridas</p>
              </Card>
              <Card className="p-6 text-center border-border">
                <p className="text-3xl font-bold text-primary mb-1">
                  {[...new Set(EQUIPOS.map(e => e.servicio))].length}
                </p>
                <p className="text-sm text-muted-foreground">Servicios beneficiados</p>
              </Card>
            </div>

            {/* Listado de equipos */}
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">
              Listado de Equipos Adquiridos
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {EQUIPOS.map((equipo, i) => {
                const Icon = equipo.icon;
                return (
                  <Card
                    key={i}
                    className="p-6 hover:shadow-[var(--hover-shadow)] transition-all duration-300 border-border flex flex-col gap-3"
                  >
                    {/* Ícono + servicio */}
                    <div className="flex items-start justify-between gap-2">
                      <div className={`p-3 ${colorMap[equipo.color]} rounded-xl shrink-0`}>
                        <Icon className={`w-6 h-6 ${iconColorMap[equipo.color]}`} />
                      </div>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${badgeColorMap[equipo.color]}`}>
                        {equipo.servicio}
                      </span>
                    </div>

                    {/* Nombre */}
                    <h4 className="font-bold text-base text-card-foreground leading-tight">
                      {equipo.nombre}
                    </h4>

                    {/* Descripción */}
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {equipo.descripcion}
                    </p>

                    {/* Detalles */}
                    <div className="border-t border-border pt-3 grid grid-cols-3 gap-2 text-center">
                      <div>
                        <p className="text-base font-bold text-primary">{equipo.cantidad}</p>
                        <p className="text-xs text-muted-foreground">Unidades</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-card-foreground truncate">{equipo.marca}</p>
                        <p className="text-xs text-muted-foreground">Marca</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-primary">{equipo.valor}</p>
                        <p className="text-xs text-muted-foreground">Valor</p>
                      </div>
                    </div>
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
                src={adquisicionEquipos}
                alt="Adquisición de equipos biomédicos"
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

export default EquiposBiomedicos;