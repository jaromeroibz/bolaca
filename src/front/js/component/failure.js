import React from 'react'

const Failure = () => {

        // En tu página de success
    useEffect(() => {
        // Verificar que el pago fue fallido
        const status = new URLSearchParams(window.location.search).get('status');
        
        if (status === 'failure') {
                        
            alert('Lo sentimos, hubo un error en tu compra');
        }
    }, []);

    return(
        <>
            <div className='container' style={{ paddingTop: '200px' }}>
                <h1 className='mx-auto'>¡Lo sentimos, hubo un error en un tu compra!</h1>
            </div>
            <div>
                <Link style={{ textDecoration: 'None', color: 'black' }} to="/cart"><h2 className='mx-auto'>Vuelve al carrito</h2></Link>
            </div>
        </>

    )
}

export default Failure;
