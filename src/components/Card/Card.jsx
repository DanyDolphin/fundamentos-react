import React, {useState} from 'react';

// Style
import style from './Card.module.css';
import styleSass from './Card.module.scss'

import {
    CardLayout
} from './styles'

function Card (props) {
    const [clicked, setClicked] = useState()

    function handleClick() {
        setClicked(!clicked)
    }

    /*NUNCA USAR LA PROPIEDAD STYLE*/
    return (
        <CardLayout 
            className={`card ${style.common} ${clicked ? 'card-active' : ''}`}
            onClick={handleClick}>
            
            <p 
                style={{ fontSize: '12px', backgroundColor: 'lightblue' }}
                className={styleSass['card-item']}>Card</p>
            {props.children}
        </CardLayout>
    )
}

export default Card;
