import React, { useState, useEffect } from 'react'

export const CurrentUserLoader = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        (async () => {
            console.log('fetching user')
            const response = await fetch('http://localhost:8080/current-user')
            const user = await response.json()
            setUser(user)
            setLoading(false)
        })()
    }, []);


    return (
        <>

            {loading ? <div>Loading Current User...</div> :
                React.Children.map(children, child => {
                    if (React.isValidElement(child)) 
                        return React.cloneElement(child, { user })
                    return child
                })
            }
        </>
    )
}
