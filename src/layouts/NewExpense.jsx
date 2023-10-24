import React, { useState } from "react";

function NewExpense(props) {
    const [descripcion, setDescripcion] = useState('Descripcion generica')
    const [monto, setMonto] = useState(0)
    const [fecha, setFecha] = useState('2023-10-23')

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
        props.onNewExpense({
            descripcion: descripcion,
            monto: monto,
            fecha: fecha
        })
    }

    function expenseSummary() {
        return (`
        Descripcion: ${descripcion},
        Monto: ${monto},
        Fecha: ${fecha.toString()}
        `);
    }

    return (
        <>
        <input
            type="text"
            placeholder="Descripcion"
            value={descripcion}
            onChange={handleDescripcionChange}/>
        <br />
        <input
            type="text"
            placeholder="Monto"
            value={monto}
            onChange={handleMontoChange}/>
        <br />
        <input
            type="date"
            placeholder="Fecha"
            value={fecha}
            onChange={handleFechaChange}/>
        <button
            onClick={handleClick}>
            Agregar
        </button>
        <p>{expenseSummary()}</p>
        </>
    );
}

export default NewExpense;
