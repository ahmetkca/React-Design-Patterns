export const UserInfo = ({ user }) => {
    
    if (!user) {
        return <div>Loading...</div>
    }

    return user ? (
        <>
            <h3>{user.name}</h3>
            <p>Age: {user.age}</p>
            <p>Hair Color: {user.hairColor}</p>
            <h4>Hobbies:</h4>
            <ul>
                {user.hobbies.map((hobby, key) => <li key={key + hobby}>{hobby}</li>)}
            </ul>
        </>
    ) : <div>Loading...</div>;
}