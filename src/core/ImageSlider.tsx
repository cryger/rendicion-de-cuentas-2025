// ImageSlider.tsx
// Instalación necesaria: npm install embla-carousel-react embla-carousel-autoplay

import { useEffect, useCallback, useState, CSSProperties } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import AdquisicionBiomedicos from "../assets/imagenes_diagnosticas.jpg";
import AvanceHospital from "../assets/avance_hospital_2026.jpeg";
import AtencionInfancia from "../assets/atencion_infancia.jpeg";
import PersonalRural from "../assets/personal_nuevo_ingreso_rural.jpeg";
import Laboratorio from "../assets/Laboratorio.jpg";
import Dotacion from "../assets/Dotacion.jpg";
import Nacimiento from "../assets/Nacimiento.jfif";
import Portafolio from "../assets/Servicios Nuevos.jpg";
import Resolucion from "../assets/0211.png";
import Convenio from "../assets/ACV.jpeg";
import Simposio from "../assets/Simposio por la vida.jpg";
import SimposioNacional from "../assets/Simposios Nacionales.png";

// ── Tipos ─────────────────────────────────────────────────────────────────────
interface SlideImage {
  src: string;
  alt: string;
  caption?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaTarget?: "_blank" | "_self";
  objectPosition?: string; // Ej: "center top", "center 30%", "left center"
}

interface ImageSliderProps {
  images?: SlideImage[];
  autoplay?: boolean;
  delay?: number;
}

// ── Imágenes por defecto ───────────────────────────────────────────────────────
const DEFAULT_IMAGES: SlideImage[] = [
  {
    src: AvanceHospital,
    alt: "¿Sabías que nuestro compromiso con tu salud se traduce en resultados reales? ",
    caption: "¿Sabías que nuestro compromiso con tu salud se traduce en resultados reales?,Aquí te presentamos 5 grandes logros.",
    description: "Uno: Alcanzamos la cifra de 274 mil órdenes de laboratorio clínico, garantizando diagnósticos oportunos para nuestra gente.",
    ctaLabel: "Ver informe",
    ctaHref: "/rendicion-de-cuentas-25/infraestructura/",
    ctaTarget: "_self",
  },
  {
    src: Laboratorio,
    alt: "Personal en Laboratorio",
    caption: "274.000 Órdenes.",
    description: "Alcanzamos la cifra de 274,000 Ordenes de Laboratorio Clinico, garantizando diagnosticos oportunos para nuestra gente",
    ctaLabel: "Conocer más",
    ctaHref: "/rendicion-de-cuentas-25/laboratorio",
    ctaTarget: "_self",
  },
  {
    src: PersonalRural,
    alt: "Apoyo y transformacion de nuestros funcionarios",
    caption: "Invertimos en Conocimiento",
    description: "Invertimos en conocimiento: Brindamos apoyo a la formacion de nuestros funcionarios en los simposios y congresos Nacionales de Salud",
    ctaLabel: "Ver resultados",
    ctaHref: "/rendicion-de-cuentas-25/educacion",
    ctaTarget: "_self",
  },
  {
    src: AdquisicionBiomedicos,
    alt: "Nuevos Equipos Biomedicos",
    caption: "Nuevos Equipos Biomedicos",
    description: "Durante la vigencia 2025, la institución fortaleció su capacidad de atención mediante la adquisición e implementación de nuevos equipos biomédicos de alta tecnología.",
    ctaLabel: "Ver informe",
    ctaHref: "/rendicion-de-cuentas-25/equipos-biomedicos",
    ctaTarget: "_self",
  },
  {
    src: Dotacion,
    alt: "Nueva dotacion para nuestro Hospital",
    caption: "Nueva dotacion para nuestro Hospital",
    description: "Renovamos nuestra dotación con nuevas camillas, cunas, marcapasos y mesas para cirugía de cadera, Computadores, aires acondicionados de última generación.",
    ctaLabel: "Ver informe",
    ctaHref: "/rendicion-de-cuentas-25/equipos-biomedicos",
    ctaTarget: "_self",
  },
  {
    src: Nacimiento,
    alt: "La Vida Florece",
    caption: "La Vida Florece",
    description: "Recibimos con amor a 934 niños y niñas que nacieron en nuestras instalaciones durante este periodo.",
    
  },
  {
    src: Portafolio,
    alt: "Ampliamos nuestro Portafolio",
    caption: "Ampliamos nuestro Portafolio",
    description: "Nuevos servicios de Neurolisis, Fonoaudiología, Telemetrías, Polisomnografía y Ecografías Extramural.",
    ctaLabel: "Ver informe",
    ctaHref: "/rendicion-de-cuentas-25/nuevos-servicios",
    ctaTarget: "_self",
  },
  {
    src: Resolucion,
    alt: "Con la Resolucion 0211",
    caption: "Con la Resolucion 0211",
    description: "Destinamos mas de 1200 millones de pesos para transformar nuestra UCIM en una UCI de alta complejidad.",
    ctaLabel: "Ver informe",
    ctaHref: "/rendicion-de-cuentas-25/infraestructura/",
    ctaTarget: "_self",
  },
  {
    src: Convenio,
    alt: "Minutos que salvan vidas!",
    caption: "Minutos que salvan vidas!",
    description: "Tenemos un convenio con Granada, Meta, para la atención inmediata de pacientes con ACV.",
    ctaLabel: "Ver informe",
    ctaHref: "/rendicion-de-cuentas-25/convenio-granada/",
    ctaTarget: "_self",
  },
  {
    src: Simposio,
    alt: "Lideramos el aprendizaje",
    caption: "Lideramos el aprendizaje",
    description: "Lideramos el aprendizaje regional con nuestro 1er Simposio Médico por la Vida y la Paz, elevando el estándar de atención.",
    ctaLabel: "Ver informe",
    ctaHref: "/rendicion-de-cuentas-25/simposios/",
    ctaTarget: "_self",

  },
  {
    src: SimposioNacional,
    alt: "Lideramos el aprendizaje",
    caption: "Lideramos el aprendizaje",
    description: "Lideramos el aprendizaje regional con nuestro 1er Simposio Nacional, elevando el estándar de atención.",
    ctaLabel: "Ver informe",
    ctaHref: "/rendicion-de-cuentas-25/simposios/",
    ctaTarget: "_self",

  },

];

