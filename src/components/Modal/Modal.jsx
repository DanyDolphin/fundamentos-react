import React from 'react';
import {createPortal} from 'react-dom';
import Card from '../Card/Card';

import classes from './classes.module.scss'

import {
    ModalActions,
    ModalHeader
} from './styles'

function ModalLayout ({titulo, descripcion, accion, isOpen, onConfirm}) {
    return isOpen ? (
        <Card className={classes.modal}>
            <ModalHeader>
                <h2>{titulo}</h2>
            </ModalHeader>
            <p id={classes.descripcion}>{descripcion}</p>
            <ModalActions>
                <button onClick={onConfirm}>{accion}</button>
            </ModalActions>
        </Card>
    ) : null;
}

function Modal (props) {
    return createPortal(
        <ModalLayout {...props}/>,
        document.getElementById('modal')
    )
}

export default Modal
