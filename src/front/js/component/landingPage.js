import React, { useEffect, useContext, useRef } from "react";
import { AppContext } from "../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";
const Slider = SlickSlider.default || SlickSlider;
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const SliderWrapper = React.forwardRef((props, ref) => {
    return <Slider {...props} ref={ref} />;
});

const LandingPage = () => {
    const contextValue = useContext(AppContext);

    // Destructure with default values
    const { 
        store = { products: [], categories: [] }, 
        actions = {} 
    } = contextValue || {};

    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchData = async () => {
            try {
             
                if (typeof actions?.getProducts === 'function' && 
                    typeof actions?.getCategories === 'function') {
                    await Promise.all([
                        actions.getProducts(),
                        actions.getCategories()
                    ]);
                } else {
                    console.warn("Required actions not available");
                }
            } catch (error) {
                console.error("Error in fetchData:", error);
            }
        };

        fetchData();
    }, [actions]);

    // Safe access to products
    const result = React.useMemo(() => {
        return Array.isArray(store?.products) 
            ? store.products.filter(item => item?.is_destacado === true)
            : [];
    }, [store?.products]);


    function filterProducts(item) {
        actions.getProductByCategory(item);
        navigate('/productos');
    }

    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.current.slickNext();
    };
    const previous = () => {
        sliderRef.current.slickPrev();
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            }
        ]
    };

    return (
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
                                <Link to="/productos/1">
                                    <img src="https://res.cloudinary.com/dkfgpjg30/image/upload/v1744169782/Carousel1_d054rp.png" className="d-block w-100" alt="Carousel1"></img>
                                </Link>
                            </div>
                            <div className="carousel-item">
                                <Link to="/productos/2">
                                    <img src="https://res.cloudinary.com/dkfgpjg30/image/upload/v1744169782/Carousel2_j8j9dn.png" className="d-block w-100" alt="Carousel2"></img>
                                </Link>
                            </div>
                            <div className="carousel-item">
                                <Link to="/productos/3">
                                    <img src="https://res.cloudinary.com/dkfgpjg30/image/upload/v1744169782/Carousel3_wwi1ob.png" className="d-block w-100" alt="Carousel3"></img>
                                </Link>
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

                <div className="container py-4">
                    <h1 className="Titulos text-center">Destacados</h1>
                    <h6 className="text-center">
                        <Link to="/productos" style={{ textDecoration: 'none' }}>Ir a todos los productos</Link>
                    </h6>
                    <div className="container">
                        <button className="leftarrow" onClick={previous}>
                            <SlArrowLeft />
                        </button>
                        <div className="container" style={{ maxWidth: 850, overflow: 'hidden' }}>
                            <SliderWrapper
                            {...settings} 
                            ref={sliderRef}
                            vertical={false}
                        >
                            {result.map((item) => (
                                <Link to={`/detalleproductos/${item.id}`} key={item.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div className="py-5">
                                        <div className="card" style={{ width: 256, height: 350, margin: '0 auto' }}>
                                            {/* Ensure all images are the same size */}
                                            <img
                                                className="card-img-top"
                                                src={item.image}
                                                alt="Card image cap"
                                                style={{
                                                    width: '100%',
                                                    height: '200px',
                                                    objectFit: 'cover', 
                                                    objectPosition: 'center', 
                                                }}
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">{item.name}</h5>
                                                <p className="card-text">${item.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                            </SliderWrapper>
                        </div>

                        <button className="rightarrow" onClick={next}>
                            <SlArrowRight />
                        </button>
                    </div>
                </div>

                <div className="categorias py-4">
                    <h1 className="Titulos text-center py-4">Descubre nuestras categorías</h1>
                    <div className="container d-flex justify-content-center align-items-center" style={{ flexWrap: "wrap" }}>
                        {store.categories.map((item) => (
                            <div className="d-inline text-center m-3" key={item.id}>
                                <Link to={'/productos/' + item.id} style={{ textDecoration: 'none' }}>
                                    <img 
                                        src={item.image} 
                                        style={{ 
                                            width: "200px", 
                                            height: "200px", 
                                            objectFit: "cover", 
                                            borderRadius: "10px" 
                                        }} 
                                        alt="category image" 
                                    />
                                    <p className="py-1">{item.category_name}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    );
};

export default LandingPage;
