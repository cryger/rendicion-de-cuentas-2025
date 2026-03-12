import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroBanner from "@/assets/hero-banner.png";
import laboratorioImg from "@/assets/Laboratorio.jpg";
import { Microscope, FlaskConical, ClipboardList, Clock, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../core/footer";

// ── Cifras clave ──────────────────────────────────────────────────────────────
const CIFRAS = [
  { valor: "274.000", label: "Órdenes de laboratorio procesadas", icon: ClipboardList },
  { valor: "24/7",    label: "Disponibilidad del servicio",        icon: Clock },
  { valor: "100%",    label: "Diagnósticos oportunos",             icon: Award },
  { valor: "II",      label: "Nivel de complejidad",               icon: Microscope },
];

// ── Servicios del laboratorio ─────────────────────────────────────────────────
const SERVICIOS = [
  {
    icon: Microscope,
    color: "primary",
    nombre: "Hematología",
    descripcion: "Hemograma completo con diferencial de 5 partes, recuento de plaquetas, VSG y pruebas de coagulación como TP, TPT y fibrinógeno.",
  },
  {
    icon: FlaskConical,
    color: "destructive",
    nombre: "Química Sanguínea",
    descripcion: "Perfil bioquímico completo: glucosa, creatinina, urea, ácido úrico, perfil lipídico, pruebas hepáticas y enzimas cardíacas.",
  },
  {
    icon: ClipboardList,
    color: "accent",
    nombre: "Microbiología",
    descripcion: "Cultivos de sangre, orina, secreciones y otros fluidos corporales con identificación de microorganismos y antibiograma.",
  },
  {
    icon: Award,
    color: "primary",
    nombre: "Inmunología y Serología",
    descripcion: "Pruebas de VIH, hepatitis B y C, sífilis, toxoplasma, rubeola, CMV, dengue y otras enfermedades infecciosas.",
  },
  {
    icon: Users,
    color: "destructive",
    nombre: "Uroanálisis",
    descripcion: "Análisis físico, químico y microscópico de orina, incluye prueba de embarazo, depuración de creatinina y proteínas en orina de 24 horas.",
  },
  {
    icon: Microscope,
    color: "accent",
    nombre: "Banco de Sangre",
    descripcion: "Tipificación sanguínea, pruebas cruzadas, donación y suministro de hemocomponentes para procedimientos quirúrgicos y urgencias.",
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

const Laboratorio = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero */}
      <section className="w-full overflow-hidden">
        <img
          src={heroBanner}
          alt="Laboratorio Clínico"
          className="w-full h-auto scale-100"
        />
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">

            {/* Título */}
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-primary">
              Laboratorio Clínico 2025
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              El Laboratorio Clínico de la ESE Hospital San José del Guaviare alcanzó la cifra histórica
              de <span className="font-bold text-primary">274.000 órdenes procesadas</span> durante la vigencia 2025,
              garantizando diagnósticos oportunos y de calidad para la comunidad del departamento del Guaviare.
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

            {/* Banner destacado */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mb-16 flex flex-col md:flex-row items-center gap-6">
              <div className="p-5 bg-primary/10 rounded-full shrink-0">
                <Microscope className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">274.000 Órdenes de Laboratorio</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Alcanzamos la cifra de 274.000 órdenes de Laboratorio Clínico, garantizando diagnósticos
                  oportunos para nuestra gente. Un logro que refleja el compromiso del equipo humano del
                  laboratorio con la salud de los guaviarenses.
                </p>
              </div>
            </div>

            {/* Servicios */}
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">
              Servicios del Laboratorio
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICIOS.map((servicio, i) => {
                const Icon = servicio.icon;
                return (
                  <Card
                    key={i}
                    className="p-6 hover:shadow-[var(--hover-shadow)] transition-all duration-300 border-border flex flex-col gap-3"
                  >
                    <div className={`p-3 ${colorMap[servicio.color]} rounded-xl w-fit`}>
                      <Icon className={`w-6 h-6 ${iconColorMap[servicio.color]}`} />
                    </div>
                    <h4 className="font-bold text-base text-card-foreground">{servicio.nombre}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{servicio.descripcion}</p>
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

export default Laboratorio;