import React, { useEffect } from 'react';
//const axios = require('axios').default;

const Promociones = () => {

    useEffect(() => {
        getUnplashImage()
    }, []);

    const getUnplashImage = (() => {
    
        setTimeout(() => {
         console.log("Llamando a metodo")
        }, 3000 )
    
    });

    return(
        <div>
            Promo
        </div>
    );
}

export default Promociones;