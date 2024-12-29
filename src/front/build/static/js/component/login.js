import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { Context } from "../store/appContext";

export const LogIn = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // State for the error message

    function sendData(e) {
        e.preventDefault();

        // Assume actions.loginAdmin returns a promise and sets store.auth to true on success
        actions.loginAdmin(email, password)
            .then(() => {
                if (store.auth === true) {
                    window.location.href = process.env.BACKEND_URL + '/admin';
                } else {
                    setErrorMessage('Incorrect password. Please try again.'); // Set error message
                }
            })
            .catch(() => {
                setErrorMessage('An error occurred. Please try again.');
            });
    }

    return (
        <>
            <div className="container" style={{ paddingTop: "200px", maxWidth: "400px" }}>
                {store.auth === true ? (
                    window.location.href = process.env.BACKEND_URL + '/admin'
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
