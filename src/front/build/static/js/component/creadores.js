import React from "react";
import Angelo from "../../img/Angelo.png"
import Natalia from "../../img/Natalia.png"

// CreatorCard Component
export const CreadorCard = ({ imageSrc, borderColor, name, role, description, alignment }) => {
  // Dynamic alignment style
  const alignmentStyle = alignment === "right" ? "row-reverse" : "row";

  return (
    <div style={{ ...styles.card, flexDirection: alignmentStyle }}>
      <div style={{ ...styles.imageContainer, borderColor: borderColor }}>
        <img src={imageSrc} alt={name} style={styles.image} />
      </div>
      <div
        style={{
          ...styles.content,
          textAlign: alignment === "right" ? "left" : "left",
        }}
      >
        <h2 style={styles.name}>{name}</h2>
        <p style={styles.role}>{role}</p>
        <p style={styles.description}>{description}</p>
      </div>
    </div>
  );
};

// Creators Component
export const Creadores = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Creadores</h1>

      {/* First Card - Image on the Left */}
      <CreadorCard
        imageSrc={Angelo}
        borderColor="#FFD93D"
        name="Angelo Mendoza T."
        role="Trabajador Social de la Universidad Católica Silva Henríquez, actor
            de Teatro Espontáneo, Playback y Teatro Debate, Magíster en Ética
            Social y Desarrollo Humano de la Universidad Alberto Hurtado."
        description="Su experiencia profesional le ha permitido liderar diversos proyectos
            sociales para la promoción de Derechos Humanos con niñeces, jóvenes,
            comunidades migrantes y personas en contexto de alta vulnerabilidad.
            Actualmente es capacitador y docente de educación superior en
            materias de ética, inteligencia emocional, liderazgo y trabajo
            colaborativo."
        alignment="left" // Image on the Left
      />

      {/* Second Card - Image on the Right */}
      <CreadorCard
        imageSrc={Natalia}
        borderColor="#E60012"
        name="Natalia Romero A."
        role="Psicóloga de la Universidad de Chile, con postítulo de
            especialización clínica infanto juvenil en la Universidad Diego
            Portales, actualmente cursa el Magíster en Psicología Educacional de
            la Universidad Mayor."
        description="Su experiencia personal y laboral le ha permitido implementar
            diferentes acciones en favor de la inclusión, promoción de las
            niñeces y fortalecimiento familiar, actualmente es investigadora en
            educación y también integrante de un equipo multidisciplinario para
            el desarrollo socio emocional."
        alignment="right" // Image on the Right
      />
    </div>
  );
};

// Styles
const styles = {
  container: {
    fontFamily: "'Fredoka One', cursive",
    maxWidth: "900px",
    margin: "0 auto",
    color: "#333",
    padding: "20px",
    paddingTop: "150px"
  },
  title: {
    color: "#E60012",
    fontSize: "3rem",
    marginBottom: "40px",
    textAlign: "center",
  },
  card: {
    display: "flex",
    flexDirection: "row", // Default direction
    alignItems: "center",
    marginBottom: "40px",
    paddingTop: "20px"
  },
  imageContainer: {
    borderRadius: "50%",
    borderWidth: "5px",
    borderStyle: "solid",
    padding: "5px",
    margin: "0 20px",
  },
  image: {
    borderRadius: "50%",
    width: "150px",
    height: "150px",
    objectFit: "cover",
  },
  content: {
    maxWidth: "600px",
  },
  name: {
    fontSize: "2rem",
    marginBottom: "10px",
  },
  role: {
    fontSize: "1rem",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#555",
    paddingTop: "10px"
  },
  description: {
    fontSize: "1rem",
    color: "#555",
    paddingTop: "10px"
  },
};


