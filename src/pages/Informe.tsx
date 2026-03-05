import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroBanner from "@/assets/hero-banner.png";
import teamPhoto from "@/assets/team-photo.png";
import footerLogo from "@/assets/footer-logo.png";
import { FileText, BarChart3, Download } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../core/footer";

const Informe = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="w-full overflow-hidden">
        <img
          src={heroBanner}
          alt="Informe de Gestión 2025"
          className="w-full h-auto scale-100"
        />
      </section>

      {/* Informe Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">

            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-primary">
              Informe de Gestión 2025
            </h2>

            <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              En esta sección se presenta el informe de gestión de la ESE Hospital San José del Guaviare correspondiente a la vigencia 2025, donde se exponen los resultados, avances institucionales y acciones desarrolladas en beneficio de la comunidad.
            </p>

            {/* Tarjetas */}
            <div className="grid md:grid-cols-3 gap-6">

              <Card className="p-6 hover:shadow-[var(--hover-shadow)] transition-all duration-300 border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-card-foreground">
                      Informe Completo
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Documento oficial con el resumen de la gestión institucional durante el año 2025.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-[var(--hover-shadow)] transition-all duration-300 border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-destructive/10 rounded-xl">
                    <BarChart3 className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-card-foreground">
                      Resultados Institucionales
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Indicadores de gestión, cobertura en salud y resultados de los servicios hospitalarios.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-[var(--hover-shadow)] transition-all duration-300 border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-xl">
                    <Download className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-card-foreground">
                      Descarga del Informe
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Accede al documento oficial del informe de gestión en formato PDF.
                    </p>
                  </div>
                </div>
              </Card>

            </div>

            {/* Botón descarga */}
            <div className="mt-10 flex justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md">
                Descargar Informe de Gestión
              </Button>
            </div>

            {/* Botón volver */}
            <div className="mt-6 flex justify-center">
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
                src={teamPhoto}
                alt="Equipo Hospital San José del Guaviare"
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

export default Informe;