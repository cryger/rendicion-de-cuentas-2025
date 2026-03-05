import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.png";
import footerLogo from "@/assets/footer-logo.png";
import { Link } from "react-router-dom";
import Footer from "@/core/footer";

const Preguntas = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero */}
      <section className="w-full overflow-hidden">
        <img
          src={heroBanner}
          alt="Rendición de cuentas 2025"
          className="w-full h-auto scale-100"
        />
      </section>

      {/* CONTENIDO CAMBIA SOLO AQUÍ */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">

            <h2 className="text-3xl font-bold text-center mb-8 text-primary">
              Avisos de Interés
            </h2>

            <div className="space-y-6">

              <div className="p-6 bg-background rounded-xl shadow">
                <h3 className="font-semibold text-lg mb-2">
                  Convocatoria Audiencia Pública
                </h3>
                <p className="text-sm text-muted-foreground">
                  La ESE Hospital San José del Guaviare invita a la comunidad a participar
                  en la audiencia pública de rendición de cuentas vigencia 2025.
                </p>
              </div>

              <div className="p-6 bg-background rounded-xl shadow">
                <h3 className="font-semibold text-lg mb-2">
                  Publicación Informe Preliminar
                </h3>
                <p className="text-sm text-muted-foreground">
                  Se encuentra disponible el informe preliminar de gestión institucional.
                </p>
              </div>

            </div>

            <div className="flex justify-center mt-10">
              <Link to="/">
                <Button size="lg">
                  Volver al inicio
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
            <Footer />

    </div>
  );
};

export default Preguntas;