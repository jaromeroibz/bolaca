import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import  Carousel1 from "../../img/Carousel1.png"
import  Carousel2 from "../../img/Carousel2.png"
import  Carousel3 from "../../img/Carousel3.png"


export const LandingPage = () => {

    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getProducts()
        getFilteredProducts()
    }, [])

    function getFilteredProducts() {
        const result = store.products.find( (item) => item.name === "Product 3")
        console.log(result)
    }

    return(
        <>
            <div className="landing-page">
                <div className="hero-carousel">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={Carousel1} className="d-block w-100" alt="Carousel1"></img>
                            </div>
                            <div className="carousel-item">
                            <img src={Carousel2} className="d-block w-100" alt="Carousel2"></img>
                            </div>
                            <div className="carousel-item">
                            <img src={Carousel3} className="d-block w-100" alt="Carousel3"></img>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="container">
                    <h1 className="Titulos mx-auto">Destacados</h1> 
                    

                </div>
                <div className="destacados">

                </div>
            </div>
        </>
    )

}