import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

import styles from './styles.module.css'

import { pictures } from '../../shared/gatitos';

function Picture() {
    const {picId} = useParams();
    const [searchParams, setSerchParams] = useSearchParams()

    const gatito = pictures.find((picture) => picture.id == picId)

    return (
        <img 
            className={`${styles.picture} ${searchParams.get('gray') ? styles.gray : ''} ${searchParams.get('blur') ? styles.blur : ''}`}
            src={gatito?.url}
            alt='gatito'/>
    )
}

export default Picture
