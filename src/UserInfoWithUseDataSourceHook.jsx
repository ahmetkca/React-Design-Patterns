import { useDataSource } from "./hooks/useDataSource";

const localStorageResource = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(localStorage.getItem("message"));
        } , 1000);
    });
}


export const UserInfoWithUseDataSourceHook = ({ userId }) => {
    const [message, messageLoading ] = useDataSource(localStorageResource);
    const [ user, loading ] = useDataSource(() => fetch(`http://localhost:8080/users/${userId}`).then(res => res.json()));
    const { name, age, hairColor, hobbies } = user || {}
    
    return (user && !loading) ? (
        <div>
            {messageLoading ? <p>Message from localStorage is loading...</p> : <p>Message from localStorage: {message}</p>}
            <h1>{name}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            <h3>Hobbies</h3>
            <ul>
                {hobbies.map(hobby => (
                <li key={hobby}>{hobby}</li>
                ))}
            </ul>
        </div>
    ) : <div>Loading...</div>
}
