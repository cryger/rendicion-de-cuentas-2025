import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroBanner from "@/assets/hero-banner.png";
import teamPhoto from "@/assets/team-photo.png";
import medicalSection from "@/assets/medical-section.png";
import footerLogo from "@/assets/footer-logo.png";
import { FileText, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../core/footer";
import SabiasQue from "@/core/SabiasQue";
import ImageSlider from "../core/ImageSlider";
import SliderSection from "@/core/sliderSection";
import VideoGallery from "@/core/VideoGallery";
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-full overflow-hidden">

        <img
          src={heroBanner}
          alt="Rendición de cuentas 2025"
          className="w-full h-auto scale-100"
        />

      </section>

      {/* Information Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-primary">
              Rendición Cuentas
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              La ESE Hospital San José del Guaviare es el único hospital de III nivel de complejidad en el Departamento del Guaviare, constituyéndose como centro de referencia, no solo del Guaviare sino del sur del Meta y departamentos circunvecinos.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-[var(--hover-shadow)] transition-all duration-300 border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-card-foreground">Gestión Anual</h3>
                    <p className="text-sm text-muted-foreground">Informe detallado de las actividades y logros del año 2025</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-[var(--hover-shadow)] transition-all duration-300 border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-destructive/10 rounded-xl">
                    <Users className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-card-foreground">Audiencia Pública</h3>
                    <p className="text-sm text-muted-foreground">Transparencia y participación ciudadana en la gestión hospitalaria</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-[var(--hover-shadow)] transition-all duration-300 border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-xl">
                    <FileText className="w-6 h-6 text-accent" />
                    
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-card-foreground"><a href="https://esehospitalguaviare.gov.co/rendicion-de-cuentas-24/microsites/accountabilities/micro-2024/docs/Reglamento.pdf">Reglamento</a> </h3>
                    <p className="text-sm text-muted-foreground">Marco normativo y procedimientos de la institución</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link to="/informe">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300">
                  Informe de Gestión
                </Button>
              </Link>
              <Link to="/avisos">
                <Button size="lg" variant="outline" className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground shadow-md hover:shadow-lg transition-all duration-300">
                  Avisos de Interés
                </Button>
              </Link>

              <Link to="/preguntas">
                <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground shadow-md hover:shadow-lg transition-all duration-300">
                  Banco de Preguntas
                </Button>
              </Link>
              
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery Section*/}
      <VideoGallery></VideoGallery>

      {/* Did You Know Section */}
      <SliderSection></SliderSection>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
