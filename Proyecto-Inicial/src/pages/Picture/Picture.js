import React from 'react'
import { useParams } from 'react-router-dom'

import { pictures } from '../../shared/gatitos';

function Picture() {
    const {picId} = useParams();

    const gatito = pictures.find((picture) => picture.id == picId)

    return (
        <img src={gatito?.url} alt='gatito'/>
    )
}

export default Picture
