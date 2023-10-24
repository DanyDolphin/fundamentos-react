import React, { useState } from "react";

function NewExpense(props) {
    const [descripcion, setDescripcion] = useState('')
    const [monto, setMonto] = useState()
    const [fecha, setFecha] = useState('')

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
        <span>
            {!descripcion && "La descripcion no puede estar vacia"}
        </span>
        <br />
        <input
            type="text"
            placeholder="Monto"
            value={monto}
            onChange={handleMontoChange}/>
            {monto <= 50 && "El monto debe ser mayor a 50"}
        <br />
        <input
            type="date"
            placeholder="Fecha"
            value={fecha}
            onChange={handleFechaChange}/>
            <span>
                {!fecha && "La fecha no puede estar vacia"}
                </span>
        <button
            onClick={handleClick}>
            Agregar
        </button>
        <p>{expenseSummary()}</p>
        </>
    );
}

export default NewExpense;
