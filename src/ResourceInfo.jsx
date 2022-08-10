import { useResource } from "./hooks/useResource";

export const ResourceInfo = ({ resourceUrl }) => {
    const [data, loading, error] = useResource(resourceUrl);

    return (data && !loading) ? (
        <div>
            {/* {JSON.stringify(data)} */}
            {Object.keys(data).map(key => (
                <p key={key}>{key[0].toUpperCase() + key.substring(1)}: {data[key]}</p>
            ))}
        </div>
    ) : <div>Loading...</div>
}

