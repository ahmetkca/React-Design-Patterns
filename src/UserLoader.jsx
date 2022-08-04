import React, { useState, useEffect } from 'react'

export const UserLoader = ({ userId, children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            console.log(`fetching user with id ${userId}`)
            const response = await fetch(`http://localhost:8080/users/${userId}`)
            const user = await response.json()
            setUser(user)
            setLoading(false)
        })()
    }, [userId]);

    return (
        <>
            {loading ? <div>Loading User with id {userId}...</div> :
                React.Children.map(children, child => {
                    if (React.isValidElement(child)) 
                        return React.cloneElement(child, { user })
                    return child
                })
            }
        </>
    )
}

