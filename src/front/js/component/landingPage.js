import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

export const LandingPage = () => {

    return(
        <>
        <div className="container">
            <div className="landing-page">
                <h1>Bolaca</h1>
            </div>
        </div>
        </>
    )

}