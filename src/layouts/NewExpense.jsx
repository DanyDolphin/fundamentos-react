import React from "react";

function NewExpense(props) {
    function handleDescripcionChange(event) {
        console.log(event.target.value)
    }

    return (
        <>
        <input
            type="text"
            placeholder="Descripcion"
            onChange={handleDescripcionChange}/>
        <br />
        <input type="text" placeholder="Monto" />
        <br />
        <input type="date" placeholder="Fecha" />
        <button>Agregar</button>
        </>
    );
}

export default NewExpense;
