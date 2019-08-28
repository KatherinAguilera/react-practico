import React from'react';

const HolaMundo = () => {
    const Hello = '¡Hola Mundo!';
    const isTrue = true;
    return(
        <div className="HolMundo">
            <h1>{Hello}</h1>
            <h2>Curso esencial de React</h2>
            <img src="https://cdn.auth0.com/blog/react-js/react.png"alt=""/>
            {/*
            Validacion if - false normal
            */}

            {isTrue ? <h4>Esto es verdadero</h4> : <h5>Soy falso</h5>}

            {/*
            Otra forma de hacer validaciones, si es true, se ejecuta, si es falsa, no pasa nada
            */}
            {isTrue && <h4>Soy verdadero x2</h4>}

        </div>
    );
};
export default HolaMundo;