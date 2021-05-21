import React from 'react'

const persona = {
    nombre: 'andres',
    apellido: 'Cardenas Osorio',
    email: 'cardenas881@hotmail.com'

}

const ComponenteApp = ({parm01,parm02,parm03}) => {
    return (
        <>
            <h1>MultiParametros</h1>
            <hr></hr>
            <p>Parametro 01 = {parm01}</p>
            <p>Parametro 02 = {parm02}</p>
        </>

    );
}
export default ComponenteApp;