import React, { useState } from "react";

function NewExpense(props) {
    const [descripcion, setDescripcion] = useState()
    const [monto, setMonto] = useState()
    const [fecha, setFecha] = useState()

    function handleDescripcionChange(event) {
        setDescripcion(event.target.value)
    }

    function handleMontoChange(event) {
        setMonto(event.target.value)
    }

    function handleFechaChange(event) {
        setFecha(event.target.value)
    }

    function handleClick() {
        console.log(`
        Descripcion: ${descripcion}
        Monto: ${monto}
        Fecha: ${fecha.toString()}
        `);
    }

    return (
        <>
        <input
            type="text"
            placeholder="Descripcion"
            onChange={handleDescripcionChange}/>
        <br />
        <input
            type="text"
            placeholder="Monto"
            onChange={handleMontoChange}/>
        <br />
        <input
            type="date"
            placeholder="Fecha"
            onChange={handleFechaChange}/>
        <button
            onClick={handleClick}>
            Agregar
        </button>
        </>
    );
}

export default NewExpense;
