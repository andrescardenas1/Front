import React from 'react'

console.log("Componente capturador  de Evento  en pantalla ");

const ComponenteEventoApp = () => {

    console.log('.:ComponenteEventoApp.:');
    const eventoClick = (e) =>{
        console.log(e);
    }
    return (
        <>
            <h1>Evento  click  Componente React </h1>
            <h5>capturador de Evento click</h5>
            <hr></hr>
            <button onClick={eventoClick}>Click Aqui</button>
        </>
    )
}

export default ComponenteEventoApp;