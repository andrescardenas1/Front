import React from 'react'

const persona = {
    nombre: 'andres',
    apellido: 'Cardenas Osorio',
    email: 'cardenas881@hotmail.com'

}

const ComponenteApp = (props) => {
    return (
        <>
           
            <h1>MultiParametros props</h1>
            <hr></hr>
            <p>Parametro 01 = {props.parm01}</p>
            <p>Parametro 02 = {props.parm02}</p>
            <p>Parametro 03 = {props.parm03}</p>
            <p>Objeto persona: {persona.nombre} {persona.apellido}</p>
            <p>Email: {persona.email}</p>
            <p>{JSON.stringify(persona, null, null)}</p>
        </>

    );
}
export default ComponenteApp;