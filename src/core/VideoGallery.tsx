// VideoGallery.tsx
// Uso: <VideoGallery title="Galería de Videos" />

import { useState, useRef, useEffect, useCallback, CSSProperties } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// ── Importa tus videos aquí ───────────────────────────────────────────────────
 import video1 from "../assets/videos/logros_hospital_2025.mp4";
import video2 from "../assets/videos/Adquisicion_equipos_biomedicos_mobiliario.mp4";
import video3 from "../assets/videos/Tamizajes_Neonatales.mp4";
import video4 from "../assets/videos/Especialistas en Salud.mp4";
import video5 from "../assets/videos/Recorrido_gerencia.mp4";
import video6 from "../assets/videos/Visita_gerente_hospital_granada.mp4";
import video7 from "../assets/videos/Visitar PAR - HSJG - HSGRANADA.mp4";
import video8 from "../assets/videos/Jornada_salud.mp4";
import video9 from "../assets/videos/Llegamos_a_usuarios.mp4"

// ─────────────────────────────────────────────────────────────────────────────

interface VideoItem {
  src: string;
  title: string;
  description?: string;
  thumbnail?: string;
}

interface VideoGalleryProps {
  title?: string;
  videos?: VideoItem[];
}

const DEFAULT_VIDEOS: VideoItem[] = [
  { src: video1, title: "Logros de nuestra vigencia 2025", description: "Estamos avanzando en la mejroa continua de nuestro Hospital." },
  { src: video2, title: "Adquisicion Equipos Biomedicos y Mobiliario", description: "Hemos adquirido nuevo mobiliario, asi como tambien nuevo equipo biomedico" },
  { src: video3, title: "Tamizajes Auditivo en Neonatales", description: "Hemos logrado con exito el Tamizaje exitoso de 3 tomas de Tamizaje Auditivo en nuestros niños" },
  { src: video4, title: "Especialistas", description: "Hemos llevado la Salud como prioridad a muchas regiones como Calamar y miraflores" },
  { src: video5, title: "Escuchamos a Nuestros Contratistas", description: "Hemos realizado la consulta continua para la mejora de nuestro servicio, escuchando a nuestros colaboradores" },
  { src: video6, title: "Visita del Hospital de Granada", description: "Como parte de la estrategia PAR, hemos recibido la visita de la se;ora Yeny Jasmin Romero en el Hospital San Jose del Guaviare" },
  { src: video7, title: "Visita con nuestro PAR", description: "Hemos realizado la visita al Hospital de granada con el objetivo de " },
  { src: video8, title: "Jornada de Salud", description: "Llevamos la Salud a Cada rincon del Municipio" },
  { src: video9, title: "Salud para todos", description: "Nos esforzamos por llegar a cada lugar de nuestra ciudad, llevando personal capacitado y un servicio integral" },
];

