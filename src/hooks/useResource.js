import { useState, useEffect } from "react";

export const useResource = (resourceUrl) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            (async () => {
                try {
                    const response = await fetch(resourceUrl);
                    const ret = await response.json();
                    setData(ret);
                    setLoading(false);
                } catch (error) {
                    setError(error);
                }
            })();
        } , 1000);
    }, [resourceUrl]);

    return [data, loading, error];
}