export default function ImageSlider({
  images = DEFAULT_IMAGES,
  autoplay = true,
  delay = 4000,
}: ImageSliderProps) {
  const autoplayPlugin = autoplay
    ? [Autoplay({ delay, stopOnInteraction: true })]
    : [];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, autoplayPlugin);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo   = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  return (
    <div style={styles.wrapper}>
      <div style={styles.viewport} ref={emblaRef}>
        <div style={styles.container}>
          {images.map((img, i) => (
            <div style={styles.slide} key={i}>
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  ...styles.image,
                  objectPosition: img.objectPosition ?? "center 20%",
                }}
                loading={i === 0 ? "eager" : "lazy"}
              />
              {img.caption && (
                <div style={styles.captionBox}>
                  <div style={styles.captionContent}>
                    <span style={styles.captionText}>{img.caption}</span>
                    {img.description && (
                      <p style={styles.descriptionText}>{img.description}</p>
                    )}
                  </div>
                  {img.ctaHref && img.ctaLabel && (
                    <a
                      href={img.ctaHref}
                      target={img.ctaTarget ?? "_self"}
                      rel={img.ctaTarget === "_blank" ? "noopener noreferrer" : undefined}
                      style={styles.cta}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,1)";
                        (e.currentTarget as HTMLAnchorElement).style.color = "#0a1628";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.15)";
                        (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                      }}
                    >
                      {img.ctaLabel} →
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <button style={{ ...styles.arrow, ...styles.arrowPrev }} onClick={scrollPrev} aria-label="Anterior">‹</button>
      <button style={{ ...styles.arrow, ...styles.arrowNext }} onClick={scrollNext} aria-label="Siguiente">›</button>

      <div style={styles.dots}>
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            style={{ ...styles.dot, ...(i === selectedIndex ? styles.dotActive : {}) }}
            aria-label={`Ir a la imagen ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// ── Estilos ───────────────────────────────────────────────────────────────────
const styles: Record<string, CSSProperties> = {
  wrapper: {
    position: "relative",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    background: "transparent",
  },
  viewport: {
    overflow: "hidden",
    width: "100%",
    height: "100%",
  },
  container: {
    display: "flex",
    willChange: "transform",
    height: "100%",
  },
  slide: {
    position: "relative",
    flex: "0 0 100%",
    minWidth: 0,
    height: "100%",
  },
  image: {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center 20%",
  },
  captionBox: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: "60px 24px 24px",
    background: "linear-gradient(transparent, rgba(10,22,40,0.93))",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: "20px",
  },
  captionContent: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "6px",
    flex: 1,
  },
  captionText: {
    color: "#fff",
    fontSize: "1.15rem",
    fontWeight: 700,
    letterSpacing: "0.02em",
    textShadow: "0 1px 4px rgba(0,0,0,0.5)",
    margin: 0,
  },
  descriptionText: {
    color: "rgba(255,255,255,0.82)",
    fontSize: "0.88rem",
    fontWeight: 400,
    lineHeight: "1.5",
    margin: 0,
    textShadow: "0 1px 3px rgba(0,0,0,0.4)",
    maxWidth: "560px",
  },
  cta: {
    display: "inline-block",
    padding: "10px 20px",
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(6px)",
    border: "1.5px solid rgba(255,255,255,0.7)",
    borderRadius: "6px",
    color: "#fff",
    fontSize: "0.9rem",
    fontWeight: 600,
    letterSpacing: "0.04em",
    textDecoration: "none",
    whiteSpace: "nowrap",
    transition: "background 0.2s, color 0.2s",
    cursor: "pointer",
    flexShrink: 0,
  },
  arrow: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(6px)",
    border: "1px solid rgba(255,255,255,0.25)",
    color: "#fff",
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    fontSize: "1.8rem",
    lineHeight: "44px",
    textAlign: "center",
    cursor: "pointer",
    zIndex: 10,
    transition: "background 0.2s",
    padding: 0,
    userSelect: "none",
  },
  arrowPrev: { left: "14px" },
  arrowNext: { right: "14px" },
  dots: {
    position: "absolute",
    bottom: "14px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "8px",
    zIndex: 10,
  },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    border: "2px solid rgba(255,255,255,0.6)",
    background: "transparent",
    cursor: "pointer",
    padding: 0,
    transition: "background 0.25s, transform 0.2s",
  },
  dotActive: {
    background: "#fff",
    transform: "scale(1.25)",
    borderColor: "#fff",
  },
};