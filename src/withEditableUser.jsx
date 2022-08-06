import React, { useState, useEffect } from "react";

export const withEditableUser = (Component, userId, userResourceName = "user") => {
    return (props) => {
        const [originalUser, setOriginalUser] = useState(null);
        const [currentUser, setCurrentUser] = useState(originalUser);

        useEffect(() => {
            (async () => {
                const response = await fetch(`http://localhost:8080/users/${userId}`);
                const user = await response.json();
                setOriginalUser(user);
                setCurrentUser(user);
            })();
        }, [userId]);

        const onChangeUser = (changes) => {
            console.log("Changes: ", changes);
            console.log("Before: ", currentUser);
            setCurrentUser({ ...currentUser, ...changes });
            console.log("After: ", currentUser);
        }

        const onSaveUser = async () => {
            console.log("Saving user: ", currentUser);
            const response = await fetch(`http://localhost:8080/users/${userId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(currentUser)
            });
            const user = await response.json();
            console.log("Saved user: ", user);
            setOriginalUser(user);
            setCurrentUser(user);
        }

        const onResetUser = () => {
            setCurrentUser(originalUser);
        }

        return <Component 
                    {...props} 
                    {...{ [userResourceName]: currentUser }}
                    onChangeUser={onChangeUser}
                    onSaveUser={onSaveUser}
                    onResetUser={onResetUser}  />
    }
}