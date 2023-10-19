import React from 'react'

function Expense(props) {
    return (
        <div>
            <div>{props.fecha}</div>
            <div>
            <h1>{props.titulo}</h1>
                <div>${props.precio}</div>
            </div>
        </div>
    )
}

export default Expense;
