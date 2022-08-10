



const isObject = (obj) => {
    return typeof obj === 'object' && obj !== null;
}



export const RecursiveComponent = ({ data }) => {
    if (!isObject(data)) {
        return (
            <li>{data}</li>
        )
    }

    const pairs = Object.entries(data);
    return (
        <>
            {pairs.map(([key, value]) => (
                <li key={key}>
                    <strong>{key}</strong>
                    <ul>
                        <RecursiveComponent data={value} />
                    </ul>
                </li>
            ))}
        </>
    )

}