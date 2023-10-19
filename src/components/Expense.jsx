import './Expense.css';

import React from 'react'
import ExpenseDate from './ExpenseDate'

export function suma(num1, num2) {
    return num1 + 2;
}

function Expense(props) {
    return (
        <div className='expense'>
            <ExpenseDate fecha={props.fecha}/>
            <div>
            <h1>{props.titulo}</h1>
                <div>${props.precio}</div>
            </div>
        </div>
    )
}

export default Expense;
