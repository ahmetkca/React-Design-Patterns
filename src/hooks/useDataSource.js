import { useState, useEffect } from "react";

export const useDataSource = (getResource) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            (async () => {
                try {
                    const result = await getResource();
                    setData(result);
                    setLoading(false);
                } catch (error) {
                    setError(error);
                }
            })();
        } , 1000);
    }, [getResource]);

    return [data, loading, error];
}