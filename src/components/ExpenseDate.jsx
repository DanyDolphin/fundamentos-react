import './ExpenseDate.css'

import React from 'react';

function ExpenseDate(props) {
    return (
        <div className='expense-date'>
            <span className='expense-date-year'>{props.fecha.getFullYear()}</span>
            <span className='expense-date-month'>{props.fecha.getMonth()}</span>
            <span className='expense-date-day'>{props.fecha.getDate()}</span>
        </div>
    )
};

export default ExpenseDate;
