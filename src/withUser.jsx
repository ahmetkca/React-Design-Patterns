import React, { useEffect, useState } from 'react';

export const withUser = (Component, userId, userResourceName = "user") => {
    return (props) => {
        const [user, setUser] = useState(null);
    
        useEffect(() => {
            (async () => {
                const response = await fetch(`http://localhost:8080/users/${userId}`);
                const user = await response.json();
                setUser(user);
            })();
        } , [userId]);

        return <Component {...props} {...{ [userResourceName]: user }} />
    }
}