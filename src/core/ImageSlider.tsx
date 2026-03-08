// ImageSlider.tsx
// Instalación necesaria: npm install embla-carousel-react embla-carousel-autoplay
// Uso: <ImageSlider images={[...]} autoplay={true} />

import { useEffect, useCallback, useState, CSSProperties } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import AdquisicionBiomedicos from "../assets/adquisicion_equipos_biomedicos.png";
import AvanceHospital from "../assets/avance_hospital_2026.png";
import AtencionInfancia from "../assets/atencion_infancia.png";
import PersonalRural from "../assets/personal_nuevo_ingreso_rural.png";

// ── Tipos ─────────────────────────────────────────────────────────────────────
interface SlideImage {
  src: string;
  alt: string;
  caption?: string;
  description?: string; // Texto descriptivo debajo del caption
  ctaLabel?: string;    // Texto del botón, ej: "Ver más"
  ctaHref?: string;     // URL de destino, ej: "/informes/2024"
  ctaTarget?: "_blank" | "_self"; // Abre en nueva pestaña o misma pestaña
}

interface ImageSliderProps {
  images?: SlideImage[];
  autoplay?: boolean;
  delay?: number;
}

// ── Datos de ejemplo — reemplaza con tus imágenes reales ──────────────────────
const DEFAULT_IMAGES: SlideImage[] = [
  {
    src: AvanceHospital,
    alt: "Logro 1",
    caption: "Inversión en infraestructura 2025",
    description: "Se ejecutaron 42 proyectos viales que beneficiaron a más de 300.000 habitantes en zonas rurales y urbanas del departamento.",
    ctaLabel: "Ver informe",
    ctaHref: "/informes/infraestructura",
    ctaTarget: "_self",
  },
  {
    src: AtencionInfancia,
    alt: "Logro 2",
    caption: "Programas sociales ejecutados",
    description: "Más de 15.000 familias fueron atendidas a través de programas de seguridad alimentaria, vivienda digna y apoyo psicosocial.",
    ctaLabel: "Conocer más",
    ctaHref: "/programas-sociales",
    ctaTarget: "_self",
  },
  {
    src: PersonalRural,
    alt: "Logro 3",
    caption: "Cobertura educativa ampliada",
    description: "Se construyeron y dotaron 18 instituciones educativas, alcanzando una cobertura del 94% en educación básica primaria.",
    ctaLabel: "Ver resultados",
    ctaHref: "/educacion",
    ctaTarget: "_self",
  }
];
// ─────────────────────────────────────────────────────────────────────────────

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
      {/* Viewport */}
      <div style={styles.viewport} ref={emblaRef}>
        <div style={styles.container}>
          {images.map((img, i) => (
            <div style={styles.slide} key={i}>
              <img
                src={img.src}
                alt={img.alt}
                style={styles.image}
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

      {/* Botón anterior */}
      <button
        style={{ ...styles.arrow, ...styles.arrowPrev }}
        onClick={scrollPrev}
        aria-label="Anterior"
      >
        ‹
      </button>

      {/* Botón siguiente */}
      <button
        style={{ ...styles.arrow, ...styles.arrowNext }}
        onClick={scrollNext}
        aria-label="Siguiente"
      >
        ›
      </button>

      {/* Dots */}
      <div style={styles.dots}>
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            style={{
              ...styles.dot,
              ...(i === selectedIndex ? styles.dotActive : {}),
            }}
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
    maxWidth: "960px",
    margin: "0 auto",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
    background: "#0a1628",
  },
  viewport: {
    overflow: "hidden",
    width: "100%",
  },
  container: {
    display: "flex",
    willChange: "transform",
  },
  slide: {
    position: "relative",
    flex: "0 0 100%",
    minWidth: 0,
  },
  image: {
    display: "block",
    width: "100%",
    height: "480px",
    objectFit: "cover",
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