import React, { useEffect, useContext, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { Context } from "../store/appContext";

export const Productos = () =>{

    const { store, actions } = useContext(Context);
    const theid = useParams().theid //id de categoría
    const [selectedCategory, setselectedCategory] = useState(null); 
    const [selectedAgeRange, setSelectedAgeRange] = useState(null); 
    const [selectedPriceRange, setSelectedPriceRange] = useState(null);
    const [selectedBrand, setSelectedBrand] = useState(null);  


    useEffect(() => {
        actions.getProducts()
        actions.getProductByCategory(theid)
        actions.getBrands();
        actions.getCategories();
    }, []);

    const filterProductsByAgeRange = (products) => {
        if (!selectedAgeRange) return products; // Si no hay un rango de edad seleccionado, devolver todos los productos
        const [minAge, maxAge] = selectedAgeRange;
        return products.filter((item) => item.min_age >= minAge && item.max_age <= maxAge);
    };

    const filterProductsByPriceRange = (products) => {
        if (!selectedPriceRange) return products; // Si no hay un rango de precios seleccionado, devolver todos los productos
        const [minPrice, maxPrice] = selectedPriceRange;
        return products.filter((item) => item.price >= minPrice && item.price <= maxPrice);
    };

    // Filtrar productos por marca seleccionada
    const filterProductsByBrand = (products) => {
        if (!selectedBrand) return products; // Si no hay una marca seleccionada, devolver todos los productos
        return products.filter((item) => item.brand.name.toLowerCase() === selectedBrand.toLowerCase());
    };

    const filterProductsByCategory = (products) => {
        if (!selectedCategory) return products; // Si no hay una marca seleccionada, devolver todos los productos
        return products.filter((item) => item.category_name.toLowerCase() === selectedCategory.toLowerCase());
    };

    let filteredProducts = store.products;
    if (selectedAgeRange) {
        filteredProducts = filterProductsByAgeRange(filteredProducts);
    } else if (selectedPriceRange) {
        filteredProducts = filterProductsByPriceRange(filteredProducts);
    } else if (selectedBrand) {
        filteredProducts = filterProductsByBrand(filteredProducts);
    } else if (selectedCategory) {
        filteredProducts = filterProductsByCategory(filteredProducts);
    }

    const ageRanges = [
        { label: "0-2 años", range: [0, 2] },
        { label: "3-6 años", range: [3, 6] },
        { label: "7-10 años", range: [7, 10] }
    ];

    const priceRanges = [
        { label: "$0 - $50", range: [0, 50] },
        { label: "$51 - $100", range: [51, 100] },
        { label: "$101 - $200", range: [101, 200] }
    ];


    return(
        <>
        <div className="container">
            <div className="productos">
                <h2>Productos</h2>
                <h6 className="py-5">{filteredProducts.length} resultados</h6>
                <div className="row">
                    <div className="col-9">
                        <div className="cards">
                        {store.products.length === 0 ? (
                                <p>Cargando productos...</p>
                        ) : (
                            filteredProducts.length === 0 ? (
                                <h1>No hay productos que coincidan con el filtro seleccionado.</h1>
                            ) : (
                            filteredProducts.map((item) =>
                            <div className="card" style={{width: 284, height: 477}} key= {item.id}>
                                <img className="card-img-top" loading="lazy" src="https://picsum.photos/200/200" alt="Card image cap"></img>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">${item.price}</p>
                                    <div className="d-flex">
                                        <div>
                                            <Link to={`/detalleproductos/${item.id}`} style={{textDecoration: 'none' }}>
                                                <button className="see-more-button d-inline">Ver Más</button>
                                            </Link>
                                        </div>
                                        <div className="px-3">
                                            <button onClick={() => actions.addToCart(item)} className="add-cart-button">Agregar al carrito</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )))}
                        </div>
                    </div>
                    <div className="col-3 px-5">
                        <h6>Precio</h6>
                        {priceRanges.map((range, index) => (
                            <p key={index} 
                                onClick={() => {
                                setSelectedPriceRange(range.range); 
                                setSelectedAgeRange(null); 
                                setSelectedBrand(null);
                                }} 
                                style={{ cursor: 'pointer', color: selectedPriceRange === range.range ? 'blue' : 'black' }}
                            >
                                {range.label}
                            </p>
                        ))}
                        <hr></hr>
                        <h6>Marca</h6>
                        {store.brands.map((brand, index) => (
                            <p
                                key={index}
                                onClick={() => {
                                    setSelectedBrand(brand.name);
                                    setSelectedAgeRange(null); // Limpiar rango de edad
                                    setSelectedPriceRange(null); // Limpiar rango de precios
                                    actions.getProductsByBrands(brand.id);
                                }}
                                style={{ cursor: 'pointer', color: selectedBrand === brand ? 'blue' : 'black' }}
                            >
                                {brand.name}
                            </p>
                        ))}
                        <hr></hr>
                        <h6>Edad mínima recomendada</h6>
                        {ageRanges.map((range, index) => (
                            <p
                                key={index}
                                onClick={() => {
                                    setSelectedAgeRange(range.range);
                                    setSelectedPriceRange(null); // Limpiar rango de precios
                                    setSelectedBrand(null);      // Limpiar marca
                                }}
                                style={{ cursor: 'pointer', color: selectedAgeRange === range.range ? 'blue' : 'black' }}
                            >
                                {range.label}
                            </p>
                        ))}
                        <hr></hr>
                        <h6>Categoría</h6>
                        {store.categories.map((item, index) => (
                            <p
                                key={index}
                                onClick={() => {
                                    setselectedCategory(item.category_name);
                                    setSelectedAgeRange(null); // Limpiar rango de edad
                                    setSelectedPriceRange(null);
                                    setSelectedBrand(null); // Limpiar rango de precios
                                    actions.getProductByCategory(item.id);
                                }}
                                style={{ cursor: 'pointer', color: selectedCategory === item ? 'blue' : 'black' }}
                            >
                                {item.category_name}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>

    )
}