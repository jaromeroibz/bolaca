import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../store/appContext.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const LogIn = () => {
    const { store, actions } = useContext(AppContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]); // This will trigger when the route changes
    
    async function sendData(e) {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage('');
        
        // Add a small delay to show loading state
        setTimeout(async () => {
            try {
                // loginAdmin now returns the redirect URL on success
                const redirectUrl = await actions.loginAdmin(email, password);
                if (redirectUrl && store.auth === true) {
                    window.location.href = redirectUrl;
                } else {
                    setErrorMessage('Incorrect credentials. Please try again.');
                }
            } catch (error) {
                setErrorMessage('An error occurred. Please try again.');
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }, 600);
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-container">
            {store.auth === true ? (
                <AdminRedirect />
            ) : (
                <div className="login-card">
                    <div className="login-header">
                        <span className="login-subtitle">Iniciar sesión</span>
                        <h1 className="login-title">Hola Bolaca!</h1>
                    </div>
                    
                    <form onSubmit={sendData} className="login-form">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <div className="input-group">
                                <span className="input-icon">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </span>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-control"
                                    id="email"
                                    placeholder="Ingresa tu correo"
                                    required
                                />
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <div className="password-label-group">
                                <label htmlFor="password">Contraseña</label>
                                <a href="#" className="forgot-password">Olvidaste tu contraseña?</a>
                            </div>
                            <div className="input-group">
                                <span className="input-icon">
                                    <FontAwesomeIcon icon={faLock} />
                                </span>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="form-control"
                                    id="password"
                                    placeholder="Ingresa tu constraseña"
                                    required
                                />
                                <button 
                                    type="button" 
                                    className="password-toggle" 
                                    onClick={togglePasswordVisibility}
                                    tabIndex="-1"
                                >
                                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                </button>
                            </div>
                            {errorMessage && (
                                <div className="error-message">
                                    {errorMessage}
                                </div>
                            )}
                        </div>
                        
                        <div className="form-group remember-me">
                            <div className="custom-checkbox">
                                <input type="checkbox" id="remember" />
                                <label htmlFor="remember">Recuérdame</label>
                            </div>
                        </div>
                        
                        <button 
                            type="submit" 
                            className={`login-button ${isLoading ? 'loading' : ''}`}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <span className="spinner"></span>
                            ) : (
                                'Sign In'
                            )}
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

const AdminRedirect = () => {
    useEffect(() => {
        // Clean up the "next" query parameter if present
        const url = new URL(window.location.href);
        if (url.searchParams.has("next")) {
            url.searchParams.delete("next");
            window.history.replaceState(null, "", url.pathname);
        }
        // Then redirect to the admin page
        const adminUrl = process.env.BACKEND_URL;
        window.location.href = `${adminUrl}/admin`;
    }, []);

    return null;
};

export default LogIn;
