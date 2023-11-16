import React from 'react'
import Card from '../../components/UI/Card/Card'

import styles from '../Home/Home.module.css'
import { useState } from 'react';
import useHttp from '../../hooks/useHttp';
import { useEffect } from 'react';
import useInitialData from '../../hooks/useInitialData';

function Public () {
    // const [data, setData] = useState();
    // const [loading, setLoading] = useState();
    // const [error, setError] = useState();

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             setLoading(true)
    //             const response = await fetch()
    //             const data = await response.json()
    //             setData(data);
    //             setLoading(false)
    //         } catch(err) {
    //             setError(err)
    //         }
    //     }
    //     fetchData()
    // }, [])
    const {data} = useInitialData('');

    return (
        <Card className={styles.home}>
            <h1>{data}</h1>
        </Card>
    )
}

export default Public