export default function VideoGallery({
  title = "Logros Obtenidos - Vigencia 2025",
  videos = DEFAULT_VIDEOS,
}: VideoGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 3500, stopOnInteraction: true })]
  );

  const updateScrollState = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", updateScrollState);
    emblaApi.on("reInit", updateScrollState);
    updateScrollState();
  }, [emblaApi, updateScrollState]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Reset modal video on close
  useEffect(() => {
    if (activeIndex === null && modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0;
    }
    if (activeIndex !== null && modalVideoRef.current) {
      modalVideoRef.current.load();
    }
  }, [activeIndex]);

  // Cierre con ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const activeVideo = activeIndex !== null ? videos[activeIndex] : null;

  return (
    <section style={s.section}>

      {/* ── Cabecera con título y flechas ───────────────────────────────── */}
      <div style={s.topBar}>
        <div style={s.titleGroup}>
          <div style={s.titleAccentBar} />
          <h2 style={s.title}>{title}</h2>
        </div>
        <div style={s.arrowGroup}>
          <button
            style={{ ...s.arrow, opacity: canScrollPrev ? 1 : 0.3 }}
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            style={{ ...s.arrow, opacity: canScrollNext ? 1 : 0.3 }}
            onClick={scrollNext}
            disabled={!canScrollNext}
            aria-label="Siguiente"
          >
            ›
          </button>
        </div>
      </div>

      {/* ── Slider de tarjetas ─────────────────────────────────────────── */}
      <div style={s.sliderWrapper}>
        <div style={s.emblaViewport} ref={emblaRef}>
          <div style={s.emblaContainer}>
            {videos.map((video, i) => (
              <div style={s.emblaSlide} key={i}>
                <VideoCard video={video} onClick={() => setActiveIndex(i)} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Modal reproductor ──────────────────────────────────────────── */}
      {activeVideo && (
        <div style={s.modalOverlay} onClick={() => setActiveIndex(null)}>
          <div style={s.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={s.closeBtn} onClick={() => setActiveIndex(null)} aria-label="Cerrar">✕</button>
            <video ref={modalVideoRef} style={s.modalVideo} controls autoPlay playsInline>
              <source src={activeVideo.src} type="video/mp4" />
            </video>
            <div style={s.modalInfo}>
              <h3 style={s.modalTitle}>{activeVideo.title}</h3>
              {activeVideo.description && <p style={s.modalDesc}>{activeVideo.description}</p>}
            </div>
            <div style={s.modalNav}>
              <button
                style={{ ...s.navBtn, opacity: activeIndex === 0 ? 0.3 : 1 }}
                onClick={() => setActiveIndex((i) => Math.max(0, (i ?? 0) - 1))}
                disabled={activeIndex === 0}
              >‹ Anterior</button>
              <span style={s.navCount}>{(activeIndex ?? 0) + 1} / {videos.length}</span>
              <button
                style={{ ...s.navBtn, opacity: activeIndex === videos.length - 1 ? 0.3 : 1 }}
                onClick={() => setActiveIndex((i) => Math.min(videos.length - 1, (i ?? 0) + 1))}
                disabled={activeIndex === videos.length - 1}
              >Siguiente ›</button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

// ── Tarjeta de video ──────────────────────────────────────────────────────────
function VideoCard({ video, onClick }: { video: VideoItem; onClick: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        ...s.card,
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 16px 40px rgba(26,86,160,0.22)"
          : "0 4px 16px rgba(26,86,160,0.10)",
      }}
      onClick={onClick}
      onMouseEnter={() => {
        setHovered(true);
        videoRef.current?.play().catch(() => {});
      }}
      onMouseLeave={() => {
        setHovered(false);
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      <div style={s.cardThumb}>
        <video
          ref={videoRef}
          src={video.src}
          style={s.thumbVideo}
          muted
          playsInline
          preload="metadata"
          poster={video.thumbnail}
        />
        <div style={{ ...s.playOverlay, opacity: hovered ? 0 : 1 }}>
          <div style={s.playIcon}>▶</div>
        </div>
        {hovered && <div style={s.hoverBadge}>▶ Reproducir</div>}
      </div>
      <div style={s.cardBody}>
        <h3 style={s.cardTitle}>{video.title}</h3>
        {video.description && <p style={s.cardDesc}>{video.description}</p>}
      </div>
    </div>
  );
}

// ── Estilos ───────────────────────────────────────────────────────────────────
const s: Record<string, CSSProperties> = {

  section: {
    width: "100%",
    background: "#f7faff",
    fontFamily: "'Segoe UI', system-ui, sans-serif",
    borderTop: "5px solid #1a56a0",
    paddingBottom: "40px",
  },

  topBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "24px 32px 16px",
  },

  titleGroup: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  titleAccentBar: {
    width: "5px",
    height: "34px",
    borderRadius: "4px",
    background: "linear-gradient(180deg, #1a56a0 0%, #3b82f6 100%)",
    flexShrink: 0,
  },

  title: {
    color: "#1a3a6b",
    fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
    fontWeight: 800,
    margin: 0,
    letterSpacing: "-0.01em",
    fontStyle: "italic",
  },

  arrowGroup: {
    display: "flex",
    gap: "8px",
  },

  arrow: {
    background: "#ffffff",
    border: "1.5px solid #1a56a0",
    color: "#1a56a0",
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    fontSize: "1.6rem",
    lineHeight: "38px",
    textAlign: "center" as const,
    cursor: "pointer",
    transition: "background 0.2s, color 0.2s",
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  // ── Embla slider ───────────────────────────────────────────────────────────
  sliderWrapper: {
    padding: "0 32px",
  },

  emblaViewport: {
    overflow: "hidden",
    width: "100%",
  },

  emblaContainer: {
    display: "flex",
    gap: "16px",
  },

  emblaSlide: {
    flex: "0 0 calc(20% - 13px)", // 5 tarjetas visibles
    minWidth: 0,
  },

  // ── Card ───────────────────────────────────────────────────────────────────
  card: {
    background: "#ffffff",
    borderRadius: "14px",
    overflow: "hidden",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    border: "1px solid rgba(26,86,160,0.08)",
    height: "100%",
  },

  cardThumb: {
    position: "relative",
    width: "100%",
    paddingTop: "56.25%",
    background: "#0a1628",
    overflow: "hidden",
  },

  thumbVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  playOverlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(10,22,40,0.35)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "opacity 0.2s",
  },

  playIcon: {
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.92)",
    color: "#1a56a0",
    fontSize: "1.1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "3px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
  },

  hoverBadge: {
    position: "absolute",
    bottom: "8px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "rgba(26,86,160,0.9)",
    color: "#fff",
    fontSize: "0.72rem",
    fontWeight: 600,
    padding: "3px 12px",
    borderRadius: "999px",
    whiteSpace: "nowrap" as const,
    letterSpacing: "0.04em",
  },

  cardBody: {
    padding: "12px 14px 14px",
  },

  cardTitle: {
    color: "#1a3a6b",
    fontSize: "0.88rem",
    fontWeight: 700,
    margin: "0 0 4px",
    whiteSpace: "nowrap" as const,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  cardDesc: {
    color: "#5a7090",
    fontSize: "0.78rem",
    margin: 0,
    lineHeight: 1.4,
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical" as const,
    overflow: "hidden",
  },

  // ── Modal ──────────────────────────────────────────────────────────────────
  modalOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(5,15,35,0.88)",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    backdropFilter: "blur(6px)",
  },

  modalContent: {
    position: "relative",
    background: "#0d1f3c",
    borderRadius: "16px",
    overflow: "hidden",
    width: "100%",
    maxWidth: "860px",
    boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
    border: "1px solid rgba(255,255,255,0.08)",
  },

  closeBtn: {
    position: "absolute",
    top: "12px",
    right: "12px",
    zIndex: 10,
    background: "rgba(255,255,255,0.12)",
    border: "1px solid rgba(255,255,255,0.2)",
    color: "#fff",
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    fontSize: "0.9rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  modalVideo: {
    display: "block",
    width: "100%",
    maxHeight: "500px",
    background: "#000",
  },

  modalInfo: {
    padding: "16px 20px 8px",
  },

  modalTitle: {
    color: "#ffffff",
    fontSize: "1.05rem",
    fontWeight: 700,
    margin: "0 0 4px",
  },

  modalDesc: {
    color: "rgba(180,210,255,0.75)",
    fontSize: "0.88rem",
    margin: 0,
  },

  modalNav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 20px 16px",
    borderTop: "1px solid rgba(255,255,255,0.07)",
  },

  navBtn: {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.15)",
    color: "#fff",
    padding: "8px 18px",
    borderRadius: "8px",
    fontSize: "0.88rem",
    fontWeight: 600,
    cursor: "pointer",
  },

  navCount: {
    color: "rgba(255,255,255,0.5)",
    fontSize: "0.85rem",
  },
};