import React, { useState, useEffect } from 'react'

export const DataSource = ({ getDataFunction, resourceName, children }) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            console.log('fetching data')
            const response = await getDataFunction()
            const user = response;
            setData(user)
            setLoading(false)
        })()
    } , [getDataFunction]);

    return (
        <>  
            {loading ? <div>Loading...</div> :
                React.Children.map(children, child => {
                    if (React.isValidElement(child)) 
                        return React.cloneElement(child, { [resourceName]: data })
                    return child
                }
            )}
        </>
    )
}