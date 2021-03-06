import React, { useState } from 'react'



const ContadorApp = ({ Valor_Contador }) => {

    console.log('.:ComponenteEventoApp.:');

    const [contador, setContador] = useState(Valor_Contador);

    const funcionSumar = () => {
        setContador(contador + 1);
    }

    const  funcionRestar = () =>{
        setContador (contador - 1 )
    }

    const  funcionRestaurar = () =>{
        setContador (Valor_Contador )
    }

    const contarClick = () => {
        setContador(contador + 1);
        console.log('Contador = ', contador);
    }
    return (
        <>
            <h1>Evento  click  Componente React </h1>
            <h5>Acumulador de clicks</h5>
            <hr></hr>
            <h1>Contador = {contador}</h1>
            <hr></hr>
            <button onClick={contarClick}>Contador + 1 </button>
            <button onClick={funcionSumar}>Sumar </button>
            <button onClick={funcionRestar}>Restar</button>
            <button onClick={funcionRestaurar}> Restaurar</button>
        </>
    )
}

export default ContadorApp;