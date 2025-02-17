import React, { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AppContext  } from "../store/appContext.js";

const LogIn = () => {
    const { store, actions } = useContext(AppContext );
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // State for the error message

    // Remove the "next" query parameter if present.
    useEffect(() => {
        const url = new URL(window.location.href);
        if (url.searchParams.has("next")) {
            url.searchParams.delete("next");
            window.history.replaceState(null, "", url.pathname);
        }
    }, []);

    const AdminRedirect = () => {
        useEffect(() => {
            // const adminUrl = process.env.BACKEND_URL.replace('/api', ''); use this for development
            const adminUrl = process.env.BACKEND_URL;
            window.location.href = `${adminUrl}/admin`;
        }, []);
        
        return null;
    };

    async function sendData(e) {
        e.preventDefault();
        // loginAdmin now returns the redirect URL on success
        const redirectUrl = await actions.loginAdmin(email, password);
        if (redirectUrl && store.auth === true) {
            window.location.href = redirectUrl;
        } else {
            setErrorMessage('Incorrect credentials. Please try again.');
        }
    }

    return (
        <>
            <div className="container" style={{ paddingTop: "200px", maxWidth: "400px" }}>
                {store.auth === true ? (
                    <AdminRedirect />
                ) : (
                    <>
                        <p>Sign in</p>
                        <h1>Welcome back!</h1>
                        <form onSubmit={(e) => sendData(e)}>
                            <div className="row">
                                <div className="col-12 mb-4">
                                    <div className="position-relative mb-4">
                                        <label className="my-2" htmlFor="exampleInputEmail1">Email address</label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="form-control my-2"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter email"
                                        />
                                    </div>
                                </div>
                                <div className="col-12 mb-4">
                                    <div className="position-relative mb-4">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="form-control my-2"
                                            id="exampleInputPassword1"
                                            placeholder="Password"
                                        />
                                        {/* Error message displayed here */}
                                        {errorMessage && (
                                            <small className="text-danger">
                                                {errorMessage}
                                            </small>
                                        )}
                                    </div>
                                </div>
                                <div className="col-12 mb-4">
                                    <div className="position-relative mb-4">
                                        <button type="submit" className="buy-now-button">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </>
    );
};

export default LogIn;
