import React from 'react';
import Card from '../../components/UI/Card/Card';

import styles from './styles.module.css'
import { pictures } from '../../shared/gatitos';
import { Link } from 'react-router-dom';

function Gallery () {
    return (
        <Card className="home">
            <h1>Galeria</h1>
            {pictures.map((picture) => (
                <Link
                    key={picture.id}
                    to={`/gallery/${picture.id}`}>
                    <img
                        className={styles['gallery-image']}
                        src={picture.url}
                        alt="Imagen de gatito"
                    />
                </Link>
            ))}
        </Card>
    )
}

export default Gallery
