import style from './Expense.module.css';

import React from 'react'
import ExpenseDate from './ExpenseDate'
import Card from './Card/Card'

export function suma(num1, num2) {
    let resultado = num1 + num2;
    return resultado;
}

function Expense(props) {
    return (
        <Card>
            <ExpenseDate fecha={props.fecha}/>
            <div>
            <h1
                className={`${style.common}`}>{props.children || props.titulo || 'Valor por defecto'}</h1>
                <div>${props.precio}</div>
            </div>
        </Card>
    )
}

export default Expense;
