import React from "react";
import { useCurrentUser } from "./hooks/useCurrentUser";

export const UserInfo = () => {
  const [ user, loading ] = useCurrentUser();

  const { name, age, hairColor, hobbies } = user || {}

  return (user && !loading) ? (
    <div>
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
