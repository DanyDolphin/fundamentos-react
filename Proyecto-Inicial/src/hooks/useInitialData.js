import { useState } from "react";
import { useEffect } from "react";
import useHttp from "./useHttp";

const useInitialData = (url) => {
    const [data, setData] = useState()
    const {error, isLoading, request} = useHttp();

    useEffect(() => {
        const fetchData = async () => {
            const response = await request(url);
            setData(response);
        }
    
        fetchData();
    }, []);

    return {error, isLoading, data};
}

export default useInitialData
