import { useEffect, useState } from "react";
import avanceHospital from "../assets/avance_hospital_2026.jpeg";
import adquisicionBiomedicos from "../assets/adquisicion_equipos_biomedicos.jpeg";
import personalIngreso from "../assets/personal_nuevo_ingreso_rural.jpeg"

interface Slide {
  image: string;
  title: string;
  description: string;
  link: string;
}

const slides: Slide[] = [
  
  {
    image: avanceHospital,
    title: "Mejoras en infraestructura",
    description: "Se adecuaron nuevas áreas para mejorar la atención.",
    link: "/implementaciones-2025"
  },
  {
    image: adquisicionBiomedicos,
    title: "Nuevo equipo biomédico",
    description: "Este año fortalecimos los servicios con tecnología médica.",
    link: "/implementaciones-2025"
  },
  {
    image: personalIngreso,
    title: "Capacitación del talento humano",
    description: "El personal recibió formación para mejorar la atención.",
    link: "/implementaciones-2025"
  }
];

export default function SabiasQue() {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <section className="sabias-container">
      <h2>¿Sabías que?</h2>

      <div className="slider">

        <img src={slide.image} alt={slide.title} />

        <div className="slide-content">
          <h3>{slide.title}</h3>
          <p>{slide.description}</p>

          <a href={slide.link} className="cta">
            Conoce más
          </a>
        </div>

      </div>
    </section>
  );
}