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
              Banco de Preguntas
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
                  Banco de Preguntas - Informacion de Interes
                </h3>
                <iframe
                  width= "1200"
                  height="480"
                  src="https://forms.office.com/Pages/ResponsePage.aspx?id=RcgWvpY6jU61nL6_t-gOxbNKBDBv_vBGv2iyxF9R8rdUMkVEUTdHM1MwSjIyRUFVUEFGQ1M0TE5LVS4u&embed=true"
                  frameBorder="0"
                  marginWidth={0}
                  marginHeight={0}
                  style={{ border: "none", maxWidth: "100%", maxHeight: "100vh" }}
                  allowFullScreen
                />

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