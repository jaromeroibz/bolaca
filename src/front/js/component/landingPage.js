import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

export const LandingPage = () => {

    return(
        <>
        <div className="container">
            <div className="landing-page">
                <div className="carousel">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-interval="3000">
                        <ol className="carousel-indicators">
                            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="active"></li>
                        </ol>
                        <div className="carousel-inner">    
                            <div className="carousel-item active">
                                <img className="d-block w-100 object-fit-cover" src="https://i.pinimg.com/originals/10/c4/59/10c4599608f4a944743d0cba662669b0.jpg" alt="Second slide"></img>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100 object-fit-cover" src="https://i.pinimg.com/originals/e0/d3/1a/e0d31ad8a73edddb23573374f68c3a84.jpg" alt="Third slide"></img>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}