import React from 'react'
import Card from '../../components/UI/Card/Card'

import styles from '../Home/Home.module.css'

function Public () {
    return (
        <Card className={styles.home}>
            <h1>Zona publica</h1>
        </Card>
    )
}

export default Public