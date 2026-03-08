import React from "react";

interface Implementacion {
  titulo: string;
  descripcion: string;
  imagen: string;
}

const implementaciones: Implementacion[] = [
  {
    titulo: "Mejoramiento de Infraestructura Hospitalaria",
    descripcion:
      "Se realizaron adecuaciones en áreas de atención y servicios asistenciales con el fin de brindar espacios más seguros, cómodos y funcionales para pacientes y personal de salud.",
    imagen: "../assets/avance_hospital_2026.jpeg",
  },
  {
    titulo: "Adquisición de Equipos Biomédicos",
    descripcion:
      "Durante el 2025 se adquirieron nuevos equipos biomédicos que fortalecen los servicios hospitalarios, mejorando la capacidad diagnóstica y la calidad en la atención a los pacientes.",
    imagen: "../assets/adquisicion_equipos_biomedicos.jpeg",
  },
  {
    titulo: "Personal de nuevo ingreso para atencion en zonas rurales del departamento",
    descripcion:
      "El personal del hospital participó en jornadas de capacitación y actualización profesional orientadas a mejorar la calidad del servicio y la seguridad del paciente.",
    imagen: "../assets/personal_nuevo_ingreso_rural.jpeg",
  },
  {
    titulo: "Fortalecimiento de Programas de Atención Comunitaria",
    descripcion:
      "Se desarrollaron estrategias de atención en salud dirigidas a comunidades urbanas y rurales del departamento del Guaviare.",
    imagen: "../assets/atencion_infancia.jpeg",
  },
];

export default function Implementaciones2025() {
  return (
    <section className="implementaciones">
      <div className="container">
        <h1>Implementaciones 2025</h1>
        <p className="intro">
          Durante la vigencia 2025 el Hospital San José del Guaviare desarrolló
          diferentes acciones orientadas a fortalecer la prestación de los
          servicios de salud, mejorar la infraestructura institucional y
          optimizar la atención a la comunidad.
        </p>

        <div className="grid">
          {implementaciones.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.imagen} alt={item.titulo} />
              <div className="contenido">
                <h3>{item.titulo}</h3>
                <p>{item.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}