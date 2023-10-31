import React from 'react';
import {createPortal} from 'react-dom';
import Card from '../Card/Card';

import classes from './classes.module.scss'

import {
    ModalActions,
    ModalHeader
} from './styles'

function Modal ({titulo, descripcion, accion}) {

    return createPortal(
        <Card className={classes.modal}>
            <ModalHeader>
                <h2>{titulo}</h2>
            </ModalHeader>
            <p id={classes.descripcion}>{descripcion}</p>
            <ModalActions>
                <button>accion</button>
            </ModalActions>
        </Card>,
        document.getElementById('modal')
    )
}

export default Modal
