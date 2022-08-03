export const LargePersonListItem = ({ person }) => {

    const { name, age, hairColor, hobbies} = person;

    return (
        <>
            
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            <h4>Hobbies:</h4>
            <ul>
                {hobbies.map((hobby, key) => <li key={key + hobby}>{hobby}</li>)}
            </ul>
        </>
    );
}

