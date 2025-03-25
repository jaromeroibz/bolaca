import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [error, setError] = useState("");

  // Execute reCAPTCHA when the form is submitted
document.getElementById('my-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  grecaptcha.ready(function() {
      grecaptcha.execute('YOUR_SITE_KEY', {action: 'submit'})
      .then(function(token) {
          // Add the token to a hidden field in your form
          document.getElementById('recaptcha-token').value = token;
          // Submit the form
          document.getElementById('my-form').submit();
      });
  });
});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaVerified) {
      setError("Por favor verifica el reCAPTCHA.");
      return;
    }
    if (!email || !message) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    console.log("Formulario enviado:", { email, message });
    setError("");
    alert("Mensaje enviado exitosamente.");
  };

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(!!value); // Valida que el captcha se haya completado
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
        <div style={{ marginBottom: "15px" }}>
          <ReCAPTCHA
            sitekey="6Ldl6v8qAAAAADN4R2hbNfeBQdSnpFiQHx7PHscx" // Reemplaza con tu clave de sitio de Google reCAPTCHA
            onChange={handleCaptchaChange}
          />
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
