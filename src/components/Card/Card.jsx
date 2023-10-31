import React, {useState} from 'react';

// Style
import style from './Card.module.css';
import styleSass from './Card.module.scss'

import {
    CardLayout
} from './styles'

function Card ({children, className}) {
    const [clicked, setClicked] = useState()

    function handleClick() {
        setClicked(!clicked)
    }

    /*NUNCA USAR LA PROPIEDAD STYLE*/
    return (
        <CardLayout 
            className={`card ${style.common} ${clicked ? 'card-active' : ''} ${className}`}
            onClick={handleClick}>
            {children}
        </CardLayout>
    )
}

export default Card;
