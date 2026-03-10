// SliderSection.tsx
// Uso: <SliderSection title="¿Sabías qué?" />

import { CSSProperties } from "react";
import ImageSlider from "./ImageSlider";

interface SliderSectionProps {
  title?: string;
}

export default function SliderSection({
  title = "¿Sabías qué?",
}: SliderSectionProps) {
  return (
    <section style={s.section}>

      {/* ── Franja blanca superior con título ──────────────────────────── */}
      <div style={s.topBar}>
        <div style={s.titleAccentBar} />
        <h2 style={s.title}>{title}</h2>
      </div>

      {/* ── Zona curva + slider ────────────────────────────────────────── */}
      <div style={s.curveWrapper}>
        <div style={s.whiteBlock} />
        <div style={s.sliderBox}>
          <ImageSlider />
        </div>
      </div>

    </section>
  );
}

const s: Record<string, CSSProperties> = {

  section: {
    width: "100%",
    background: "#ffffff",
    fontFamily: "'Segoe UI', system-ui, sans-serif",
    borderTop: "5px solid #1a56a0",
    overflow: "hidden",
  },

  // Franja blanca con padding reducido — título cerca del borde superior
  topBar: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "14px 32px 10px",
    background: "#ffffff",
    position: "relative",
    zIndex: 2,
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

  curveWrapper: {
    position: "relative",
    width: "100%",
    padding: "0 32px 32px",
  },

  // Bloque blanco: cubre la esquina del slider hasta el final del "?"
  whiteBlock: {
    position: "absolute",
    top: 0,
    left: "32px",
    width: "255px",
    height: "48px",
    background: "#ffffff",
    zIndex: 2,
    borderBottomRightRadius: "48px",
    pointerEvents: "none",
  },

  sliderBox: {
    position: "relative",
    width: "100%",
    height: "700px",
    borderRadius: "48px 48px 24px 24px",
    overflow: "hidden",
    zIndex: 1,
    display: "block",
    marginTop: "-18px",
  },
};