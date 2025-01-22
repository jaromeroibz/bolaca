import React from 'react';
import { Link } from "react-router-dom";

const Success = () => {

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
