import React, { useState, useEffect } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const ContactForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!executeRecaptcha) {
        console.warn("reCAPTCHA is not ready yet.");
    }
  }, [executeRecaptcha]); // Runs when `executeRecaptcha` becomes available

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    if (!executeRecaptcha) {
      console.error("ReCAPTCHA is not ready yet. Try again later.");
      return;
    }

    try{
      const token = await executeRecaptcha("contact_form");
      const response = await fetch(`${process.env.BACKEND_URL}/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, "g-recaptcha-response": token }),
      });
  
      const result = await response.json();
      alert(result.message || result.error);

    } catch (error){

      console.log("Error submitting form:", error);

    }
    
    setError("");
    alert("Mensaje enviado exitosamente.");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", fontFamily: "Arial, sans-serif", paddingTop:"150px" }}>
      <h2>Déjanos tu mensaje</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px", paddingTop:"30px" }}>
          <label htmlFor="email" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
            E-mail*
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              boxSizing: "border-box",
            }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="message" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
            Mensaje*
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              boxSizing: "border-box",
              resize: "none",
            }}
            rows="5"
            maxLength="300"
            required
          ></textarea>
          <small style={{ display: "block", textAlign: "right" }}>{message.length} / 300</small>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button
          type="submit"
          style={{
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
