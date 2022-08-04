import React, { useState, useEffect } from 'react'

export const ResourceLoader  = ({ resourceUrl, resourceName, children }) => {
    const [resource, setResource] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        (async () => {
            console.log(`fetching ${resourceName}`)
            const response = await fetch(resourceUrl)
            const resource = await response.json()
            setResource(resource)
            setLoading(false)
        })()
    } , [resourceUrl]);

    return (
        <>  
            {loading ? <div>Loading {resourceName}...</div> :
                React.Children.map(children, child => {
                    if (React.isValidElement(child)) 
                        return React.cloneElement(child, { [resourceName]: resource })
                    return child
                }
            )}
        </>
    )
}



