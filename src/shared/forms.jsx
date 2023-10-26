import React from 'react'
import styled from 'styled-components'

export const FormGroup = styled.div`
    margin-bottom: 16px;

    & input {
        border: 1px solid var(${(props) => props.isInvalid ? '--red' : '--gray'});
        border-radius: 4px;
        padding: 4px;
    }

    & label {
        display: block;
        margin-bottom: 8px;
        color: #474745;
    }
`

export const FormValidationFeedback = styled.span`
    display: block;
    color: var(--red);
`