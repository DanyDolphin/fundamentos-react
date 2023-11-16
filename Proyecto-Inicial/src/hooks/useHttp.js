import { useCallback, useState } from "react";

const useHttp = () => {
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(true);

    const request = useCallback(async (url) => {
        setIsLoading(true);
        const response = await fetch(url);

        if (!response.ok) {
            setError('Error al obtener datos del usuario.');
            return
        }

        const responseData = await response.json();
        setIsLoading(false);
        return responseData
    }, []);

    return {error, isLoading, request}
};

export default useHttp;
