import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

export const LandingPage = () => {

    return(
        <>
        <div className="container">
            <div className="landing-page">
                <div className="carrousel">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img className="d-block w-25" src="https://acdn.mitiendanube.com/stores/001/374/086/products/ayuda-a-joe-11-983e4167513967aeb416699958466795-1024-1024.webp" width={250} height={250} alt="First slide"></img>
                            </div>
                            <div className="carousel-item">
                            <img className="d-block w-100" src="..." alt="Second slide"></img>
                            </div>
                            <div className="carousel-item">
                            <img className="d-block w-100" src="..." alt="Third slide"></img>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
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