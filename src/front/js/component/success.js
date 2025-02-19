import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

const Success = () => {
    
    // En tu página de success
useEffect(() => {
    // Verificar que el pago fue exitoso
    const status = new URLSearchParams(window.location.search).get('status');
    
    if (status === 'approved') {

        localStorage.removeItem('cart'); 
                
        alert('¡Compra realizada con éxito!');
    }
}, []);

    return(

        <div className='container' style={{paddingTop: '200px'}}>
            <h1 className='mx-auto'>¡Compra realizada exitosamente!</h1>
            <div>
                <Link style={{textDecoration: 'None', color: 'black'}} to="/productos/999"><h2 className='mx-auto'>Sigue comprando</h2></Link>
            </div>
        </div>

    )
};

export default Success;
