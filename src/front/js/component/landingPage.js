import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import  Carousel1 from "../../img/Carousel1.png"
import  Carousel2 from "../../img/Carousel2.png"
import  Carousel3 from "../../img/Carousel3.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const LandingPage = () => {

    useEffect(() => {
        actions.getProducts()
    }, [])

    const { store, actions } = useContext(Context);
    console.log(store.products)
    const result = store.products.filter( (item) => item.isDestacado == true)
    console.log(result)

    // var settings = {
    //     dots: true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     initialSlide: 0,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     responsive: [
    //       {
    //         breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 3,
    //           slidesToScroll: 3,
    //           infinite: true,
    //           dots: true
    //         }
    //       },
    //       {
    //         breakpoint: 600,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 2,
    //           initialSlide: 2
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1
    //         }
    //       }
    //     ]
    //   };

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
                <div className="container mx-auto">
                    <h1 className="Titulos text-center">Destacados</h1>
                    <h6 className="text-center"><Link to="/productos" style={{textDecoration: 'none' }}>Ir a todos los productos</Link></h6>
                    {/* <Slider {...settings}> */}
                    {result.map((item) =>
                        <div className="py-5"> 
                            <div className="card" style={{width: 200, height: 230}} key= {item.id}>
                            <img className="card-img-top" src="https://picsum.photos/200/200" alt="Card image cap"></img>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">${item.price}</p>
                                </div>
                            </div>
                        </div>
                    
                    )}
                    {/* </Slider>  */}

                </div>
            </div>
        </>
    )

}