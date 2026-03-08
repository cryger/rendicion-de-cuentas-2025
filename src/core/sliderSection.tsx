// SliderSection.tsx
// Contenedor decorativo que envuelve al ImageSlider.
// Uso: <SliderSection title="Rendición de Cuentas" subtitle="Logros 2024" />

import { CSSProperties } from "react";
import ImageSlider from "./ImageSlider";

interface SliderSectionProps {
  title?: string;
  subtitle?: string;
}

export default function SliderSection({
  title = "Rendición de Cuentas",
  subtitle = "Logros y avances 2024",
}: SliderSectionProps) {
  return (
    <section style={s.section}>

      {/* ── Fondo decorativo ───────────────────────────────────────────── */}
      {/* Círculo grande difuso superior derecha */}
      <div style={{ ...s.blob, ...s.blobTopRight }} />
      {/* Círculo pequeño inferior izquierda */}
      <div style={{ ...s.blob, ...s.blobBottomLeft }} />
      {/* Líneas de cuadrícula sutiles */}
      <div style={s.grid} />

      {/* ── Encabezado de sección ──────────────────────────────────────── */}
      <div style={s.header}>
        <div style={s.badge}>
          <span style={s.badgeDot} />
          EN VIVO · INFORME OFICIAL
        </div>
        <h2 style={s.title}>{title}</h2>
        <p style={s.subtitle}>{subtitle}</p>
        <div style={s.titleUnderline} />
      </div>

      {/* ── Slider ────────────────────────────────────────────────────── */}
      <div style={s.sliderShell}>
        {/* Brillo decorativo detrás del slider */}
        <div style={s.sliderGlow} />
        <div style={s.sliderFrame}>
          <ImageSlider />
        </div>
      </div>

    </section>
  );
}

// ── Estilos ───────────────────────────────────────────────────────────────────
const s: Record<string, CSSProperties> = {
  section: {
    position: "relative",
    width: "100%",
    background: "linear-gradient(160deg, #0b1d3a 0%, #0f2d55 45%, #0a1e38 100%)",
    padding: "52px 40px 48px",
    overflow: "hidden",
    fontFamily: "'Segoe UI', system-ui, sans-serif",
  },

  // ── Blobs de fondo ──────────────────────────────────────────────────────────
  blob: {
    position: "absolute",
    borderRadius: "50%",
    filter: "blur(80px)",
    pointerEvents: "none",
  },
  blobTopRight: {
    width: "520px",
    height: "520px",
    top: "-160px",
    right: "-120px",
    background: "radial-gradient(circle, rgba(37,99,235,0.35) 0%, transparent 70%)",
  },
  blobBottomLeft: {
    width: "320px",
    height: "320px",
    bottom: "-80px",
    left: "-60px",
    background: "radial-gradient(circle, rgba(16,185,129,0.18) 0%, transparent 70%)",
  },

  // ── Cuadrícula sutil ────────────────────────────────────────────────────────
  grid: {
    position: "absolute",
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
    `,
    backgroundSize: "48px 48px",
    pointerEvents: "none",
  },

  // ── Encabezado ──────────────────────────────────────────────────────────────
  header: {
    position: "relative",
    zIndex: 1,
    marginBottom: "28px",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "7px",
    background: "rgba(16,185,129,0.12)",
    border: "1px solid rgba(16,185,129,0.35)",
    color: "#34d399",
    fontSize: "0.7rem",
    fontWeight: 700,
    letterSpacing: "0.12em",
    padding: "5px 12px",
    borderRadius: "999px",
    marginBottom: "14px",
    textTransform: "uppercase" as const,
  },
  badgeDot: {
    display: "inline-block",
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    background: "#34d399",
    boxShadow: "0 0 6px #34d399",
    animation: "pulse 2s infinite",
  },
  title: {
    color: "#ffffff",
    fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
    fontWeight: 800,
    margin: "0 0 6px",
    letterSpacing: "-0.02em",
    lineHeight: 1.15,
  },
  subtitle: {
    color: "rgba(180,210,255,0.75)",
    fontSize: "1rem",
    margin: "0 0 16px",
    fontWeight: 400,
  },
  titleUnderline: {
    width: "56px",
    height: "4px",
    borderRadius: "4px",
    background: "linear-gradient(90deg, #2563eb, #34d399)",
  },

  // ── Shell del slider ────────────────────────────────────────────────────────
  sliderShell: {
    position: "relative",
    zIndex: 1,
  },
  sliderGlow: {
    position: "absolute",
    inset: "-12px",
    borderRadius: "22px",
    background: "linear-gradient(135deg, rgba(37,99,235,0.25), rgba(16,185,129,0.12))",
    filter: "blur(18px)",
    zIndex: 0,
    pointerEvents: "none",
  },
  sliderFrame: {
    position: "relative",
    zIndex: 1,
    height: "420px",
    borderRadius: "14px",
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.1)",
    boxShadow: "0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)",
  },
};