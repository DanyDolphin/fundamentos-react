import React, { useState } from "react";
import {
    FormGroup,
    FormValidationFeedback
} from '../../shared/forms'
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";

function NewExpense(props) {
    const [descripcion, setDescripcion] = useState('')
    const [monto, setMonto] = useState()
    const [fecha, setFecha] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(true) 

    function handleMontoChange(event) {
        setMonto(event.target.value)
    }

    function handleFechaChange(event) {
        setFecha(event.target.value)
    }

    function handleClick() {
        setIsModalOpen(true);
        // props.onNewExpense({
        //     titulo: descripcion,
        //     precio: monto,
        //     fecha: new Date(fecha+'T07:00:00')
        // })
    }

    function expenseSummary() {
        return (`
        Descripcion: ${descripcion},
        Monto: ${monto},
        Fecha: ${fecha.toString()}
        `);
    }

    return (
        <Card>
        <FormGroup
            isInvalid={!descripcion}>
            <label
                htmlFor="descripcion">
                Descripcion
            </label>
            <input
                name="descripcion"
                type="text"
                placeholder="Descripcion"
                value={descripcion}
                onChange={(event) => setDescripcion(event.target.value)}/>
            <FormValidationFeedback>
                {!descripcion && "La descripcion no puede estar vacia"}
            </FormValidationFeedback>
        </FormGroup>
        <FormGroup>
            <input
                type="text"
                placeholder="Monto"
                value={monto}
                onChange={handleMontoChange}/>
            <FormValidationFeedback>
                {monto <= 50 && "El monto debe ser mayor a 50"}
            </FormValidationFeedback> 
        </FormGroup>
        
        <FormGroup>
            <label htmlFor="fecha">
                Fecha
            </label>
            <input
                name="fecha"
                type="date"
                placeholder="Fecha"
                value={fecha}
                onChange={handleFechaChange}/>
            <FormValidationFeedback>
                {!fecha && "La fecha no puede estar vacia"}
            </FormValidationFeedback>
        </FormGroup>
        
        <button
            onClick={handleClick}>
            Agregar
        </button>
        <p>{expenseSummary()}</p>

        <Modal
            titulo={'Mi modal'}
            descripcion={'Esto es un modal'}
            accion={'Confirmar'}
            isOpen={isModalOpen}
            onConfirm={() => setIsModalOpen(false)}/>
        </Card>
    );
}

export default NewExpense;
