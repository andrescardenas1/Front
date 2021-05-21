import React from 'react'

const persona = {
    nombre: 'andres',
    apellido: 'Cardenas Osorio',
    email: 'cardenas881@hotmail.com'

}

const ComponenteApp = () => {
    return (
        <>
            <h1>saludos desde  un Funcional de React </h1>
            <p>Objeto persona: {persona.nombre} {persona.apellido}</p>
            <p>Email: {persona.email}</p>
            <p>{JSON.stringify(persona, null, null)}</p>
        </>

    );
}
export default ComponenteApp;