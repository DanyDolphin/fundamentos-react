import React from 'react';
import Card from '../../components/UI/Card/Card';

import styles from './styles.module.css'
import { pictures } from '../../shared/gatitos';

function Gallery () {
    return (
        <Card className="home">
            <h1>Galeria</h1>
            {pictures.map((picture) => (
                <img
                    key={picture.id}
                    className={styles['gallery-image']}
                    src={picture.url}
                    alt="Imagen de gatito"
                />
            ))}
        </Card>
    )
}

export default Gallery
