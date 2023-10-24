import React from 'react';

// Style
import './Card.css';

function Card (props) {
    function handleClick() {
        console.log('me clickeaste!');
    }

    function handleMouseDown() {
        console.log('mouse down')
    }

    function handleMouseUp() {
        console.log('mouse up')
    }

    return (
        <div 
            className='card'
            onClick={handleClick}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}>
            {props.children}
        </div>
    )
}

export default Card;
