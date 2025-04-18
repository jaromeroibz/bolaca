import React, { useState, useEffect, useRef } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faComment, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  useEffect(() => {
    if (!executeRecaptcha) {
        console.warn("reCAPTCHA is not ready yet.");
    }
  }, [executeRecaptcha]); 

  // Scroll to top when component mounts
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [location.pathname]); 
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setIsLoading(true);
    setError("");
    setSuccess("");
  
    // Email validation 
    const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
    if (!isValidEmail(email)) {
      setError("Por favor, ingresa un correo electrónico válido.");
      setIsLoading(false);
      return;
    }
  
    // reCAPTCHA validation
    if (!executeRecaptcha) {
      setError("ReCAPTCHA is not ready yet. Try again later.");
      setIsLoading(false);
      return;
    }
  
    try {
      // Send email using EmailJS
      const emailResult = await emailjs.sendForm(
        'service_hka0dgl',
        'template_imglx3f',
        form.current,
        '9eLEwOaSBpnE8vl56'
      );
  
      if (emailResult.status !== 200) {
        throw new Error('Failed to send email');
      }
  
      // Handle reCAPTCHA and backend submission
      const token = await executeRecaptcha("contact_form");
      const response = await fetch(`${process.env.BACKEND_URL}/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          name,
          email, 
          message, 
          "g-recaptcha-response": token 
        }),
      });
  
      const result = await response.json();
      
      if (result.error) {
        setError(result.error);
      } else {
        setSuccess("Mensaje enviado exitosamente.");
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log("Error submitting form:", error);
      setError("Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.");
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div className="contact-container">
      <div className="contact-card">
        <div className="contact-header">
          <h1 className="contact-title">Déjanos tu mensaje</h1>
          <p className="contact-subtitle">Nos pondremos en contacto contigo lo antes posible</p>
        </div>
        
        <form ref={form} onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
            <label htmlFor="name">Name*</label>
            <div className="input-group">
              <input
                type="text"
                id="name"
                value={name}
                name="user_name"
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                placeholder="Tu nombre"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail*</label>
            <div className="input-group">
              <span className="input-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                type="email"
                id="email"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Tu correo electrónico"
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Mensaje*</label>
            <div className="input-group">
              <span className="input-icon message-icon">
                <FontAwesomeIcon icon={faComment} />
              </span>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="form-control message-textarea"
                rows="5"
                maxLength="300"
                placeholder="¿En qué podemos ayudarte?"
                required
              ></textarea>
            </div>
            <div className="character-count">
              {message.length} / 300
            </div>
          </div>
          
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
          
          {success && (
            <div className="success-message">
              {success}
            </div>
          )}
          
          <button 
            type="submit" 
            className={`contact-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="spinner"></span>
            ) : (
              <>
                <span>Enviar</span>
                <FontAwesomeIcon icon={faPaperPlane} className="send-icon" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
