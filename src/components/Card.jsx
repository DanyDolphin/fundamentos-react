import React, {useState} from 'react';

// Style
import style from './Card.module.css';
import styleSass from './Card.module.scss'

function Card (props) {
    const [clicked, setClicked] = useState()

    function handleClick() {
        setClicked(!clicked)
    }

    return (
        <div 
            className={`card ${style.common} ${clicked ? 'card-active' : ''}`}
            onClick={handleClick}>
            {/*NUNCA USAR LA PROPIEDAD STYLE*/}
            <p 
                style={{ fontSize: '12px', backgroundColor: 'lightblue' }}
                className={styleSass['card-item']}>Subtitulo</p>
            {props.children}
        </div>
    )
}

export default Card;
